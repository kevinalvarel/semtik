"use client";

import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PesertaSchema } from "@/validations/peserta";
import { createRegistration } from "@/servers/register-action";
import { toast } from "sonner";

export function RegistForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const form = useForm<z.infer<typeof PesertaSchema>>({
    resolver: zodResolver(PesertaSchema),
    defaultValues: {
      nim: "",
      email: "",
      nama: "",
      fakultas: "",
      prodi: "",
    },
  });

  const faculties = [
    {
      id: "feb",
      nama: "Fakultas Ekonomi Bisnis",
      prodi: [
        { id: "akuntansi", nama: "Akuntansi" },
        { id: "manajemen", nama: "Manajemen" },
        { id: "bisnis-digital", nama: "Bisnis Digital" },
      ],
    },
    {
      id: "fik",
      nama: "Fakultas Ilmu Komputer",
      prodi: [
        { id: "teknik-informatika", nama: "Teknik Informatika" },
        { id: "manajemen-informatika", nama: "Manajemen Informatika" },
        { id: "cyber-security", nama: "Cyber Security" },
      ],
    },
    {
      id: "ft",
      nama: "Fakultas Teknik",
      prodi: [
        { id: "teknik-industri", nama: "Teknik Industri" },
        { id: "teknik-kimia", nama: "Teknik Kimia" },
      ],
    },
    {
      id: "fai",
      nama: "Fakultas Agama Islam",
      prodi: [
        { id: "hki", nama: "Hukum Keluarga Islam" },
        { id: "tadris-bahasa-inggris", nama: "Tadris Bahasa Inggris" },
      ],
    },
  ];

  const facultiesValue = form.watch("fakultas");

  const selectedFaculty = faculties.find((f) => f.nama === facultiesValue);

  const programStudi = selectedFaculty?.prodi ?? [];

  const onSubmit = async (data: z.infer<typeof PesertaSchema>) => {
    const result = await createRegistration(data);

    if (!result.success) {
      toast.error(result.message);
    }
    toast.success(result.message);
  };

  return (
    <form
      className={cn("flex flex-col gap-6", className)}
      {...props}
      onSubmit={form.handleSubmit(onSubmit)}
    >
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Pendaftaran SEMTIK 2026</h1>
          <p className="text-sm text-balance text-muted-foreground">
            Silakan isi form di bawah ini untuk mendaftarkan diri sebagai
            peserta SEMTIK 2026
          </p>
        </div>
        <Controller
          name="nim"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel htmlFor="nim">NIM (Nomor Induk Mahasiswa)</FieldLabel>
              <Input
                {...field}
                id="nim"
                type="number"
                placeholder="Contoh: 240400123"
                onWheel={(e) => e.currentTarget.blur()}
                className="bg-background"
                aria-invalid={fieldState.invalid}
              />
              <FieldDescription>
                Masukkan NIM yang sesuai dengan Kartu Tanda Mahasiswa
              </FieldDescription>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          control={form.control}
          name="email"
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                {...field}
                id="email"
                type="email"
                placeholder="Contoh: seseorang@email.com"
                className="bg-background"
                aria-invalid={fieldState.invalid}
              />
              <FieldDescription>
                Masukkan email aktif yang akan digunakan untuk menghubungi Anda
              </FieldDescription>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          control={form.control}
          name="nama"
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel htmlFor="nama">Nama</FieldLabel>
              <Input
                {...field}
                id="nama"
                type="text"
                placeholder="Contoh: Syafiq Sumba Samba"
                className="bg-background"
                aria-invalid={fieldState.invalid}
              />
              <FieldDescription>Masukkan Nama Lengkap</FieldDescription>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        {/* Fakultas Controller */}
        <Controller
          control={form.control}
          name="fakultas"
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel htmlFor="fakultas">Fakultas</FieldLabel>
              <Select
                value={field.value}
                onValueChange={(value) => {
                  field.onChange(value);
                  form.setValue("prodi", "", { shouldValidate: true });
                }}
              >
                <SelectTrigger id="fakultas" aria-invalid={fieldState.invalid}>
                  <SelectValue placeholder="Pilih Fakultas" />
                </SelectTrigger>
                <SelectContent>
                  {faculties.map((f) => (
                    <SelectItem key={f.id} value={f.nama}>
                      {f.nama}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FieldDescription>
                Masukkan program studi sesuai dengan Kartu Tanda Mahasiswa
              </FieldDescription>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        {/* Prodi Field */}
        <Controller
          control={form.control}
          name="prodi"
          render={({ field, fieldState }) => (
            <Field>
              <FieldLabel htmlFor="prodi">Prodi</FieldLabel>
              <Select
                disabled={!facultiesValue}
                value={field.value}
                onValueChange={field.onChange}
              >
                <SelectTrigger
                  id="prodi"
                  disabled={!facultiesValue}
                  aria-invalid={fieldState.invalid}
                >
                  <SelectValue
                    placeholder={
                      facultiesValue
                        ? "Pilih Prodi"
                        : "Pilih Fakultas Terlebih Dahulu"
                    }
                  />
                </SelectTrigger>
                <SelectContent>
                  {programStudi.map((p) => (
                    <SelectItem key={p.id} value={p.nama}>
                      {p.nama}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FieldDescription>
                Masukkan program studi sesuai dengan Kartu Tanda Mahasiswa
              </FieldDescription>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Button type="submit">Daftar sebagai Peserta</Button>
        <Field></Field>
      </FieldGroup>
    </form>
  );
}
