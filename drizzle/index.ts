import { relations } from "@/db/relations";
import { drizzle } from "drizzle-orm/neon-http";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not set. Please ensure it is defined in your environment variables.");
}

export const db = drizzle(process.env.DATABASE_URL, { relations });

