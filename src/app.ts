import express from "express";
import cors from "cors";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import dotenv from "dotenv";
dotenv.config();
import { auditLogger } from "./modules/system/middlewares/audit-logger.middleware";
import { scheduleBackup } from "./modules/system/tasks/backup.task";

import allRoutes from "./routes";

const PORT = process.env.SERVER_PORT || 5000;
scheduleBackup();

const app = express();

app.use(auditLogger("General Access"));

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Swagger setup
const swaggerSpec = swaggerJsdoc({
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Campus Ministry API",
      version: "1.0.0",
    },
  },
  apis: ["./src/routes/*.ts", "./src/controllers/*.ts"],
});
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Mount all module routes
app.use("/api", allRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

export default app;
