import { createTransport } from "nodemailer";
import { config } from "../config/env.config";
export async function sendVerificationEmail(params: any) {
  const { identifier, subject, text } = params;

  const transporter = createTransport({
    host: config.email.server,
    port: config.email.port,
    secure: config.email.secure,
    auth: {
      user: config.email.user,
      pass: config.email.pass,
    },
  });

  const result = await transporter.sendMail({
    from: `'${process.env.EMAIL_NAME}' ${process.env.EMAIL_FROM}`, // sender address
    to: `${identifier}`, // list of receivers
    subject: subject, // Subject line
    text: text,
  });

  return result;
}
