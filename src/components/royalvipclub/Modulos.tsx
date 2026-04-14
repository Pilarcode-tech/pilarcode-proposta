import { royalvipclub } from "../../data/royalvipclub";
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
  "muito-alto": {
    bg: "bg-red-100",
    text: "text-red-700",
    label: "Muito Alto",
  },
};

export default function Modulos() {
  const destaque = royalvipclub.moduloDestaque;
  const destaqueStyle = complexityStyles[destaque.complexidade];

  return (
    <section className="px-6 md:px-10 py-10 md:py-14">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          label="Escopo Detalhado"
          title="Telas e módulos a desenvolver"
          description='A análise do Figma ("Mobile Version Final" e fluxograma) mapeou os módulos abaixo. Todos serão implementados no frontend mobile e desktop, incluindo o sistema de avatar 2D animado.'
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {royalvipclub.modulos.map((m) => {
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

        {/* Módulo destaque */}
        <div className="mt-6 bg-gradient-to-br from-blue-dark to-blue-primary rounded-3xl p-8 md:p-10 text-white relative overflow-hidden border-2 border-blue-light/40">
          <div className="absolute top-[-80px] right-[-80px] w-[340px] h-[340px] bg-blue-light rounded-full blur-[130px] opacity-[0.18] pointer-events-none" />
          <div className="relative z-10">
            <span
              className={`inline-block font-manrope text-[10px] font-bold uppercase tracking-[1px] px-2.5 py-1 rounded-md ${destaqueStyle.bg} ${destaqueStyle.text} mb-4`}
            >
              {destaqueStyle.label}
            </span>
            <h3 className="text-xl md:text-2xl font-extrabold mb-3">
              {destaque.titulo}
            </h3>
            <p className="text-sm md:text-base text-white/70 leading-relaxed max-w-2xl">
              {destaque.desc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
