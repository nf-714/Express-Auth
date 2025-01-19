import { configDotenv } from "dotenv";

configDotenv();

type ConfigValues = {
  port: string | undefined;
  nodeEnv: string | undefined;
  dbUrl: string | undefined;
  appOrigin: string | undefined;
  jwt: {
    secret: string | undefined;
    expiresIn: string | Date | undefined;
  };
  jwtRefresh: {
    secret: string | undefined;
    expiresIn: string | number | Date | undefined;
  };
  email: {
    server: string | undefined;
    from: string | undefined;
    name: string | undefined;
    port: number;
    secure: boolean;
    user: string | undefined;
    pass: string | undefined;
  };
};

export const config: ConfigValues = {
  port: process.env.PORT,
  nodeEnv: process.env.NODE_ENV,
  dbUrl: process.env.DATABASE_URL,
  appOrigin: process.env.APP_ORIGIN,
  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRES_IN,
  },
  jwtRefresh: {
    secret: process.env.JWT_REFRESH_SECRET,
    expiresIn: process.env.JWT_REFRESH_EXPIRES_IN,
  },
  email: {
    server: process.env.EMAIL_SERVER,
    from: process.env.EMAIL_FROM,
    name: process.env.EMAIL_NAME,
    port: Number(process.env.SERVER_PORT),
    secure: Boolean(process.env.SERVER_SECURE),
    user: process.env.SERVER_USER,
    pass: process.env.SERVER_PASS,
  },
};
