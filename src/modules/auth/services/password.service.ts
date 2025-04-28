import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";
import { ApiError } from "../../../core/exceptions";
import { EmailService } from "../../../shared/services/email.service";

const prisma = new PrismaClient();

export class PasswordService {
  async requestReset(email: string) {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return; // Don't reveal if user exists

    const token = crypto.randomBytes(32).toString("hex");
    const expiresAt = new Date(Date.now() + 3600000); // 1 hour

    await prisma.passwordReset.create({
      data: { userId: user.id, token, expiresAt },
    });

    await EmailService.sendResetEmail(user.email, token);
  }

  async resetPassword(token: string, newPassword: string) {
    const resetRecord = await prisma.passwordReset.findFirst({
      where: { token, expiresAt: { gt: new Date() } },
    });

    if (!resetRecord) throw new ApiError(400, "Invalid or expired token");

    const hashedPassword = await bcrypt.hash(newPassword, 12);

    await prisma.$transaction([
      prisma.user.update({
        where: { id: resetRecord.userId },
        data: { hashedPassword },
      }),
      prisma.passwordReset.deleteMany({
        where: { userId: resetRecord.userId },
      }),
    ]);
  }
}
