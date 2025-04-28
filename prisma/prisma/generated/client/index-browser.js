
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  role: 'role',
  email: 'email',
  password: 'password',
  salt: 'salt',
  resetToken: 'resetToken',
  resetExpires: 'resetExpires',
  lastLoginAt: 'lastLoginAt',
  lastPasswordChange: 'lastPasswordChange',
  isActive: 'isActive',
  deletedAt: 'deletedAt',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ProfileScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  phone: 'phone',
  firstName: 'firstName',
  middleName: 'middleName',
  lastName: 'lastName',
  gender: 'gender',
  dateOfBirth: 'dateOfBirth',
  address: 'address',
  imageUrl: 'imageUrl'
};

exports.Prisma.BatchScalarFieldEnum = {
  id: 'id',
  name: 'name',
  year: 'year',
  startDate: 'startDate',
  endDate: 'endDate',
  isActive: 'isActive',
  createdAt: 'createdAt'
};

exports.Prisma.SemesterScalarFieldEnum = {
  id: 'id',
  name: 'name',
  code: 'code',
  type: 'type',
  startDate: 'startDate',
  endDate: 'endDate',
  isCurrent: 'isCurrent',
  createdAt: 'createdAt'
};

exports.Prisma.CourseScalarFieldEnum = {
  id: 'id',
  semesterId: 'semesterId',
  code: 'code',
  name: 'name',
  description: 'description',
  creditHours: 'creditHours',
  createdAt: 'createdAt'
};

exports.Prisma.CourseOfferingScalarFieldEnum = {
  id: 'id',
  courseId: 'courseId',
  teacherId: 'teacherId',
  batchId: 'batchId',
  semesterId: 'semesterId',
  isActive: 'isActive',
  capacity: 'capacity'
};

exports.Prisma.ClassScheduleScalarFieldEnum = {
  id: 'id',
  offeringId: 'offeringId',
  dayOfWeek: 'dayOfWeek',
  startTime: 'startTime',
  endTime: 'endTime',
  location: 'location'
};

exports.Prisma.AttendanceScalarFieldEnum = {
  id: 'id',
  studentId: 'studentId',
  batchId: 'batchId',
  status: 'status',
  recordedById: 'recordedById',
  date: 'date',
  notes: 'notes',
  createdAt: 'createdAt'
};

exports.Prisma.StudentScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  batchId: 'batchId',
  rollNumber: 'rollNumber',
  isActive: 'isActive',
  createdAt: 'createdAt'
};

exports.Prisma.TeacherScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  isActive: 'isActive',
  createdAt: 'createdAt'
};

exports.Prisma.TestScalarFieldEnum = {
  id: 'id',
  courseId: 'courseId',
  studentId: 'studentId',
  score: 'score',
  maxScore: 'maxScore',
  testDate: 'testDate',
  createdAt: 'createdAt'
};

exports.Prisma.MidExamScalarFieldEnum = {
  id: 'id',
  courseId: 'courseId',
  studentId: 'studentId',
  score: 'score',
  maxScore: 'maxScore',
  examDate: 'examDate',
  createdAt: 'createdAt'
};

exports.Prisma.FinalExamScalarFieldEnum = {
  id: 'id',
  courseId: 'courseId',
  studentId: 'studentId',
  score: 'score',
  maxScore: 'maxScore',
  examDate: 'examDate',
  createdAt: 'createdAt'
};

exports.Prisma.AssignmentScalarFieldEnum = {
  id: 'id',
  courseId: 'courseId',
  studentId: 'studentId',
  score: 'score',
  maxScore: 'maxScore',
  dueDate: 'dueDate',
  submittedAt: 'submittedAt',
  createdAt: 'createdAt'
};

exports.Prisma.TotalResultScalarFieldEnum = {
  id: 'id',
  studentId: 'studentId',
  courseId: 'courseId',
  totalScore: 'totalScore',
  gradeLetter: 'gradeLetter',
  weightings: 'weightings',
  calculatedAt: 'calculatedAt',
  createdAt: 'createdAt'
};

exports.Prisma.AuditLogScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  action: 'action',
  entityType: 'entityType',
  entityId: 'entityId',
  metadata: 'metadata',
  createdAt: 'createdAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.JsonNullValueInput = {
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};
exports.USERROLE = exports.$Enums.USERROLE = {
  TEACHER: 'TEACHER',
  STUDENT: 'STUDENT',
  REGISTRAR: 'REGISTRAR',
  ADMIN: 'ADMIN',
  SUPER_ADMIN: 'SUPER_ADMIN'
};

exports.SemesterType = exports.$Enums.SemesterType = {
  FIRST: 'FIRST',
  SECOND: 'SECOND',
  SUMMER: 'SUMMER',
  WINTER: 'WINTER'
};

exports.AttendanceStatus = exports.$Enums.AttendanceStatus = {
  PRESENT: 'PRESENT',
  ABSENT: 'ABSENT',
  LATE: 'LATE',
  EXCUSED: 'EXCUSED'
};

exports.AuditAction = exports.$Enums.AuditAction = {
  CREATE: 'CREATE',
  UPDATE: 'UPDATE',
  DELETE: 'DELETE',
  LOGIN: 'LOGIN',
  PASSWORD_CHANGE: 'PASSWORD_CHANGE',
  GRADE_UPDATE: 'GRADE_UPDATE'
};

exports.Prisma.ModelName = {
  User: 'User',
  Profile: 'Profile',
  Batch: 'Batch',
  Semester: 'Semester',
  Course: 'Course',
  CourseOffering: 'CourseOffering',
  ClassSchedule: 'ClassSchedule',
  Attendance: 'Attendance',
  Student: 'Student',
  Teacher: 'Teacher',
  Test: 'Test',
  MidExam: 'MidExam',
  FinalExam: 'FinalExam',
  Assignment: 'Assignment',
  TotalResult: 'TotalResult',
  AuditLog: 'AuditLog'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
