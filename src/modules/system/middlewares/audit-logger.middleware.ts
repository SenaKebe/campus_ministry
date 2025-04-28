import { Request, Response, NextFunction } from "express";
import { AuditService } from "../services/audit.service";

const auditService = new AuditService();

// Extend Express Request to include `user`
interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    role: string;
    // add more fields if needed
  };
}

export function auditLogger(action: string, metadata?: any) {
  return async (
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const userId = req.user?.id || "anonymous";

      await auditService.logActivity(userId, action, metadata);
    } catch (error) {
      console.error("Audit log failed:", (error as Error).message);
    }

    next();
  };
}
