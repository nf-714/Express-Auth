import express from "express";
import { config } from "./config/env.config";
import { Auth } from "./controllers/auth/auth.controller";

const app = express();

const { port } = config;

const auth = new Auth({
  emailAndPassword: {
    enable: true,
  },
});

auth.signIn({ email: "email", password: "password" });

app.get("/hello", (_, res) => {
  res.send("Hello Vite + TypeScript!");
});

app.listen(port, () => console.log(`Server is listening on port ${port}...`));
