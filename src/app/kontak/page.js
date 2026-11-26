import FormKontak from "@/components/FormKontak";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Kontak() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-bold text-primary">Hubungi Saya</h1>
      <p className="mt-2 text-muted-foreground">
        Punya pertanyaan atau ingin bekerja sama? Isi form berikut.
      </p>

      <div className="mt-10 grid gap-10 md:grid-cols-3">
        
        <div className="md:col-span-2">
          <FormKontak />
        </div>

        <div className="md:col-span-1">
         <Card className= "h-full">
            <CardHeader>
              <CardTitle>Temukan Saya di</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-sm">
                <div>
                  <span className="font-semibold block text-muted-foreground">GitHub</span>
                  <a
                    href="https://github.com/ayunqurrotul57-glitch"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline break-all"
                  >
                    github.com/ayunqurrotul57-glitch
                  </a>
                </div>
                <div>
                  <span className="font-semibold block text-muted-foreground">Email</span>
                  <a
                    href="mailto:ayunqurrotul@example.com"
                    className="text-primary hover:underline"
                  >
                    ayunqurrotul@example.com
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

      </div>
    </main>
  );
}