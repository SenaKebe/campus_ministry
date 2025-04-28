import { Router } from "express";
import { AttendanceController } from "./controllers/attendance.controller";
import { QRController } from "./controllers/qr.controller";
import { ReportsService } from "./services/reports.service";
import { AttendanceService } from "./services/attendance.service";
import { QRService } from "./services/qr.service";

const router = Router();

// Initialize services and controllers
const attendanceService = new AttendanceService();
const attendanceController = new AttendanceController(attendanceService);

const qrService = new QRService();
const qrController = new QRController(qrService);

const reportsService = new ReportsService();

// Attendance routes
router.post("/mark", (req, res) =>
  attendanceController.markAttendance(req, res)
);
router.get("/records", (req, res) =>
  attendanceController.getAttendanceRecords(req, res)
);

// QR routes
router.post("/qr/generate", (req, res) =>
  qrController.generateQRCode(req, res)
);
router.post("/qr/scan", (req, res) => qrController.scanQRCode(req, res));

// Reports routes
router.get("/report/daily", async (req, res) => {
  const { date } = req.query;
  const report = await reportsService.getDailyReport(date as string);
  res.json(report);
});

router.get("/report/monthly", async (req, res) => {
  const { month, year } = req.query;
  const report = await reportsService.getMonthlyReport(
    Number(month),
    Number(year)
  );
  res.json(report);
});

export default router;
