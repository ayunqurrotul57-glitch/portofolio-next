import Kartu from "@/components/kartu";

const jadwalBelajar = [
  { hari: "Senin", waktu: "19.00 - 20.00", kegiatan: "Membaca ulang modul" },
  { hari: "Rabu", waktu: "19.00 - 21.00", kegiatan: "Mengerjakan tugas praktik" },
  { hari: "Jumat", waktu: "19.00- 21.30", kegiatan: "Menyelesaikan tugas tugas yang belum selesai"},
];

export default function Tentang() {
  return (
    <main className="mx-auto max-w-5xl space-y-8 px-4 py-10">
      <h1 className="text-3xl font-bold text-primary dark:text-sky-200 dark:text-sky-200 dark:text-sky-200">Tentang Saya</h1>

      <Kartu judul="Perkenalan">
        <p className="leading-relaxed text-muted-foreground">
          Saya siswi kelas XI jurusan PPLG yang senang mencoba hal baru di dunia teknologi dan desain. 
          Saya ingin bisa membuat website yang rapi dan bermanfaat untuk sekolah maupun masyarakat sekitar.
        </p>
      </Kartu>

      <div className="grid gap-6 md:grid-cols-2">
        <Kartu judul="Hobi">
          <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
            <li>Membaca</li>
            <li>Menulis (puisi, cerpen, dll)</li>
            <li>Memasak</li>
            <li>Baking</li>
            <li>Dance</li>
            <li>Mendengarkan musik</li>
            <li>Menyanyi</li>
            <li>Menggambar</li>
            <li>Membuat kerajinan tangan</li>
          </ul>
        </Kartu>

        <Kartu judul="Cita-cita">
          <p className="mb-3 text-muted-foreground">
            Menjadi seorang Guru Informatika yang bermanfaat dan mampu membawa dampak positif bagi banyak orang. Langkah yang saya lakukan:
          </p>
          <ol className="list-decimal space-y-1 pl-5 text-muted-foreground">
            <li>Tekun belajar dan mengasah skill pemrograman</li>
            <li>Menjalani dan menyelesaikan Kelas Industri UBIG dengan maksimal</li>
            <li>Lulus dengan nilai yang memuaskan</li>
            <li>Melanjutkan studi ke jenjang S1 Pendidikan Teknologi Informasi</li>
          </ol>
        </Kartu>
      </div>

      <section className="mt-10">
        <h2 className="mb-4 text-2xl font-bold text-primary">Jadwal Belajar</h2>
        <div className="overflow-hidden rounded-xl border border-border bg-card">
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