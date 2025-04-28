import { Router } from "express";
import { AttendanceReportService } from "./services/attendance-report.service";
import { AcademicReportService } from "./services/academic-report.service";
import { ExportService } from "./services/export.service";

const router = Router();

const attendanceReportService = new AttendanceReportService();
const academicReportService = new AcademicReportService();
const exportService = new ExportService();

// Attendance Reports
router.get("/attendance/:studentId", async (req, res) => {
  const { studentId } = req.params;
  const report = await attendanceReportService.getStudentAttendance(studentId);
  res.json(report);
});

// Academic Reports
router.get("/transcript/:studentId", async (req, res) => {
  const { studentId } = req.params;
  const transcript = await academicReportService.getStudentTranscript(
    studentId
  );
  res.json(transcript);
});

// Export Reports
router.post("/export/pdf", async (req, res) => {
  const { templateName, data, outputFilePath } = req.body;
  const file = await exportService.exportPDF(
    templateName,
    data,
    outputFilePath
  );
  res.json(file);
});

router.post("/export/excel", async (req, res) => {
  const { data, columns, outputFilePath } = req.body;
  const file = await exportService.exportExcel(data, columns, outputFilePath);
  res.json({ path: file });
});

export default router;
