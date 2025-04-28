import { Request, Response } from "express";
import { UserService } from "../services";
import { validateCreateUser, validateUpdateUser } from "../validators";
import { UserResponseDto } from "../dtos";

export class UserController {
  constructor(private readonly userService: UserService) {}

  async create(req: Request, res: Response) {
    const { error, value } = validateCreateUser(req.body);
    if (error) throw new ApiError(400, error.message);

    const user = await this.userService.createUser(validatedData, req.user.id);
    const response: UserResponseDto = this.toResponseDto(user);

    res.status(201).json(response);
  }

  async update(req: Request, res: Response) {
    const { error, value } = validateUpdateUser(req.body);
    if (error) throw new ApiError(400, error.message);

    const user = await this.userService.updateUser(
      parseInt(req.params.id),
      value
    );

    res.json(this.toResponseDto(user));
  }

  async list(req: Request, res: Response) {
    const result = await this.userService.listUsers({
      role: req.query.role as USERROLE,
      page: parseInt(req.query.page as string) || 1,
      limit: parseInt(req.query.limit as string) || 10,
      search: req.query.search as string,
    });

    res.json(result);
  }

  private toResponseDto(user: any): UserResponseDto {
    return {
      id: user.id,
      email: user.email,
      role: user.role,
      isActive: user.isActive,
      profile: {
        firstName: user.profile.firstName,
        lastName: user.profile.lastName,
      },
    };
  }
}
