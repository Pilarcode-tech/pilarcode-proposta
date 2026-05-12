import { gabinetevirtual } from "../../data/gabinetevirtual";
import SectionHeader from "../SectionHeader";

export default function Investimento() {
  const { opcoes, investimentoIntro } = gabinetevirtual;
  return (
    <section className="px-6 md:px-10 py-10 md:py-14 bg-bg-light">
      <div className="max-w-4xl mx-auto">
        <SectionHeader label="Investimento" title="Três modelos de contratação" />

        <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-8 max-w-3xl">
          {investimentoIntro}
        </p>

        <div className="space-y-6">
          {opcoes.map((o) => (
            <div
              key={o.id}
              className={`rounded-3xl overflow-hidden relative ${
                o.destaque
                  ? "bg-gradient-to-br from-blue-dark to-blue-primary text-white"
                  : "bg-white border border-gray-200"
              }`}
            >
              {o.destaque && (
                <div className="absolute bottom-[-80px] right-[-60px] w-[350px] h-[350px] bg-blue-light rounded-full blur-[140px] opacity-[0.12] pointer-events-none" />
              )}

              <div className="relative z-10 p-7 md:p-10">
                <div className="flex items-start justify-between gap-4 flex-wrap mb-5">
                  <div>
                    <p
                      className={`font-manrope text-[11px] font-bold uppercase tracking-[3px] mb-2 ${
                        o.destaque ? "text-blue-light" : "text-blue-primary"
                      }`}
                    >
                      Opção {o.id}
                    </p>
                    <h3
                      className={`text-2xl md:text-3xl font-extrabold leading-tight ${
                        o.destaque ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {o.nome}
                    </h3>
                  </div>
                  <span
                    className={`font-manrope text-[10px] font-bold uppercase tracking-[1.5px] px-3 py-1.5 rounded-full ${
                      o.destaque
                        ? "bg-white text-blue-primary"
                        : "bg-blue-light/10 text-blue-primary"
                    }`}
                  >
                    {o.tag}
                  </span>
                </div>

                <p
                  className={`text-sm leading-relaxed mb-7 max-w-2xl ${
                    o.destaque ? "text-blue-200/90" : "text-gray-600"
                  }`}
                >
                  {o.resumo}
                </p>

                <div
                  className={`flex items-end gap-3 flex-wrap pb-6 mb-6 border-b ${
                    o.destaque ? "border-white/15" : "border-gray-200"
                  }`}
                >
                  <span
                    className={`text-4xl md:text-5xl font-extrabold tracking-tight leading-none ${
                      o.destaque ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {o.valor}
                  </span>
                  <span
                    className={`text-xs leading-relaxed pb-1 ${
                      o.destaque ? "text-blue-200/70" : "text-gray-400"
                    }`}
                  >
                    {o.valorLegenda}
                  </span>
                </div>

                <div
                  className={`rounded-2xl p-5 md:p-6 ${
                    o.destaque
                      ? "bg-white/[0.08] border border-white/10 backdrop-blur-sm"
                      : "bg-bg-light border border-gray-200"
                  }`}
                >
                  <p
                    className={`font-manrope text-[11px] font-bold uppercase tracking-[1.5px] mb-4 ${
                      o.destaque ? "text-blue-light" : "text-blue-primary"
                    }`}
                  >
                    Forma de Pagamento
                  </p>
                  <div className="space-y-3.5">
                    {o.parcelas.map((p, i) => (
                      <div key={i} className="flex items-start gap-3.5">
                        <span
                          className={`shrink-0 w-6 h-6 rounded-md flex items-center justify-center font-manrope text-[11px] font-bold ${
                            o.destaque
                              ? "bg-white/15 text-white"
                              : "bg-blue-dark text-white"
                          }`}
                        >
                          {i + 1}
                        </span>
                        <div className="flex-1 pt-0.5">
                          <p
                            className={`text-sm font-bold ${
                              o.destaque ? "text-white" : "text-gray-900"
                            }`}
                          >
                            {p.titulo}
                          </p>
                          <p
                            className={`text-xs leading-relaxed ${
                              o.destaque ? "text-blue-200/80" : "text-gray-500"
                            }`}
                          >
                            {p.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {o.mensal && (
                  <div
                    className={`mt-5 rounded-2xl p-5 md:p-6 ${
                      o.destaque
                        ? "bg-white/[0.06] border border-white/10"
                        : "bg-blue-light/[0.06] border border-blue-light/20"
                    }`}
                  >
                    <p
                      className={`font-manrope text-sm font-bold mb-1.5 ${
                        o.destaque ? "text-blue-light" : "text-blue-primary"
                      }`}
                    >
                      {o.mensal.titulo}
                    </p>
                    <p
                      className={`text-sm leading-relaxed ${
                        o.destaque ? "text-white/75" : "text-gray-600"
                      }`}
                    >
                      {o.mensal.desc}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
