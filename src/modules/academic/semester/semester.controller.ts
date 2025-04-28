import { Request, Response } from "express";
import { SemesterService } from "./semester.service";

export class SemesterController {
  constructor(private semesterService: SemesterService) {}

  async createSemester(req: Request, res: Response) {
    const { name, year } = req.body;
    if (!name || !year) {
      return res.status(400).json({ message: "Name and year are required." });
    }
    const semester = await this.semesterService.createSemester({ name, year });
    res.status(201).json(semester);
  }

  async getSemesters(req: Request, res: Response) {
    const semesters = await this.semesterService.getSemesters();
    res.json(semesters);
  }
}
