import ProyekCard from "@/components/KartuProyek";
import { proyek } from "@/data/proyek";

export default function HalamanProyek() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-bold text-utama mb-2">Proyek Saya</h1>
      <p className="text-gray-600 mb-8">Kumpulan hasil belajar saya di Kelas Industri UBIG. Klik kartu untuk melihat detailnya.</p>
      
      {/* Menampilkan SEMUA proyek (bukan cuma 3) */}
      <div className="grid gap-6 md:grid-cols-3">
        {proyek.map((item) => (
          <ProyekCard key={item.slug} proyek={item} />
        ))}
      </div>
    </main>
  );
}