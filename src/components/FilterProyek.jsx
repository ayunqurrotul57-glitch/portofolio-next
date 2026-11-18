import ProyekCard from "./KartuProyek";

export default function FilterProyek({ proyek }) {
    return(
        <div className="mt-8 grid gap-6 md:grid-cols-3">
            {proyek.map((item) => (
                <ProyekCard key={item.slug} proyek={item} />
            ))}
        </div>
    );
}