import express from "express";
import { config } from "./config/env.config";
const app = express();

const { port } = config;

app.get("/hello", (_, res) => {
  res.send("Hello Vite + TypeScript!");
});

app.listen(port, () => console.log(`Server is listening on port ${port}...`));
