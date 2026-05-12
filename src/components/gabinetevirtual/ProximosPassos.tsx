import { gabinetevirtual } from "../../data/gabinetevirtual";
import SectionHeader from "../SectionHeader";

export default function ProximosPassos() {
  return (
    <section className="px-6 md:px-10 py-10 md:py-14 bg-bg-light">
      <div className="max-w-4xl mx-auto">
        <SectionHeader label="Próximos Passos" title="Como começamos" />

        <div className="space-y-4">
          {gabinetevirtual.proximosPassos.map((p, i) => (
            <div
              key={p.titulo}
              className="flex items-start gap-5 bg-white border border-gray-200 rounded-2xl p-6"
            >
              <span className="shrink-0 w-9 h-9 rounded-lg bg-blue-dark flex items-center justify-center font-manrope text-sm font-bold text-white">
                {i + 1}
              </span>
              <div className="flex-1 pt-1">
                <h3 className="text-base font-bold text-gray-900 mb-1">
                  {p.titulo}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
