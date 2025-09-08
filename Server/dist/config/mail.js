import nodemailer from "nodemailer";
export const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: process.env.EMAIL_PORT,
    auth: {
        user: process.env.EMAIL_FROM,
        pass: process.env.EMAIL_PASSWORD,
    },
});
export const sendEmail = async (to, subject, html) => {
    await transporter.sendMail({
        from: `"Clash Team" <${process.env.EMAIL_FROM}>`,
        to: to,
        subject: subject,
        html: html,
        headers: {
            "X-Priority": "1",
            "X-MSMail-Priority": "High",
            Importance: "High",
        },
    });
};
