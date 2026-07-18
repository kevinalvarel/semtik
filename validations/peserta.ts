import z from "zod";

export const PesertaSchema = z.object({
  nim: z.string().min(3, "NIM diperlukan").max(10, "NIM Terlalu Panjang"),
  email: z.email("Email tidak valid").max(50, "Email Terlalu Panjang"),
  nama: z
    .string()
    .min(1, "Nama diperlukan")
    .min(3, "Nama Terlalu Pendek")
    .max(100, "Nama Terlalu Panjang"),
  fakultas: z.string().min(1, "Fakultas diperlukan"),
  prodi: z.string().min(1, "Prodi diperlukan").nullable(),
});

export type PesertaSchema = z.infer<typeof PesertaSchema>;
