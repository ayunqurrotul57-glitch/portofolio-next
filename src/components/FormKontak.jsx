"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

const kelasInput = "mt-1 w-full rounded-lg border border-gray-300 bg-white p-2 dark:bg-gray-900 dark:border-gray-700";

export default function FormKontak() {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [hp, setHp] = useState("");
  const [keperluan, setKeperluan] = useState("");
  const [pesan, setPesan] = useState("");
  const [error, setError] = useState({});
  const [berhasil, setBerhasil] = useState(false);

  function kirim(e) {
    e.preventDefault();
    const errorBaru = {};

    if (nama.trim() === "") {
      errorBaru.nama = "Nama wajib diisi.";
    }
    if (!email.includes("@")) {
      errorBaru.email = "Email harus memuat tanda @, contoh nama@gmail.com.";
    }
    if (hp.length < 10) {
      errorBaru.hp = "Nomor HP minimal 10 angka.";
    }
    if (keperluan === "") {
      errorBaru.keperluan = "Pilih salah satu keperluan.";
    }
    if (pesan.trim().length < 10) {
      errorBaru.pesan = "Pesan minimal 10 karakter.";
    }

    setError(errorBaru);
    setBerhasil(Object.keys(errorBaru).length === 0);
  }

  return (
    <form onSubmit={kirim} noValidate className="space-y-4">
      {/* Nama Lengkap */}
      <div>
        <label htmlFor="nama" className="block font-semibold">
          Nama lengkap
        </label>
        <input
          type="text"
          id="nama"
          name="nama"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          placeholder="Contoh: Budi Santoso"
          className={kelasInput}
        />
        {error.nama && <p className="mt-1 text-sm text-red-500">{error.nama}</p>}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block font-semibold">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="nama@gmail.com"
          className={kelasInput}
        />
        {error.email && <p className="mt-1 text-sm text-red-500">{error.email}</p>}
      </div>

      {/* Nomor HP */}
      <div>
        <label htmlFor="hp" className="block font-semibold">
          Nomor HP
        </label>
        <input
          type="tel"
          id="hp"
          name="hp"
          value={hp}
          onChange={(e) => setHp(e.target.value)}
          placeholder="081234567890"
          className={kelasInput}
        />
        {error.hp && <p className="mt-1 text-sm text-red-500">{error.hp}</p>}
      </div>

      {/* Keperluan */}
      <div>
        <label htmlFor="keperluan" className="block font-semibold">
          Keperluan
        </label>
        <select
          id="keperluan"
          name="keperluan"
          value={keperluan}
          onChange={(e) => setKeperluan(e.target.value)}
          className={kelasInput}
        >
          <option value="">-- Pilih Keperluan --</option>
          <option value="kerjasama">Kerja Sama / Kolaborasi</option>
          <option value="proyek">Pembuatan Proyek / Website</option>
          <option value="pertanyaan">Pertanyaan Umum</option>
        </select>
        {error.keperluan && <p className="mt-1 text-sm text-red-500">{error.keperluan}</p>}
      </div>

      {/* Pesan */}
      <div>
        <label htmlFor="pesan" className="block font-semibold">
          Pesan
        </label>
        <textarea
          id="pesan"
          name="pesan"
          rows={4}
          value={pesan}
          onChange={(e) => setPesan(e.target.value)}
          placeholder="Tulis pesan atau pertanyaan di sini..."
          className={kelasInput}
        ></textarea>
        {error.pesan && <p className="mt-1 text-sm text-red-500">{error.pesan}</p>}
      </div>

      <Button type="submit" size="lg">
        Kirim Pesan
      </Button>

      {/* Pesan Berhasil sekarang berada tepat di bawah tombol kirim */}
      {berhasil && (
        <p className="rounded-lg bg-green-100 p-3 text-green-800 dark:bg-green-900 dark:text-green-100">
          Terima kasih, {nama}! Pesanmu sudah lolos pemeriksaan.
        </p>
      )}
    </form>
  );
}