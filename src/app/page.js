import Hero from "@/components/Hero";
import Kartu from "@/components/kartu";
import SkillCard from "@/components/SkillCard";

const skills = [
  { nama: "HTML", level: "Menengah" },
  { nama: "CSS", level: "Menengah" },
  { nama: "Git dan GitHub", level: "Dasar" },
  { nama: "Desain poster dengan Canva", level: "Mahir" },
  { nama: "JavaScript", level: "Dasar" },
];

const jadwalBelajar = [
  { hari: "Senin", waktu: "19.00 - 20.00", kegiatan: "Membaca ulang modul" },
  { hari: "Rabu", waktu: "19.00 - 21.00", kegiatan: "Mengerjakan tugas praktik" },
  { hari: "Jumat", waktu: "19.00- 21.30", kegiatan: "Menyelesaikan tugas tugas yang belum selesai"},
];

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl space-y-8 px-4 py-10">
      {/* Bagian Atas (Foto & Nama) */}
      <Hero
        nama="Qurrotul A'yun"
        tagline="Siswi kelas XI PPLG, calon Junior Web Developer di Kelas Industri UBIG."
      />

      {/* Bagian Tentang Saya */}
      <Kartu judul="Tentang Saya">
        <p className="leading-relaxed text-gray-700">
          Saya siswi kelas XI jurusan PPLG yang senang mencoba hal baru di dunia teknologi dan desain. 
          Saya ingin bisa membuat website yang rapi dan bermanfaat untuk sekolah maupun masyarakat sekitar.
        </p>
      </Kartu>

      {/* Bagian Hobi & Cita-cita (2 Kolom Berdampingan) */}
      <div className="grid gap-6 md:grid-cols-2">
        <Kartu judul="Hobi">
          <ul className="list-disc space-y-1 pl-5 text-gray-700">
            <li>Membaca</li>
            <li>Menulis(puisi, cerpen, dll)</li>
            <li>Memasak</li>
            <li>Baking</li>
            <li>Dance</li>
            <li>Menyanyi</li>
            <li>Menggambar</li>
            <li>Membuat kerajinan tangan</li>
          </ul>
        </Kartu>

        <Kartu judul="Cita-cita">
  <p className="mb-3 text-gray-700">
    Menjadi seorang Guru Informatika yang bermanfaat dan mampu membawa dampak positif bagi banyak orang. Langkah yang saya lakukan:
  </p>
  <ol className="list-decimal space-y-1 pl-5 text-gray-700">
    <li>Tekun belajar dan mengasah skill pemrograman</li>
    <li>Menjalani dan menyelesaikan Kelas Industri UBIG dengan maksimal</li>
    <li>Lulus dengan nilai yang memuaskan</li>
    <li>Melanjutkan studi ke jenjang S1 Pendidikan Teknologi Informasi</li>
  </ol>
</Kartu>
      </div>

      {/* Bagian Keahlian (Dibungkus komponen Kartu agar seragam dengan Gambar 6.17) */}
      <Kartu judul="Keahlian">
        <div className="grid gap-4 md:grid-cols-3">
          {skills.map((skill) => (
            <SkillCard key={skill.nama} nama={skill.nama} level={skill.level} />
          ))}
        </div>
      </Kartu>

      <section className="mt-10">
  <h2 className="mb-4 text-2xl font-bold text-utama">Jadwal Belajar</h2>
  <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
    <table className="w-full text-left text-sm">
      <thead className="bg-utama text-white">
        <tr>
          <th className="px-6 py-4">Hari</th>
          <th className="px-6 py-4">Waktu</th>
          <th className="px-6 py-4">Kegiatan</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-100">
        {jadwalBelajar.map((jadwal, index) => (
          <tr key={index}>
            <td className="px-6 py-4">{jadwal.hari}</td>
            <td className="px-6 py-4">{jadwal.waktu}</td>
            <td className="px-6 py-4">{jadwal.kegiatan}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</section>
    </main>
  );
}