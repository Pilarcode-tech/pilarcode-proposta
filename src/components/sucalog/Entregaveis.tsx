import { sucalog } from "../../data/sucalog";
import SectionHeader from "../SectionHeader";

export default function Entregaveis() {
  return (
    <section className="px-6 md:px-10 py-10 md:py-14">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          label="Entregáveis"
          title="O que vocês vão receber"
          description="Cinco entregas concretas ao longo das Fases 1 e 2, em até 10 semanas."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {sucalog.entregaveis.map((e) => (
            <div
              key={e.titulo}
              className="bg-bg-light border-l-4 border-blue-light rounded-r-2xl p-6"
            >
              <h3 className="text-base font-bold text-gray-900 mb-2">
                {e.titulo}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">{e.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
