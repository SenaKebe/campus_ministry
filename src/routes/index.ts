// import { Router } from "express";
// import { authRouter } from "../modules/auth/auth.routes";
// import { userRouter } from "../modules/users/users.routes";
// import { academicRouter } from "../modules/academic/academic.routes";
// import { attendanceRouter } from "../modules/attendance/attendance.routes";
// import { examRouter } from "../modules/examination/examination.routes";
// import { assignmentRouter } from "../modules/assignment/assignments.routes";
// import { systemRouter } from "../modules/system/system.routes";
// import { studentRouter } from "../modules/students/students.routes";
// import { teacherRouter } from "../modules/teachers/teachers.routes";

// const router = Router();

// router.use("/auth", authRouter);
// router.use("/users", userRouter);
// router.use("/academic", academicRouter);
// router.use("/attendance", attendanceRouter);
// router.use("/exams", examRouter);
// router.use("/assignments", assignmentRouter);
// router.use("/system", systemRouter);
// router.use("/students", studentRouter);
// router.use("/teachers", teacherRouter);

// export default router;

// src/routes/index.ts
import { Router } from "express";
import authRoutes from "../modules/auth/auth.routes";
// import other module routes here
// import studentRoutes from "../modules/students/student.routes";
// import teacherRoutes from "../modules/teachers/teacher.routes";

const router = Router();

router.use("/auth", authRoutes);
// router.use("/students", studentRoutes);
// router.use("/teachers", teacherRoutes);

export default router;
