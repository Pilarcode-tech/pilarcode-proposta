import { willdelta } from "../../data/willdelta";

export default function Contexto() {
  return (
    <section className="px-6 md:px-10 py-10 md:py-14">
      <div className="max-w-4xl mx-auto">
        <p className="font-manrope text-[11px] font-bold text-blue-primary uppercase tracking-[3px] mb-4">
          Contexto
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight mb-8">
          O momento que vocês estão vivendo
        </h2>

        <div className="space-y-5">
          {willdelta.contexto.paragrafos.map((p, i) => (
            <p key={i} className="text-base text-gray-600 leading-relaxed">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
