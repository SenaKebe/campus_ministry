import { Request, Response } from "express";
import { AttendanceService } from "../services/attendance.service";
import { validateMarkAttendance } from "../validators/mark-attendance.validator";

export class AttendanceController {
  constructor(private attendanceService: AttendanceService) {}

  async markAttendance(req: Request, res: Response) {
    const data = validateMarkAttendance(req.body);
    const attendance = await this.attendanceService.markAttendance(data);
    res.status(201).json(attendance);
  }

  async getAttendanceRecords(req: Request, res: Response) {
    const { studentId } = req.query;
    const records = await this.attendanceService.getAttendanceRecords(
      studentId as string
    );
    res.json(records);
  }
}
