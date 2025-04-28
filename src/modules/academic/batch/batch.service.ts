import { prisma } from "../../../config/prisma"; // Adjust if your prisma import path is different

export class BatchService {
  async createBatch(data: { name: string; year: number }) {
    return prisma.batch.create({
      data,
    });
  }

  async getBatches() {
    return prisma.batch.findMany();
  }
}
