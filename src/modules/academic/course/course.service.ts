import { prisma } from "../../../config/prisma";

export class CourseService {
  async createCourse(data: { name: string; code: string; creditHour: number }) {
    return prisma.course.create({
      data,
    });
  }

  async getCourses() {
    return prisma.course.findMany();
  }
}
