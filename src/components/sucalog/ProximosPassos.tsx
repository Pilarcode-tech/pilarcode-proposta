import { sucalog } from "../../data/sucalog";
import SectionHeader from "../SectionHeader";

export default function ProximosPassos() {
  return (
    <section className="px-6 md:px-10 py-10 md:py-14">
      <div className="max-w-4xl mx-auto">
        <SectionHeader label="Para Começar" title="Próximos Passos" />

        <div className="space-y-4">
          {sucalog.proximosPassos.map((p, i) => (
            <div
              key={i}
              className="flex items-start gap-5 bg-bg-light border border-gray-200 rounded-2xl p-6"
            >
              <span className="shrink-0 w-9 h-9 rounded-full border-2 border-blue-light flex items-center justify-center font-manrope text-sm font-bold text-blue-primary">
                {i + 1}
              </span>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed pt-1">
                {p}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
