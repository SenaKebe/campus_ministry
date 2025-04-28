import cron from "node-cron";
import { BackupService } from "../services/backup.service";

const backupService = new BackupService();

export function scheduleBackup() {
  cron.schedule("0 2 * * *", async () => {
    try {
      console.log("📦 Starting daily backup...");

      const outputPath = `./backups/backup-${new Date().toISOString()}.txt`;

      await backupService.backupDatabase(outputPath);

      console.log("✅ Backup completed!");
    } catch (error) {
      if (error instanceof Error) {
        console.error("❌ Backup failed:", error.message);
      } else {
        console.error("❌ Backup failed:", error);
      }
    }
  });
}
