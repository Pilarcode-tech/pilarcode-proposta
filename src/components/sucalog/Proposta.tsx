import { sucalog } from "../../data/sucalog";

export default function Proposta() {
  return (
    <section className="px-6 md:px-10 py-10 md:py-14 bg-bg-light">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white border border-gray-200 rounded-3xl p-8 md:p-12 lg:p-16">
          <p className="font-manrope text-[11px] font-bold text-blue-primary uppercase tracking-[3px] mb-4">
            A Proposta
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight mb-8 max-w-2xl">
            {sucalog.proposta.titulo}
          </h2>
          <div className="grid md:grid-cols-2 gap-8 md:gap-10">
            <p className="text-base text-gray-600 leading-relaxed">
              {sucalog.proposta.texto1}
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              {sucalog.proposta.texto2}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
