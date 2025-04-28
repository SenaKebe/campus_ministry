import { prisma } from "../../../config/prisma";

export class SemesterService {
  async createSemester(data: { name: string; year: number }) {
    return prisma.semester.create({
      data,
    });
  }

  async getSemesters() {
    return prisma.semester.findMany();
  }
}
