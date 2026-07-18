import z from "zod";

export const PesertaSchema = z.object({
  nim: z.string().min(3, "NIM diperlukan"),
  email: z.email("Email tidak valid"),
  nama: z.string().min(1, "Nama diperlukan"),
  fakultas: z.string().min(1, "Fakultas diperlukan"),
  prodi: z.string().min(1, "Prodi diperlukan"),
});

export type PesertaSchema = z.infer<typeof PesertaSchema>;
