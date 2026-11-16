import Link from "next/link";
import Image from "next/image";

export default function ProyekCard({ proyek }) {
  return (
    <Link
      href={`/proyek/${proyek.slug}`}
      className="block overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition"
    >
      <Image
        src={proyek.gambar}
        alt={proyek.judul}
        width={640}
        height={420}
        className="h-48 w-full object-cover"
      />
      <div className="p-5">
        <span className="inline-block rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600 mb-2">
            {proyek.kategori}
        </span>
        <h3 className="text-xl font-bold text-utama">{proyek.judul}</h3>
        <p className="mt-2 text-sm text-gray-600 line-clamp-2">{proyek.deskripsi}</p>
      </div>
    </Link>
  );
}