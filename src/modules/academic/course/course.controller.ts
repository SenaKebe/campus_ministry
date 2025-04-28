import { Request, Response } from "express";
import { CourseService } from "./course.service";
import { validateCourse } from "./course.validator";

export class CourseController {
  constructor(private courseService: CourseService) {}

  async createCourse(req: Request, res: Response) {
    const data = validateCourse(req.body);
    const course = await this.courseService.createCourse(data);
    res.status(201).json(course);
  }

  async getCourses(req: Request, res: Response) {
    const courses = await this.courseService.getCourses();
    res.json(courses);
  }
}
