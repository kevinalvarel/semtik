'use server';

import { registration } from "@/db/schema";
import { db } from "@/drizzle";
import { count } from "drizzle-orm";

export async function getTotalRegistration(): Promise<number> {
  const result = await db
    .select({
      count: count(),
    })
    .from(registration);

  return result[0]?.count ?? 0;
}
