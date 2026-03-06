import { proposta } from "../data/proposta";

export default function Objetivo() {
  return (
    <section className="px-6 md:px-10 py-10 md:py-14">
      <div className="max-w-6xl mx-auto">
        <div className="bg-bg-light border border-gray-200 rounded-3xl p-8 md:p-12 lg:p-16">
          <p className="font-manrope text-[11px] font-bold text-blue-primary uppercase tracking-[3px] mb-4">
            Objetivo do Projeto
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight mb-6 max-w-2xl">
            Um sistema inteligente para transformar sua operação logística
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            <p className="text-base text-gray-500 leading-relaxed">
              {proposta.objetivo.texto1}
            </p>
            <p className="text-base text-gray-500 leading-relaxed">
              {proposta.objetivo.texto2.split("padronização")[0]}
              <strong className="text-gray-700">
                padronização, agilidade e redução de erros operacionais
              </strong>
              {" no processo logístico."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
