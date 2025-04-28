import { prisma } from "../../../config/prisma";

export class AttendanceService {
  async markAttendance(data: {
    studentId: string;
    date: string;
    status: "PRESENT" | "ABSENT";
  }) {
    return prisma.attendance.create({
      data,
    });
  }

  async getAttendanceRecords(studentId: string) {
    return prisma.attendance.findMany({
      where: { studentId },
    });
  }
}
