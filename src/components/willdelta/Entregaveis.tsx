import { willdelta } from "../../data/willdelta";
import SectionHeader from "../SectionHeader";

export default function Entregaveis() {
  return (
    <section className="px-6 md:px-10 py-10 md:py-14">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          label="Entregáveis"
          title="O que vocês vão receber"
          description="Oito entregas concretas ao longo da Fase 1, mais os 30 dias de suporte incluídos após o go-live."
        />

        <div className="space-y-3">
          {willdelta.entregaveis.map((e) => (
            <div
              key={e.titulo}
              className="flex items-start gap-4 bg-bg-light border border-gray-200 rounded-2xl p-5"
            >
              <span className="mt-2 w-2.5 h-2.5 rounded-full bg-blue-light shrink-0" />
              <div className="flex-1">
                <h3 className="text-base font-bold text-gray-900 mb-1">
                  {e.titulo}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {e.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
