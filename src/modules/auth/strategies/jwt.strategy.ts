import { Request } from "express";
import { SessionService } from "../services/session.service";

export class JwtStrategy {
  constructor(private readonly sessionService: SessionService) {}

  async validate(req: Request) {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return null;

    return this.sessionService.validateSession(token);
  }
}
