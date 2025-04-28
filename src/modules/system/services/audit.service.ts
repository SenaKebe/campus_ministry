export class AuditService {
  async logActivity(
    userId: string,
    action: string,
    metadata?: any
  ): Promise<void> {
    // Save activity log to database or print it
    console.log(
      `[Audit Log] User: ${userId}, Action: ${action}, Metadata:`,
      metadata
    );
    // TODO: Save to MongoDB if needed
  }
}
