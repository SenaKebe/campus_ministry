import QRCode from "qrcode";

export class QRService {
  async generateQRCode(data: string) {
    return QRCode.toDataURL(data);
  }

  async scanQRCode(qrData: string) {
    // In real-world apps, scanning happens on the client side.
    // Here, we assume qrData is already the decoded data.
    return qrData;
  }
}
