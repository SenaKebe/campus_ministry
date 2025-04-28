import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET!;

export class SessionService {
  async createSession(userId: number) {
    const token = jwt.sign({ sub: userId }, JWT_SECRET, {
      expiresIn: "7d",
    });

    await prisma.session.create({
      data: {
        userId,
        token,
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      },
    });

    return token;
  }

  async revokeSession(token: string) {
    await prisma.session.deleteMany({
      where: { token },
    });
  }

  async validateSession(token: string) {
    try {
      const payload = jwt.verify(token, JWT_SECRET) as { sub: number };
      const session = await prisma.session.findFirst({
        where: {
          token,
          expiresAt: { gt: new Date() },
        },
      });

      if (!session) return null;
      return payload.sub;
    } catch {
      return null;
    }
  }
}
