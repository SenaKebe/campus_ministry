import { prisma } from "../../../config/prisma";
import { startOfDay, endOfDay, startOfMonth, endOfMonth } from "date-fns";

export class ReportsService {
  async getDailyReport(date: string) {
    const start = startOfDay(new Date(date));
    const end = endOfDay(new Date(date));

    return prisma.attendance.findMany({
      where: {
        date: {
          gte: start,
          lte: end,
        },
      },
    });
  }

  async getMonthlyReport(month: number, year: number) {
    const start = startOfMonth(new Date(year, month - 1));
    const end = endOfMonth(new Date(year, month - 1));

    return prisma.attendance.findMany({
      where: {
        date: {
          gte: start,
          lte: end,
        },
      },
    });
  }
}
