import { Request, Response } from "express";
import { BatchService } from "./batch.service";
import { validateBatch } from "./batch.validator";

export class BatchController {
  constructor(private batchService: BatchService) {}

  async createBatch(req: Request, res: Response) {
    const data = validateBatch(req.body);
    const batch = await this.batchService.createBatch(data);
    res.status(201).json(batch);
  }

  async getBatches(req: Request, res: Response) {
    const batches = await this.batchService.getBatches();
    res.json(batches);
  }
}
