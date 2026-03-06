import { proposta } from "../data/proposta";
import SectionHeader from "./SectionHeader";

export default function Investimento() {
  return (
    <section className="px-6 md:px-10 py-10 md:py-14 bg-bg-light">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="Investimento"
          title="Valor do Projeto"
          description="Investimento total para desenvolvimento, implantação e acompanhamento do sistema."
        />

        <div className="bg-gradient-to-br from-blue-dark to-blue-primary rounded-3xl p-8 md:p-12 lg:p-16 text-white relative overflow-hidden">
          {/* Orb */}
          <div className="absolute bottom-[-80px] right-[-60px] w-[350px] h-[350px] bg-blue-light rounded-full blur-[140px] opacity-[0.1] pointer-events-none" />

          <div className="relative z-10">
            <p className="font-manrope text-[11px] font-bold text-blue-200 uppercase tracking-[3px] mb-4">
              Valor Total
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-3">
              {proposta.investimento}
            </h2>
            <p className="text-base text-blue-200/80 max-w-xl mb-2">
              Valor referente ao desenvolvimento completo do {proposta.titulo}, incluindo todas as funcionalidades descritas no escopo.
            </p>
            <p className="text-sm text-white/40 mb-12">
              Proposta válida por {proposta.validade} a partir da emissão.
            </p>

            <p className="font-manrope text-[10px] font-bold text-white/40 uppercase tracking-[2px] mb-5">
              Condições de Pagamento
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {proposta.pagamento.map((p) => (
                <div
                  key={p.etapa}
                  className="bg-white/[0.08] border border-white/10 rounded-2xl p-6 text-center backdrop-blur-sm"
                >
                  <p className="font-manrope text-xs font-bold text-blue-light uppercase tracking-[1px] mb-2">
                    {p.pct}
                  </p>
                  <p className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                    {p.valor}
                  </p>
                  <p className="text-sm text-blue-200 mt-2">{p.etapa}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
