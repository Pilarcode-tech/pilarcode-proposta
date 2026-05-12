import { gabinetevirtual } from "../../data/gabinetevirtual";
import SectionHeader from "../SectionHeader";

const complexityStyles: Record<string, { bg: string; text: string; label: string }> = {
  standard: {
    bg: "bg-blue-light/10",
    text: "text-blue-primary",
    label: "Padrão",
  },
  medium: {
    bg: "bg-amber-50",
    text: "text-amber-600",
    label: "Médio",
  },
  high: {
    bg: "bg-red-50",
    text: "text-red-600",
    label: "Alto",
  },
};

export default function Modulos() {
  return (
    <section className="px-6 md:px-10 py-10 md:py-14">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          label="Escopo do produto"
          title="Os 12 módulos do Gabinete Virtual"
          description="Doze módulos que cobrem o ciclo completo da campanha e do mandato — do eleitor ao cabo, da comunicação à inteligência de IA — tudo dentro de uma arquitetura multi-tenant pronta para revenda."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {gabinetevirtual.modulos.map((m) => {
            const style = complexityStyles[m.complexidade];
            return (
              <div
                key={m.titulo}
                className="bg-bg-light border border-gray-200 rounded-2xl p-5 flex flex-col"
              >
                <h3 className="text-base font-bold text-gray-900 mb-2">
                  {m.titulo}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-1">
                  {m.desc}
                </p>
                <span
                  className={`inline-block self-start font-manrope text-[10px] font-bold uppercase tracking-[1px] px-2.5 py-1 rounded-md ${style.bg} ${style.text}`}
                >
                  {style.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
