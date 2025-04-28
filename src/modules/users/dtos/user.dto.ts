import { USERROLE } from "../../../core/enums";

export type CreateUserDto = {
  email: string;
  role: USERROLE;
  firstName: string;
  lastName: string;
  password?: string; // Optional for admin-created users
};

export type UpdateUserDto = {
  isActive?: boolean;
  role?: USERROLE;
};

export type UserResponseDto = {
  id: number;
  email: string;
  role: USERROLE;
  isActive: boolean;
  profile: {
    firstName: string;
    lastName: string;
  };
};
