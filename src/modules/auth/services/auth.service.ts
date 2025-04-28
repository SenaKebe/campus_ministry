import bcrypt from "bcryptjs";
import { ApiError } from "../../../core/exceptions";
import { UserEntity } from "../../../core/entities/user.entity";
import { PrismaClient, USERROLE } from "@prisma/client"; // ✅ correct import

const prisma = new PrismaClient();

export class AuthService {
  async register(data: {
    email: string;
    password: string;
    role: USERROLE; // ✅ directly use USERROLE here
    firstName: string;
    lastName: string;
  }) {
    const exists = await prisma.user.findUnique({
      where: { email: data.email },
    });
    if (exists) throw new ApiError(400, "Email already registered");

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(data.password, salt);

    const user = await prisma.user.create({
      data: {
        email: data.email,
        password: hashedPassword,
        salt: salt,
        role: data.role, // ✅ no casting needed now
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
      user.id,
      user.email ?? "",
      user.role,
      user.profile ?? { firstName: "", lastName: "" }
    );
  }
  async login(email: string, password: string) {
    const user = await prisma.user.findUnique({
      where: { email },
      include: { profile: true },
    });

    if (!user) throw new ApiError(401, "Invalid credentials");

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) throw new ApiError(401, "Invalid credentials");

    return new UserEntity(
      user.id,
      user.email ?? "", // ✅ fix here too
      user.role,
      user.profile!
    );
  }
}
