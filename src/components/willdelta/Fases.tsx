import { willdelta } from "../../data/willdelta";
import SectionHeader from "../SectionHeader";

export default function Fases() {
  return (
    <section className="px-6 md:px-10 py-10 md:py-14 bg-bg-light">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          label="Metodologia"
          title="Como vamos trabalhar juntos"
          description={willdelta.metodologiaDescricao}
        />

        <div className="space-y-5">
          {willdelta.fases.map((f) => (
            <div
              key={f.numero}
              className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <span className="shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-blue-light to-blue-primary flex items-center justify-center font-manrope text-base font-bold text-white">
                  {f.numero}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-2">
                    <h3 className="text-base md:text-lg font-extrabold text-gray-900">
                      {f.titulo}
                    </h3>
                    <span className="font-manrope text-[11px] font-bold text-gray-700 bg-bg-light border border-gray-200 px-3 py-1 rounded-full">
                      {f.duracao}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
