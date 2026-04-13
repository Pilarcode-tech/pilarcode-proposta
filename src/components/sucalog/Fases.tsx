import { sucalog } from "../../data/sucalog";
import SectionHeader from "../SectionHeader";

export default function Fases() {
  const incluidas = sucalog.fases.filter((f) => f.incluida);
  const seguintes = sucalog.fases.filter((f) => !f.incluida);

  return (
    <section className="px-6 md:px-10 py-10 md:py-14 bg-bg-light">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          label="Metodologia"
          title="Como vamos trabalhar juntos"
          description="O trabalho acontece em fases sequenciais. Cada fase entra em produção antes da próxima começar, então o grupo já começa a se beneficiar do sistema sem esperar tudo pronto."
        />

        <div className="bg-white border border-gray-200 rounded-2xl p-5 mb-10 text-sm text-gray-600 leading-relaxed">
          O valor desta proposta cobre as{" "}
          <strong className="text-gray-900">Fases 1 e 2</strong>. As demais
          fases são contratadas em sequência conforme o andamento e as
          prioridades do grupo.
        </div>

        {/* Incluídas */}
        <p className="font-manrope text-[11px] font-bold text-blue-primary uppercase tracking-[2px] mb-5">
          Esta proposta cobre
        </p>
        <div className="space-y-6 mb-14">
          {incluidas.map((f) => (
            <FaseCard key={f.numero} fase={f} destaque />
          ))}
        </div>

        {/* Seguintes */}
        <div className="border-t border-gray-200 pt-10">
          <p className="font-manrope text-[11px] font-bold text-gray-400 uppercase tracking-[2px] mb-5">
            Fases seguintes · contratadas em sequência
          </p>
          <div className="space-y-6">
            {seguintes.map((f) => (
              <FaseCard key={f.numero} fase={f} />
            ))}
          </div>
        </div>

        {/* Expansão futura */}
        <div className="mt-14 bg-gradient-to-br from-blue-dark to-blue-primary rounded-3xl p-8 md:p-10 text-white relative overflow-hidden">
          <div className="absolute top-[-60px] right-[-60px] w-[300px] h-[300px] bg-blue-light rounded-full blur-[120px] opacity-[0.1] pointer-events-none" />
          <div className="relative z-10">
            <p className="font-manrope text-[11px] font-bold text-blue-light uppercase tracking-[2px] mb-3">
              Expansão Futura
            </p>
            <h3 className="text-lg md:text-xl font-bold mb-2">
              Módulos adicionais
            </h3>
            <p className="text-sm text-white/60 leading-relaxed mb-6 max-w-2xl">
              Detalhados em proposta específica conforme prioridade definida
              com o grupo após a implantação das fases iniciais.
            </p>
            <div className="flex flex-wrap gap-2">
              {sucalog.expansaoFutura.map((t) => (
                <span
                  key={t}
                  className="font-manrope text-[11px] font-semibold text-white/70 bg-white/[0.06] border border-white/10 px-3 py-1.5 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FaseCard({
  fase,
  destaque = false,
}: {
  fase: (typeof sucalog.fases)[number];
  destaque?: boolean;
}) {
  return (
    <div
      className={`rounded-3xl p-6 md:p-8 border ${
        destaque
          ? "bg-white border-gray-200"
          : "bg-white/60 border-gray-100"
      }`}
    >
      <div className="flex items-start gap-5">
        <span
          className={`shrink-0 w-11 h-11 rounded-full flex items-center justify-center font-manrope text-base font-bold text-white ${
            destaque
              ? "bg-gradient-to-br from-blue-light to-blue-primary"
              : "bg-gray-400"
          }`}
        >
          {fase.numero}
        </span>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-3">
            <h3
              className={`text-base md:text-lg font-extrabold ${
                destaque ? "text-gray-900" : "text-gray-500"
              }`}
            >
              {fase.titulo}
            </h3>
            {fase.badges.map((b) => (
              <span
                key={b}
                className={`font-manrope text-[10px] font-bold uppercase tracking-[1px] px-2.5 py-1 rounded-full ${
                  fase.urgente && b.includes("Urgente")
                    ? "bg-red-50 text-red-600"
                    : "bg-bg-light text-gray-600"
                }`}
              >
                {b}
              </span>
            ))}
          </div>
          <p
            className={`text-sm leading-relaxed mb-4 ${
              destaque ? "text-gray-600" : "text-gray-500"
            }`}
          >
            {fase.descricao}
          </p>
          <ul className="space-y-2">
            {fase.itens.map((it) => (
              <li
                key={it}
                className={`text-sm leading-relaxed pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-[6px] before:h-[6px] before:rounded-full ${
                  destaque
                    ? "text-gray-700 before:bg-blue-light/70"
                    : "text-gray-500 before:bg-gray-300"
                }`}
              >
                {it}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
