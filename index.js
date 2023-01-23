import dotenv from "dotenv";
dotenv.config();
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import threatRoutes from "./routes/threats.js";
import userRoutes from "./routes/users.js";
const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "90mb", extended: true }));
app.use(cors());

app.use("/threats", threatRoutes);
app.use("/user", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello to Daily News API");
});

const PORT = 5000;
const CONNECTION_URL='mongodb+srv://admin:yZ7cuz30U2gXdE9a@frameworki.kmkvoii.mongodb.net/ZAGROZENIA-APP?retryWrites=true&w=majority';

mongoose
  .set("strictQuery",false)
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => app.listen(PORT, () => console.log("działa")))
  .catch((err) => console.log(err));