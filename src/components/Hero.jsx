"use client";

import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function Hero({ nama, tagline }) {
  return (
    <section className="py-10 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
      <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
        <Image
          src="/foto-profile.jpeg" 
          alt="Foto Profil"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div>
        <h1 className="text-4xl font-extrabold tracking-tight text-primary lg:text-5xl">
          {nama ? `Halo, saya ${nama}!` : "Halo, saya Qurrotul A'yun!"}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          {tagline || "Siswi kelas XI SMK, calon Junior Web Developer di Kelas Industri UBIG."}
        </p>

        {/* Tombol navigasi */}
        <div className="mt-6 flex justify-center gap-4 md:justify-start">
          <Link href="/proyek" className={buttonVariants({ size: "lg" })}>
            Lihat Proyek
          </Link>
          <Link
            href="/kontak"
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            Hubungi Saya
          </Link>
        </div>
      </div>
    </section>
  );
}