export default function Footer() {
    const tahun = new Date().getFullYear();

    return(
        <footer className="mt-auto bg-utama py-6 text-center text-sm text-white">
            <p>@ {tahun} Qurrotul A'yun. Dibuat dengan Next.js di Kelas Indusrti UBIG.</p>
        </footer>
    );
}