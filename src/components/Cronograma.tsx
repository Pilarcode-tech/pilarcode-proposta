import { proposta } from "../data/proposta";
import SectionHeader from "./SectionHeader";

export default function Cronograma() {
  return (
    <section className="px-6 md:px-10 py-10 md:py-14">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="Cronograma"
          title="Cronograma de Entrega"
        />

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {proposta.cronograma.map((item, i) => (
            <div
              key={item.fase}
              className="bg-bg-light border border-gray-200 rounded-2xl p-6 relative"
            >
              <span className="inline-flex items-center justify-center w-8 h-8 bg-gradient-to-br from-blue-light to-blue-primary rounded-full font-manrope text-xs font-bold text-white mb-4">
                {i + 1}
              </span>
              <h3 className="text-sm font-bold text-gray-900 mb-2">
                {item.fase}
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed mb-3">
                {item.desc}
              </p>
              <span className="inline-block bg-blue-light/10 text-blue-primary font-manrope text-[10px] font-bold px-3 py-1 rounded-full">
                {item.prazo}
              </span>
            </div>
          ))}
        </div>

        {/* Total */}
        <div className="mt-6 bg-gradient-to-r from-blue-dark to-blue-primary rounded-2xl p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-white">
          <div>
            <p className="font-manrope text-[10px] font-bold text-blue-200 uppercase tracking-[2px] mb-1">
              Prazo Total de Entrega
            </p>
            <p className="text-3xl md:text-4xl font-extrabold tracking-tight">
              {proposta.prazo}
            </p>
          </div>
          <p className="text-sm text-blue-200 max-w-xs">
            A partir da assinatura do contrato e do pagamento da entrada.
          </p>
        </div>
      </div>
    </section>
  );
}
