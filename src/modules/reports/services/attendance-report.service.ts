import { prisma } from "../../../config/prisma";

export class AttendanceReportService {
  async getStudentAttendance(studentId: string) {
    return prisma.attendance.findMany({
      where: { studentId },
    });
  }

  async getBatchAttendance(batchId: string) {
    return prisma.attendance.findMany({
      where: { student: { batchId } },
      include: {
        student: true,
      },
    });
  }
}
