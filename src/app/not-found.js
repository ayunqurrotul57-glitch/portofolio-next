import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-bold text-aksen dark:text-red-300 mb-4">404</h1>
      <h2 className="text-2xl font-bold text-utama dark:text-sky-200 dark:text-sky-200 dark:text-sky-200 dark:text-sky-200 mb-2">Halaman tidak ditemukan</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-6">Alamat yang kamu buka tidak ada atau sudah dipindahkan.</p>
      
      <Link
        href="/"
        className="rounded-lg bg-utama px-6 py-2 font-semibold text-white hover:bg-opacity-90 transition"
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
}