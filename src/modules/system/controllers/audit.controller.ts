import { Request, Response } from "express";

export class AuditController {
  async getAuditLogs(req: Request, res: Response) {
    // Fetch logs from database
    res.json({ message: "Audit logs not implemented yet" });
  }
}
