import { PrismaClient, AuditAction } from "@prisma/client";

const prisma = new PrismaClient();

export class AuditService {
  async log(
    userId: number,
    action: AuditAction,
    entityType: string,
    entityId: number,
    metadata?: object
  ) {
    return prisma.auditLog.create({
      data: {
        userId,
        action,
        entityType,
        entityId,
        metadata: metadata || {},
      },
    });
  }
}
