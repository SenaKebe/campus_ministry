import { Router } from "express";
import { BatchController } from "./batch/batch.controller";
import { BatchService } from "./batch/batch.service";
import { CourseController } from "./course/course.controller";
import { CourseService } from "./course/course.service";
import { SemesterController } from "./semester/semester.controller";
import { SemesterService } from "./semester/semester.service";

const router = Router();

// Initialize services and controllers
const batchService = new BatchService();
const batchController = new BatchController(batchService);

const courseService = new CourseService();
const courseController = new CourseController(courseService);

const semesterService = new SemesterService();
const semesterController = new SemesterController(semesterService);

// Batch routes
router.post("/batch", (req, res) => batchController.createBatch(req, res));
router.get("/batch", (req, res) => batchController.getBatches(req, res));

// Course routes
router.post("/course", (req, res) => courseController.createCourse(req, res));
router.get("/course", (req, res) => courseController.getCourses(req, res));

// Semester routes
router.post("/semester", (req, res) =>
  semesterController.createSemester(req, res)
);
router.get("/semester", (req, res) =>
  semesterController.getSemesters(req, res)
);

export default router;
