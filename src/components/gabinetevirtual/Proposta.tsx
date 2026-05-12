import { gabinetevirtual } from "../../data/gabinetevirtual";

export default function Proposta() {
  const { proposta } = gabinetevirtual;
  return (
    <section className="px-6 md:px-10 py-10 md:py-14 bg-bg-light">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white border border-gray-200 rounded-3xl p-8 md:p-12 lg:p-14">
          <p className="font-manrope text-[11px] font-bold text-blue-primary uppercase tracking-[3px] mb-4">
            Proposta
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight mb-8">
            O que propomos
          </h2>
          <p className="text-base text-gray-600 leading-relaxed mb-8">
            {proposta.texto}
          </p>

          <div className="border border-dashed border-blue-light/40 rounded-2xl p-5 md:p-6 bg-blue-light/[0.03]">
            <p className="font-manrope text-[11px] font-bold text-blue-primary uppercase tracking-[1.5px] mb-2">
              {proposta.nota.titulo}
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              {proposta.nota.texto}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
