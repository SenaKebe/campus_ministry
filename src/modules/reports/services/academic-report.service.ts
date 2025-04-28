import { prisma } from "../../../config/prisma";

export class AcademicReportService {
  async getStudentTranscript(studentId: string) {
    return prisma.grade.findMany({
      where: { studentId },
      include: {
        course: true,
        semester: true,
      },
      orderBy: {
        semester: {
          startDate: "asc",
        },
      },
    });
  }

  async getBatchPerformance(batchId: string) {
    return prisma.grade.groupBy({
      by: ["studentId"],
      where: { student: { batchId } },
      _avg: {
        score: true,
      },
    });
  }
}
