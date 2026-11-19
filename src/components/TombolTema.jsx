"use client";

import { useState, useEffect } from "react";

export default function TombolTema() {
    const [gelap, setGelap] = useState(false);

    // Dijalankan sekali setelah tombol tampil di browser: pakai tema yang tersimpan
    useEffect(() => {
        if (localStorage.getItem("tema") === "gelap") {
            document.documentElement.classList.add("dark");
            setGelap(true); // <-- Pastikan state ikut diubah jadi true di sini
        }
    }, []);

    function gantiTema() {
        const statusGelap = document.documentElement.classList.toggle("dark");
        localStorage.setItem("tema", statusGelap ? "gelap" : "terang");
        setGelap(statusGelap);
    }

    return (
        <button
            type="button"
            onClick={gantiTema}
            className="rounded-lg border border-white px-3 py-1 text-sm font-semibold text-white hover:bg-white/10 transition"
        >
            {gelap ? "Mode Terang" : "Mode Gelap"}
        </button>
    );
}