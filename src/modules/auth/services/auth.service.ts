import bcrypt from "bcryptjs";
import { ApiError } from "../../../core/exceptions";
import { UserEntity } from "../../../core/entities/user.entity";
import { PrismaClient, USERROLE } from "@prisma/client";

const prisma = new PrismaClient();

export class AuthService {
  async register(data: {
    email: string;
    password: string;
    role: USERROLE;
    firstName: string;
    lastName: string;
  }) {
    const existingUser = await prisma.user.findUnique({
      where: { email: data.email },
    });

    if (existingUser) {
      throw new ApiError(400, "Email already registered");
    }

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(data.password, salt);

    const newUser = await prisma.user.create({
      data: {
        email: data.email,
        password: hashedPassword,
        salt,
        role: data.role,
        profile: {
          create: {
            firstName: data.firstName,
            lastName: data.lastName,
          },
        },
      },
      include: { profile: true },
    });

    return new UserEntity(
      newUser.id,
      newUser.email ?? "",
      newUser.role,
      newUser.profile ?? { firstName: "", lastName: "" }
    );
  }

  async login(email: string, password: string) {
    const user = await prisma.user.findUnique({
      where: { email },
      include: { profile: true },
    });

    if (!user) {
      throw new ApiError(401, "Invalid credentials");
    }

    const passwordValid = await bcrypt.compare(password, user.password);
    if (!passwordValid) {
      throw new ApiError(401, "Invalid credentials");
    }

    return new UserEntity(
      user.id,
      user.email ?? "",
      user.role,
      user.profile ?? { firstName: "", lastName: "" }
    );
  }
}
