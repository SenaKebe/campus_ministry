import { EmailTemplate } from "../../config/email-templates";

export class NotificationService {
  async sendUserCreatedEmail(email: string, tempPassword?: string) {
    const template = EmailTemplate.USER_CREATED;
    const body = tempPassword
      ? template.withPassword(tempPassword)
      : template.withoutPassword();

    await sendEmail({
      to: email,
      subject: "Your Campus Ministry Account",
      html: body,
    });
  }
}
