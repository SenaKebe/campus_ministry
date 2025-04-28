import { Router } from "express";
import { AuditController } from "./controllers/audit.controller";
import { SettingsController } from "./controllers/settings.controller";
import { BackupService } from "./services/backup.service";

const router = Router();
const auditController = new AuditController();
const settingsController = new SettingsController();
const backupService = new BackupService();

// Audit routes
router.get("/audit-logs", (req, res) => auditController.getLogs(req, res));

// Settings routes
router.get("/settings", (req, res) => settingsController.getSettings(req, res));
router.post("/settings", (req, res) =>
  settingsController.updateSetting(req, res)
);

// Backup route
router.post("/backup", async (req, res) => {
  const { outputPath } = req.body;
  const backup = await backupService.backupDatabase(outputPath);
  res.json(backup);
});

export default router;
