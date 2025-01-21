import cors from "cors";
import express from "express";
import { config } from "./config/env.config";

const app = express();

const { port, appOrigin } = config;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: appOrigin,
    credentials: true,
  })
);

app.get("/hello", (_, res) => {
  res.send("Hello Vite + TypeScript!");
});

app.listen(port, () => console.log(`Server is listening on port ${port}...`));
