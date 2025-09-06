import express, { Application, Request, Response } from "express";
import "dotenv/config";
import path from "path";
import { fileURLToPath } from "url";
import ejs from "ejs";
import { sendEmail } from "./config/mail.js";
const _dirname = path.dirname(fileURLToPath(import.meta.url));
const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// set view engine
app.set("view engine", "ejs");
app.set("views", path.resolve(_dirname, "./views"));
const templatePath = path.join(_dirname, "../src/views/emails/welcome.ejs");
app.get("/", async (req: Request, res: Response) => {
  const html = await ejs.renderFile(templatePath, {
    name: "SMaverick",
    year: new Date().getFullYear(),
  });
  await sendEmail("samshubham142@gmail.com", "verification email", html);
  return res.json({ msg: "email send " });
});
const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(`✅Server running on port no: ${PORT}`);
});
