import { Request, Response, NextFunction } from "express";
import { AuthService } from "../services/auth.service";
import { validateLogin } from "../validators/login.validator";
import { validateRegister } from "../validators/register.validator";
import { SessionService } from "../services/session.service";
import { USERROLE } from "@prisma/client";

export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly sessionService: SessionService
  ) {}

  async register(req: Request, res: Response, next: NextFunction) {
    try {
      const result = validateRegister(req.body);

      if (!result.success) {
        return res.status(400).json({ error: result.error.errors });
      }

      const user = await this.authService.register(
        result.data as {
          email: string;
          password: string;
          role: USERROLE;
          firstName: string;
          lastName: string;
        }
      );
      const token = await this.sessionService.createSession(user.id);

      return res.status(201).json({ user, token });
    } catch (err) {
      next(err);
    }
  }

  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const result = validateLogin(req.body);
      if (!result.success) {
        return res.status(400).json({ error: result.error.errors });
      }

      const user = await this.authService.login(
        result.data.email,
        result.data.password
      );
      const token = await this.sessionService.createSession(user.id);

      return res.json({ user, token });
    } catch (err) {
      next(err);
    }
  }

  async logout(req: Request, res: Response, next: NextFunction) {
    try {
      const token = req.headers.authorization?.split(" ")[1];
      if (token) await this.sessionService.revokeSession(token);

      return res.status(204).send();
    } catch (err) {
      next(err);
    }
  }
}
