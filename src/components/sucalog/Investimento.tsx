import { sucalog } from "../../data/sucalog";
import SectionHeader from "../SectionHeader";

export default function Investimento() {
  const { investimento } = sucalog;

  return (
    <section className="px-6 md:px-10 py-10 md:py-14 bg-bg-light">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          label="Valores"
          title="Investimento"
          description="O valor abaixo cobre as Fases 1 e 2. As fases seguintes são orçadas e contratadas individualmente após a entrega de cada etapa."
        />

        {/* Card principal */}
        <div className="bg-gradient-to-br from-blue-dark to-blue-primary rounded-3xl p-8 md:p-12 lg:p-16 text-white relative overflow-hidden mb-6">
          <div className="absolute bottom-[-80px] right-[-60px] w-[350px] h-[350px] bg-blue-light rounded-full blur-[140px] opacity-[0.1] pointer-events-none" />

          <div className="relative z-10">
            <p className="font-manrope text-[11px] font-bold text-blue-200 uppercase tracking-[3px] mb-4">
              Fases 1 e 2 · Ponto, Auditoria, CCTs e Fechamento de Folha
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-3">
              {investimento.valor}
            </h2>
            <p className="text-sm text-blue-200/80 max-w-xl mb-10">
              {investimento.nota}
            </p>

            <p className="font-manrope text-[10px] font-bold text-white/40 uppercase tracking-[2px] mb-5">
              Condições de Pagamento
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {investimento.pagamento.map((p) => (
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
                  <p className="text-xs text-blue-200 mt-2">{p.etapa}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Fases seguintes */}
        <div className="bg-white border border-gray-200 rounded-3xl p-6 md:p-8 mb-6">
          <p className="font-manrope text-[11px] font-bold text-gray-400 uppercase tracking-[2px] mb-4">
            Estimativa das fases seguintes
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {investimento.fasesSeguintes.map((f) => (
              <div
                key={f.nome}
                className="bg-bg-light rounded-2xl p-5 border border-gray-100"
              >
                <p className="font-manrope text-[10px] font-bold text-blue-primary uppercase tracking-[1px] mb-1">
                  {f.nome}
                </p>
                <p className="text-sm font-bold text-gray-900 mb-2">
                  {f.titulo}
                </p>
                <p className="text-xs text-gray-500">
                  {f.valor} · {f.prazo}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mensalidade */}
        <div className="bg-blue-dark rounded-3xl p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-white">
          <div>
            <p className="font-manrope text-[10px] font-bold text-blue-200 uppercase tracking-[2px] mb-2">
              Assinatura Mensal
            </p>
            <p className="text-3xl md:text-4xl font-extrabold tracking-tight">
              {investimento.mensal.valor}
              <span className="text-base font-normal text-blue-200/60">
                {" "}
                / mês
              </span>
            </p>
          </div>
          <p className="text-xs md:text-sm text-blue-200/70 md:text-right md:max-w-sm leading-relaxed">
            {investimento.mensal.nota}
          </p>
        </div>
      </div>
    </section>
  );
}
