import { Request, Response, NextFunction } from "express";
import { SessionService } from "../../modules/auth/services/session.service";

export const authenticate = (requiredRole?: USERROLE) => {
  const sessionService = new SessionService();

  return async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ error: "Unauthorized" });

    const userId = await sessionService.validateSession(token);
    if (!userId) return res.status(401).json({ error: "Invalid session" });

    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: { profile: true },
    });

    if (!user || !user.isActive) {
      return res.status(403).json({ error: "Account disabled" });
    }

    if (requiredRole && user.role !== requiredRole) {
      return res.status(403).json({ error: "Insufficient permissions" });
    }

    req.user = new UserEntity(
      user.id,
      user.email,
      user.role,
      user.profile!,
      user.isActive
    );

    next();
  };
};
