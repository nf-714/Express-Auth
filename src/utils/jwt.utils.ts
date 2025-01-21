import { jwtVerify, SignJWT } from "jose";
import { config } from "../config/env.config";

const { jwt } = config;
const { secret, expiresIn } = jwt;
const JWT_SECRET = new TextEncoder().encode(secret);

/**
 * Generates a JSON Web Token (JWT) for the given payload.
 *
 * @param payload - The data to include in the JWT payload.
 * @returns A promise that resolves to the signed JWT string.
 */

export async function createJWT(payload: any) {
  //if type number convert to date
  if (!expiresIn) {
    throw new Error("JWT expried date is not defined");
  }
  const jwt = await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(expiresIn)
    .sign(JWT_SECRET);

  return jwt;
}

/**
 * Verifies a JSON Web Token (JWT) and extracts the payload.
 *
 * @param token - The JWT string to be verified.
 * @returns A promise that resolves to the decoded payload of the JWT.
 * @throws An error if the token is invalid or verification fails.
 */

export async function verifyJWT(token: string) {
  const { payload } = await jwtVerify(token, JWT_SECRET);
  return payload;
}
