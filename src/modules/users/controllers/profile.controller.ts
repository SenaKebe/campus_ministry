import { Request, Response } from "express";
import { ProfileService } from "../services";

export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  async update(req: Request, res: Response) {
    const profile = await this.profileService.updateProfile(
      req.user.id, // From auth middleware
      req.body
    );
    res.json(profile);
  }

  async get(req: Request, res: Response) {
    const profile = await this.profileService.getProfile(req.user.id);
    res.json(profile);
  }
}
