export default function Kontak() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-bold text-utama">Hubungi Saya</h1>
      <p className="mt-2 text-gray-600">Punya pertanyaan atau ingin bekerja sama? Isi form berikut.</p>
      <div className="mt-8 grid gap-8 md:grid-cols-3">
        
        <div className="md:col-span-2">
          <form className="space-y-4">
            <div>
              <label htmlFor="nama" className="block font-semibold text-gray-800">Nama Lengkap</label>
              <input 
                type="text" 
                id="nama" 
                name="nama" 
                placeholder="Contoh: Min Yoongi" 
                required 
                className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-2 focus:ring-2 focus:ring-utama outline-none" 
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block font-semibold text-gray-800">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="nama@email.com" 
                required 
                className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-2 focus:ring-2 focus:ring-utama outline-none" 
              />
            </div>
            
            <div>
              <label htmlFor="hp" className="block font-semibold text-gray-800">Nomor HP</label>
              <input 
                type="tel" 
                id="hp" 
                name="hp" 
                placeholder="081234567890" 
                className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-2 focus:ring-2 focus:ring-utama outline-none" 
              />
            </div>
            
            <div>
              <label htmlFor="keperluan" className="block font-semibold text-gray-800">Keperluan</label>
              <select 
                id="keperluan" 
                name="keperluan" 
                required 
                className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-2 focus:ring-2 focus:ring-utama outline-none"
              >
                <option value="">-- Pilih keperluan --</option>
                <option value="tanya">Bertanya</option>
                <option value="kerjasama">Kerja Sama</option>
                <option value="lainnya">Lainnya</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="pesan" className="block font-semibold text-gray-800">Pesan</label>
              <textarea 
                id="pesan" 
                name="pesan" 
                rows={5} 
                placeholder="Tulis pesanmu di sini" 
                className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-2 focus:ring-2 focus:ring-utama outline-none"
              ></textarea>
            </div>
            
            <div>
              <button 
                type="submit" 
                className="rounded-lg bg-aksen px-6 py-2 font-semibold text-white hover:bg-red-800 transition"
              >
                Kirim Pesan
              </button>
              <p className="text-xs text-gray-400 mt-3">
                Form ini belum mengirim pesan. Pengiriman pesan diaktifkan di Minggu 15.
              </p>
            </div>
          </form>
        </div>

        <div className="md:col-span-1">
          <div className="h-full rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-utama mb-4">Temukan Saya di</h2>
            
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
                <span className="text-sm font-bold">GitHub</span>
              </div>
              <a 
                href="https://github.com/ayunqurrotul57-glitch" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block ml-7 text-sm text-aksen hover:underline"
              >
                github.com/ayunqurrotul57-glitch
              </a>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}