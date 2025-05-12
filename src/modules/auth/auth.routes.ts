import { Router } from "express";
import { AuthController } from "./controllers/auth.controller";
import { AuthService } from "./services/auth.service";
import { asyncHandler } from "../../utils/asyncHandler";

const router = Router();
const authService = new AuthService();
const controller = new AuthController(authService);

// Routes
router.post("/register", asyncHandler(controller.register.bind(controller)));
router.post("/login", asyncHandler(controller.login.bind(controller)));

// Optional: implement logout only if using token blacklist or tracking
// router.post("/logout", asyncHandler(controller.logout.bind(controller)));

export default router;
