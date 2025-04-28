import { AuthService } from "./services/auth.service";
import { SessionService } from "./services/session.service";
import authRouter from "./auth.routes";

export const authModule = {
  service: new AuthService(),
  sessionService: new SessionService(),
  router: authRouter,
};

export type AuthModule = typeof authModule;
