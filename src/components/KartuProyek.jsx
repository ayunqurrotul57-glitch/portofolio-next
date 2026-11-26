import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProyekCard({ proyek }) {
  return (
    <Link href={`/proyek/${proyek.slug}`} className="block h-full rounded-xl hover:shadow-md">
      <Card className="h-full flex flex-col justify-between overflow-hidden">
        <div>
          <Image
            src={proyek.gambar_url}
            alt={`Tangkapan layar ${proyek.judul}`}
            width={640}
            height={420}
            loading="eager"
            className="h-48 w-full object-cover"
          />
          
          <CardHeader>
            <Badge variant={proyek.kategori.toLowerCase()}>{proyek.kategori}</Badge>
            <CardTitle className="text-lg text-primary">{proyek.judul}</CardTitle>
            <CardDescription className="line-clamp-2">{proyek.deskripsi}</CardDescription>
          </CardHeader>
        </div>
      </Card>
    </Link>
  );
}