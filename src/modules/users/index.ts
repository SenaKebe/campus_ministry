import { UserService } from "./services/user.service";
import { ProfileService } from "./services/profile.service";
import userRouter from "./user.routes";

export const userModule = {
  service: new UserService(),
  profileService: new ProfileService(),
  router: userRouter,
};

export type UserModule = typeof userModule;
