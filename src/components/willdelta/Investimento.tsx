import { willdelta } from "../../data/willdelta";
import SectionHeader from "../SectionHeader";

export default function Investimento() {
  const { investimento } = willdelta;
  return (
    <section className="px-6 md:px-10 py-10 md:py-14 bg-bg-light">
      <div className="max-w-4xl mx-auto">
        <SectionHeader label="Investimento" title="Valor do projeto" />

        <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-8 max-w-3xl">
          {investimento.justificativa}
        </p>

        <div className="bg-gradient-to-br from-blue-dark to-blue-primary rounded-3xl p-8 md:p-12 lg:p-14 text-white relative overflow-hidden text-center">
          <div className="absolute bottom-[-80px] right-[-60px] w-[350px] h-[350px] bg-blue-light rounded-full blur-[140px] opacity-[0.12] pointer-events-none" />

          <div className="relative z-10">
            <p className="font-manrope text-[11px] font-bold text-blue-200 uppercase tracking-[3px] mb-4">
              Fase 1 · Projeto Fechado
            </p>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-3">
              {investimento.valor}
            </h2>
            <p className="text-sm text-blue-200/80 mb-10 max-w-md mx-auto">
              {investimento.descricao}
            </p>

            <div className="max-w-xl mx-auto bg-white/[0.08] border border-white/10 rounded-2xl p-6 backdrop-blur-sm text-left">
              <p className="font-manrope text-[11px] font-bold text-blue-light uppercase tracking-[1.5px] mb-4 text-center">
                Forma de Pagamento
              </p>
              <div className="space-y-4">
                {investimento.parcelas.map((p) => (
                  <div key={p.titulo} className="flex items-start gap-4">
                    <span className="shrink-0 w-14 text-2xl md:text-3xl font-extrabold leading-none">
                      {p.percentual}
                    </span>
                    <div className="flex-1 pt-0.5">
                      <p className="text-sm font-bold text-white">{p.titulo}</p>
                      <p className="text-xs text-blue-200 leading-relaxed">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mensalidade pós go-live */}
        <div className="mt-6 bg-gradient-to-br from-blue-dark via-blue-primary to-blue-dark rounded-2xl p-6 md:p-8 text-white relative overflow-hidden">
          <div className="absolute top-[-60px] right-[-60px] w-[240px] h-[240px] bg-blue-light rounded-full blur-[100px] opacity-[0.12] pointer-events-none" />
          <div className="relative z-10">
            <p className="font-manrope text-sm font-bold text-blue-light mb-2">
              {investimento.mensalidade.titulo}
            </p>
            <p className="text-sm text-white/70 leading-relaxed">
              {investimento.mensalidade.texto}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
