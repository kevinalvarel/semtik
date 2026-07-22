"use server";

import { db } from "@/drizzle";
import { registration } from "@/db/schema";
import { PesertaSchema } from "@/validations/peserta";
import { randomUUID } from "crypto";

export async function createRegistration(payload: PesertaSchema) {
  const existingNim = await db.query.registration.findFirst({
    where: { nim: { eq: Number(payload.nim) } },
  });

  const existingEmail = await db.query.registration.findFirst({
    where: { email: { eq: payload.email } },
  });

  if (existingNim || existingEmail) {
    return {
      success: false,
      message: "Pendaftaran Gagal, NIM atau Email Sudah Terdaftar!",
    };
  }

  const parsed = PesertaSchema.safeParse(payload);

  if (!parsed.success) {
    return {
      success: false,
      message: "Pendaftaran Gagal, Data Tidak Valid",
      errors: parsed.error.flatten(),
    };
  }
  try {
    await db.insert(registration).values({
      nim: Number(parsed.data.nim),
      email: parsed.data.email,
      nama: parsed.data.nama,
      fakultas: parsed.data.fakultas,
      prodi: parsed.data.prodi as string,
      isCheckedIn: false,
      qrCode: randomUUID(),
      createdAt: new Date(),
      checkedInAt: null,
    });

    return {
      success: true,
      message: "Pendaftaran Berhasil!",
    };
  } catch (err) {
    return {
      success: false,
      message: "Pendaftaran Gagal, Terjadi Kesalahan pada Server",
    };
  }
}
