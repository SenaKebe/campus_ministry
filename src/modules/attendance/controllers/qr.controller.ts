import { Request, Response } from "express";
import { QRService } from "../services/qr.service";

export class QRController {
  constructor(private qrService: QRService) {}

  async generateQRCode(req: Request, res: Response) {
    const { data } = req.body;
    const qrCode = await this.qrService.generateQRCode(data);
    res.json({ qrCode });
  }

  async scanQRCode(req: Request, res: Response) {
    const { qrData } = req.body;
    const decoded = await this.qrService.scanQRCode(qrData);
    res.json({ decoded });
  }
}
