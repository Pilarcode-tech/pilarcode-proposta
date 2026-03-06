import { proposta } from "../data/proposta";
import SectionHeader from "./SectionHeader";

export default function Escopo() {
  return (
    <section className="px-6 md:px-10 py-10 md:py-14 bg-bg-light">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="Escopo Funcional"
          title="Tudo o que será entregue"
          description="Módulos e funcionalidades incluídos no desenvolvimento do sistema."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {proposta.escopo.map((item) => (
            <div
              key={item.numero}
              className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:shadow-gray-200/50 transition-shadow"
            >
              <span className="inline-block font-manrope text-[10px] font-bold text-blue-light uppercase tracking-[1px] mb-3">
                {item.numero}
              </span>
              <h3 className="text-base font-bold text-gray-900 mb-3">
                {item.titulo}
              </h3>
              <ul className="space-y-2">
                {item.itens.map((li) => (
                  <li
                    key={li}
                    className="text-sm text-gray-500 leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-[5px] before:h-[5px] before:rounded-full before:bg-blue-light/40"
                  >
                    {li}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Fora do escopo */}
        <div className="mt-6 bg-amber-50 border border-amber-200 rounded-2xl p-6 flex gap-4 text-sm text-amber-800 leading-relaxed">
          <span className="text-xl shrink-0">&#9888;&#65039;</span>
          <span>
            <strong>Fora do escopo desta proposta:</strong>{" "}
            {proposta.foraDoEscopo}
          </span>
        </div>
      </div>
    </section>
  );
}
