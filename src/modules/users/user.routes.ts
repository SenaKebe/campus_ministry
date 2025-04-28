import { Router } from "express";
import { UserController } from "./controllers";
import { ProfileController } from "./controllers";
import { UserService } from "./services";
import { ProfileService } from "./services";
import { authenticate } from "../../api/middleware";

const router = Router();
const userService = new UserService();
const profileService = new ProfileService();
const userController = new UserController(userService);
const profileController = new ProfileController(profileService);

// Admin-only routes
router.post(
  "/users",
  authenticate("ADMIN"),
  userController.create.bind(userController)
);

router.patch(
  "/users/:id",
  authenticate("ADMIN"),
  userController.update.bind(userController)
);

// Authenticated user routes
router.patch(
  "/profile",
  authenticate(),
  profileController.update.bind(profileController)
);

router.get(
  "/profile",
  authenticate(),
  profileController.get.bind(profileController)
);

export default router;
