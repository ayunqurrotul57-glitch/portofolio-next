export default function Kartu({ judul, children}) {
    return (
        <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <h2 className="mb-3 tect-2xl font-bold text-primary dark:text-sky-200 dark:text-sky-200 dark:text-sky-200">{judul}</h2>
            {children}
        </section>
    );
}