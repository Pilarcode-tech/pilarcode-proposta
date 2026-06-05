import { acosvital } from "../../data/acosvital";
import SectionHeader from "../SectionHeader";

export default function Investimento() {
  const { investimento } = acosvital;
  return (
    <section className="px-6 md:px-10 py-10 md:py-14">
      <div className="max-w-4xl mx-auto">
        <SectionHeader label="Investimento" title="Valor do projeto" />

        <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-8 max-w-3xl">
          {investimento.justificativa}
        </p>

        <div className="bg-gradient-to-br from-blue-dark to-blue-primary rounded-3xl p-8 md:p-12 lg:p-14 text-white relative overflow-hidden text-center">
          <div className="absolute bottom-[-80px] right-[-60px] w-[350px] h-[350px] bg-blue-light rounded-full blur-[140px] opacity-[0.12] pointer-events-none" />

          <div className="relative z-10">
            <p className="font-manrope text-[11px] font-bold text-blue-200 uppercase tracking-[3px] mb-4">
              Painel Diário · Valor Total
            </p>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-3">
              {investimento.valor}
            </h2>
            <p className="text-sm text-blue-200/80 mb-10 max-w-md mx-auto">
              {investimento.descricao}
            </p>

            <div className="max-w-md mx-auto text-left">
              {investimento.opcoes.map((o) => (
                <div
                  key={o.rotulo}
                  className="bg-white/[0.08] border border-white/10 rounded-2xl p-6 backdrop-blur-sm flex flex-col"
                >
                  <div className="flex items-baseline justify-between gap-2 mb-5">
                    <p className="font-manrope text-[11px] font-bold text-blue-light uppercase tracking-[1.5px]">
                      {o.rotulo} · {o.titulo}
                    </p>
                    <span className="text-base font-extrabold text-white whitespace-nowrap">
                      {o.destaque}
                    </span>
                  </div>
                  <div className="space-y-4">
                    {o.parcelas.map((p) => (
                      <div key={p.titulo} className="flex items-start gap-3">
                        <span className="mt-1.5 w-2 h-2 rounded-full bg-blue-light shrink-0" />
                        <div className="flex-1">
                          <p className="text-sm font-bold text-white leading-snug">
                            {p.titulo}
                          </p>
                          <p className="text-xs text-blue-200 leading-relaxed">
                            {p.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Hospedagem e manutenção */}
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

        {/* Evolução futura */}
        <div className="mt-6 border border-dashed border-blue-light/40 rounded-2xl p-6 md:p-8 bg-blue-light/[0.03]">
          <p className="font-manrope text-[11px] font-bold text-blue-primary uppercase tracking-[1.5px] mb-2">
            {investimento.evolucao.titulo}
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            {investimento.evolucao.texto}
          </p>
        </div>
      </div>
    </section>
  );
}
