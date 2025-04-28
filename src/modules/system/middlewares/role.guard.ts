import { Request, Response, NextFunction } from "express";

export function roleGuard(requiredRole: "SUPER_ADMIN" | "ADMIN" | "USER") {
  return (req: Request, res: Response, next: NextFunction) => {
    const userRole = req.user?.role; // assuming req.user exists after auth

    if (!userRole) {
      return res
        .status(401)
        .json({ message: "Unauthorized - No user role found" });
    }

    if (userRole !== requiredRole) {
      return res
        .status(403)
        .json({ message: "Forbidden - Insufficient permissions" });
    }

    next();
  };
}
/*
export function roleGuard(requiredRoles: ('SUPER_ADMIN' | 'ADMIN' | 'USER')[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    const userRole = req.user?.role;

    if (!userRole || !requiredRoles.includes(userRole)) {
      return res.status(403).json({ message: 'Forbidden' });
    }

    next();
  };
}

*/
