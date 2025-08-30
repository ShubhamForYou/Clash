import nodemailer from "nodemailer";
export const transporter = nodemailer.createTransport({
    host: "",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: "maddison53@ethereal.email",
        pass: "jn7jnAPss4f63QBp6D",
    },
});
export const sendEmail = async (to, subject, body) => {
    await transporter.sendMail({
        from: process.env.FROM_EMAIL,
        to: to,
        subject: subject,
        html: body,
    });
};
