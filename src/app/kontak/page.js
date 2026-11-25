import FormKontak from "@/components/FormKontak";

export default function Kontak() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-bold text-primary">Hubungi Saya</h1>
      <p className="mt-2 text-muted-foreground">Punya pertanyaan atau ingin bekerja sama? Isi form berikut.</p>
      
      <div className="mt-8 grid gap-8 md:grid-cols-3">
        
        <section className="rounded-xl border border-border bg-card p-6 shadow-sm md:col-span-2">
          <FormKontak />
        </section>

        <div className="md:col-span-1">
          <div className="h-full rounded-xl border border-border bg-card p-6 shadow-sm">
            <h2 className="text-xl font-bold text-primary mb-4">Temukan Saya di</h2>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-foreground:text-gray-100">
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