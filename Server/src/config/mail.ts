import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport/index.js";
export const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: process.env.EMAIL_PORT,
  auth: {
    user: process.env.EMAIL_FROM,
    pass: process.env.EMAIL_PASSWORD,
  },
} as SMTPTransport.Options);

export const sendEmail = async (to: string, subject: string, body: string) => {
  await transporter.sendMail({
  from: process.env.EMAIL_FROM,
  to: to,
  subject: subject,
  html: body,
  headers: {
    "X-Priority": "1",
    "X-MSMail-Priority": "High",
    Importance: "High",
    },
  });
};
