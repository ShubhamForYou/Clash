import express from "express";
import "dotenv/config";
import path from "path";
import { fileURLToPath } from "url";
import ejs from "ejs";
import { emailQueue, emailQueueName } from "./jobs/emailJobs.js";
const _dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// set view engine
app.set("view engine", "ejs");
app.set("views", path.resolve(_dirname, "./views"));
const templatePath = path.join(_dirname, "../src/views/emails/welcome.ejs");
app.get("/", async (req, res) => {
    const html = await ejs.renderFile(templatePath, {
        name: "SMaverick",
        year: new Date().getFullYear(),
        heroGifUrl: "https://media.giphy.com/media/duzpaTbCUy9Vu/giphy.gif",
        ctaLink: "https://clash.app/start",
        twitterUrl: "https://twitter.com/",
        instagramUrl: "https://instagram.com/",
        linkedinUrl: "https://linkedin.com/",
        twitterIcon: "https://cdn-icons-png.flaticon.com/512/733/733579.png",
        instagramIcon: "https://cdn-icons-png.flaticon.com/512/733/733558.png",
        linkedinIcon: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
    });
    // await sendEmail("samshubham142@gmail.com", "verification email", html);
    await emailQueue.add(emailQueueName, {
        to: "samshubham142@gmail.com",
        subject: "Verification email",
        html: html,
    });
    return res.json({ msg: "email send " });
});
// <-------------------Queue------------->
import "./jobs/index.js";
const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
    console.log(`✅Server running on port no: ${PORT}`);
    console.log(`http://localhost:${PORT}`);
});
