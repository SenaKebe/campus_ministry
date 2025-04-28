import { Router } from "express";
import { AuthController } from "./controllers/auth.controller";
import { AuthService } from "./services/auth.service";
import { SessionService } from "./services/session.service";
import { asyncHandler } from "../../utils/asyncHandler";
const router = Router();
const authService = new AuthService();
const sessionService = new SessionService();
const controller = new AuthController(authService, sessionService);

router.post("/register", asyncHandler(controller.register.bind(controller)));
router.post("/login", asyncHandler(controller.login.bind(controller)));
router.post("/logout", asyncHandler(controller.logout.bind(controller)));

export default router;

// import { authRateLimiter } from '../middleware';

// authRouter.post('/login', authRateLimiter, controller.login);
// authRouter.post('/register', authRateLimiter, controller.register);
