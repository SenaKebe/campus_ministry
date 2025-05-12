import { Request, Response, NextFunction } from "express";
import { AuthService } from "../services/auth.service";
import { validateLogin } from "../validators/login.validator";
import { validateRegister } from "../validators/register.validator";
import { USERROLE } from "@prisma/client";

export class AuthController {
  constructor(private readonly authService: AuthService) {}

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

      // If you plan to add JWT later, generate token here
      return res.status(201).json({ user });
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

      // If using JWT, you can attach token here
      return res.json({ user });
    } catch (err) {
      next(err);
    }
  }

  // Uncomment and implement only if using token/session-based logout
  // async logout(req: Request, res: Response, next: NextFunction) {
  //   try {
  //     const token = req.headers.authorization?.split(" ")[1];
  //     if (token) await this.sessionService.revokeSession(token);
  //     return res.status(204).send();
  //   } catch (err) {
  //     next(err);
  //   }
  // }
}
