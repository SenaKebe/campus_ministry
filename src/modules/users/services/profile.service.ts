import { PrismaClient } from "@prisma/client";
import { UpdateProfileDto } from "../dtos";

const prisma = new PrismaClient();

export class ProfileService {
  async updateProfile(userId: number, data: UpdateProfileDto) {
    return prisma.profile.update({
      where: { userId },
      data: {
        firstName: data.firstName,
        lastName: data.lastName,
        phone: data.phone,
        address: data.address,
      },
    });
  }

  async getProfile(userId: number) {
    return prisma.profile.findUnique({
      where: { userId },
    });
  }
}
