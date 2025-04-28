export class EmailService {
    static async sendResetEmail(email: string, token: string) {
      // In production, use Nodemailer or SendGrid
      console.log(`Password reset link: http://yourapp.com/reset-password?token=${token}`);
      return true;
    }
  