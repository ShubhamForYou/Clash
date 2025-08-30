import express from "express";
import "dotenv/config";
import path from "path";
import { fileURLToPath } from "url";
const _dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// set view engine
app.set("view engine", "ejs");
app.set("views", path.resolve(_dirname, "./views"));
app.get("/", (req, res) => {
    return res.render("welcome");
});
const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
    console.log(`✅Server running on port no: ${PORT}`);
});
