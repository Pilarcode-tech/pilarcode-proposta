import { proposta } from "../data/proposta";

const incluso = [
  "Correções de bugs e ajustes menores",
  "Monitoramento de infraestrutura",
  "Atualizações de segurança",
  "Suporte técnico por canal dedicado",
];

const naoIncluso = [
  "Novas funcionalidades ou módulos",
  "Integrações com sistemas externos adicionais",
  "Redesign de interface",
];

export default function Manutencao() {
  return (
    <section className="px-6 md:px-10 py-10 md:py-14">
      <div className="max-w-6xl mx-auto">
        <div className="bg-bg-light border border-gray-200 rounded-3xl p-8 md:p-12 lg:p-16">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-10">
            <div>
              <p className="font-manrope text-[11px] font-bold text-blue-primary uppercase tracking-[3px] mb-4">
                Plano de Manutenção
              </p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
                {proposta.manutencao}
                <span className="text-lg md:text-xl font-normal text-gray-400">
                  /mês
                </span>
              </h2>
            </div>
            <span className="inline-block self-start bg-green-50 text-green-700 font-manrope text-[11px] font-bold px-4 py-2 rounded-full border border-green-200">
              Opcional — após período de garantia
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <p className="text-sm font-bold text-gray-900 mb-4">Incluso</p>
              <ul className="space-y-3">
                {incluso.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-gray-600 leading-relaxed"
                  >
                    <svg className="w-5 h-5 text-green-500 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900 mb-4">
                Não incluso
              </p>
              <ul className="space-y-3">
                {naoIncluso.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-gray-400 leading-relaxed"
                  >
                    <svg className="w-5 h-5 text-gray-300 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
