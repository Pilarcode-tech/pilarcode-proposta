import { sucalog } from "../../data/sucalog";

export default function Lean() {
  const { investimento } = sucalog;

  const fase1Itens = [
    "Nponto nas 17 empresas — ponto eletrônico Pilarcode já em produção",
    "Ponto do motorista automatizado via Autotrack + romaneio do Sagi, sem depender do que o motorista informa",
    "Comissão cruzando jornada real × tabela de comissão por rota",
    "Painel de auditoria trabalhista em tempo real, pronto para defesa em fiscalização do MTE",
    "Visibilidade dos gargalos operacionais: tempo por rota, usina e cliente",
  ];

  const fasesSeguintes = [
    {
      num: "2",
      titulo: "Fechamento de folha e CCTs",
      desc: "Automação de comissão, VT, VA, PTS, descontos parcelados, E-Consignado e geração automática do layout do Domínio e Sagi. Monitor automático de CCTs por sindicato.",
    },
    {
      num: "3",
      titulo: "Benefícios",
      desc: "Integração direta com Flash, Pluxee e operadoras de saúde. Custo consolidado por empresa e preenchimento automático de descontos em folha.",
    },
    {
      num: "4",
      titulo: "Portal do colaborador e automações",
      desc: "Holerite digital, solicitação de férias, onboarding automatizado, assinatura digital de documentos e fluxos entre departamentos.",
    },
    {
      num: "5",
      titulo: "Saúde ocupacional e documentação",
      desc: "Controle de ASO, EPI, PCMSO/PGR, linha do tempo do colaborador, processos trabalhistas e contratos terceiros.",
    },
  ];

  const proximosPassos = [
    "Assinatura do contrato e início do desenvolvimento na semana seguinte.",
    "Em 5 semanas: ponto automatizado do motorista e painel de auditoria no ar, antes do próximo ciclo do MTE.",
    "Em 10 semanas: Fase 2 em produção — comissão cruzando jornada real × tabela e primeiro fechamento sem planilha.",
  ];

  return (
    <main>
      {/* Cover limpo */}
      <section className="relative bg-gradient-to-br from-blue-primary via-blue-dark to-blue-primary overflow-hidden">
        <div className="absolute top-[-120px] right-[-100px] w-[500px] h-[500px] bg-blue-light rounded-full blur-[150px] opacity-[0.08] pointer-events-none" />
        <div className="absolute bottom-[5%] left-[-80px] w-[400px] h-[400px] bg-blue-light rounded-full blur-[140px] opacity-[0.06] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-10 pt-32 md:pt-40 pb-24 md:pb-32">
          <p className="font-manrope text-[11px] md:text-xs font-bold tracking-[4px] uppercase text-blue-light mb-8">
            Resumo Executivo · Diretoria · {sucalog.cliente}
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[0.95] tracking-tight text-white mb-8">
            Sucalog Hub.
            <br />
            <span className="text-white/40">
              Uma plataforma para toda a operação.
            </span>
          </h1>

          <p className="text-lg md:text-xl leading-relaxed text-white/60 max-w-2xl">
            Um sistema único para os gestores de todas as áreas do grupo —
            começando pela automação da operação crítica: o ponto do
            motorista e a defesa trabalhista.
          </p>
        </div>
      </section>

      {/* O que resolvemos */}
      <section className="px-6 md:px-10 py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="font-manrope text-[11px] font-bold text-blue-primary uppercase tracking-[3px] mb-6">
            O que resolvemos
          </p>
          <p className="text-xl md:text-2xl lg:text-[28px] text-gray-900 leading-[1.45] font-medium tracking-tight">
            O ponto mais crítico do grupo hoje é a{" "}
            <strong className="font-extrabold">logística</strong>. O trajeto
            dos motoristas é monitorado pela Autotrack, mas nada marca ponto
            sozinho, nada cruza com o romaneio do Sagi e nada compara a
            jornada real com a tabela de comissão — a empresa depende do que
            o motorista informa. Enquanto isso, jornadas estouram o limite
            legal e o{" "}
            <strong className="font-extrabold text-red-600">
              MTE fiscaliza
            </strong>
            . O Sucalog Hub automatiza essa cadeia de ponta a ponta e, a
            partir dela, evolui para cobrir toda a operação do grupo em um
            único sistema.
          </p>
        </div>
      </section>

      {/* O que entregamos — Fase 1 em destaque + demais fases */}
      <section className="px-6 md:px-10 py-20 md:py-28 bg-bg-light">
        <div className="max-w-4xl mx-auto">
          <p className="font-manrope text-[11px] font-bold text-blue-primary uppercase tracking-[3px] mb-4">
            O que entregamos
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight mb-12 max-w-2xl">
            Um produto único, entregue em fases.
          </h2>

          {/* Fase 1 — destaque */}
          <div className="bg-gradient-to-br from-blue-dark to-blue-primary rounded-3xl p-8 md:p-10 text-white relative overflow-hidden mb-6">
            <div className="absolute top-[-60px] right-[-60px] w-[300px] h-[300px] bg-blue-light rounded-full blur-[120px] opacity-[0.1] pointer-events-none" />
            <div className="relative z-10">
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span className="inline-flex items-center gap-1.5 bg-red-500/20 border border-red-400/30 text-red-200 font-manrope text-[10px] font-bold uppercase tracking-[2px] px-3 py-1.5 rounded-full">
                  <span className="w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse" />
                  Urgente · MTE
                </span>
                <span className="font-manrope text-[10px] font-bold text-blue-light uppercase tracking-[2px]">
                  Fase 1 · Semanas 1–5
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-6">
                Motorista, ponto e auditoria trabalhista
              </h3>
              <ul className="space-y-3">
                {fase1Itens.map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <svg
                      className="shrink-0 w-5 h-5 text-blue-light mt-0.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-sm md:text-base text-white/90 leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Fases seguintes — compactas */}
          <p className="font-manrope text-[10px] font-bold text-gray-400 uppercase tracking-[2px] mb-4 mt-10">
            Fases seguintes · roadmap do produto
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {fasesSeguintes.map((f) => (
              <div
                key={f.num}
                className="bg-white border border-gray-200 rounded-2xl p-5 md:p-6"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="shrink-0 w-7 h-7 bg-blue-primary/10 text-blue-primary rounded-lg flex items-center justify-center font-extrabold text-sm">
                    {f.num}
                  </span>
                  <p className="text-sm font-extrabold text-gray-900">
                    {f.titulo}
                  </p>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investimento */}
      <section className="px-6 md:px-10 py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="font-manrope text-[11px] font-bold text-blue-primary uppercase tracking-[3px] mb-4">
            Investimento
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight mb-10 max-w-2xl">
            Valor fechado, prazo fechado, escopo fechado.
          </h2>

          <div className="bg-gradient-to-br from-blue-dark to-blue-primary rounded-3xl p-8 md:p-12 text-white relative overflow-hidden mb-6">
            <div className="absolute bottom-[-80px] right-[-60px] w-[350px] h-[350px] bg-blue-light rounded-full blur-[140px] opacity-[0.1] pointer-events-none" />
            <div className="relative z-10">
              <p className="font-manrope text-[11px] font-bold text-blue-200 uppercase tracking-[3px] mb-4">
                Fases 1 e 2 · 10 semanas
              </p>
              <h3 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-3">
                {investimento.valor}
              </h3>
              <p className="text-sm text-blue-200/80 max-w-xl mb-10">
                Cobre a Fase 1 (motorista, ponto e auditoria) e a Fase 2
                (fechamento de folha e CCTs) para todas as 17 empresas do
                grupo.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {investimento.pagamento.map((p) => (
                  <div
                    key={p.etapa}
                    className="bg-white/[0.08] border border-white/10 rounded-2xl p-5 text-center backdrop-blur-sm"
                  >
                    <p className="font-manrope text-xs font-bold text-blue-light uppercase tracking-[1px] mb-2">
                      {p.pct}
                    </p>
                    <p className="text-xl md:text-2xl font-extrabold text-white tracking-tight">
                      {p.valor}
                    </p>
                    <p className="text-xs text-blue-200 mt-2">{p.etapa}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-blue-dark rounded-3xl p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-white">
            <div>
              <p className="font-manrope text-[10px] font-bold text-blue-200 uppercase tracking-[2px] mb-2">
                Mensalidade após entrega
              </p>
              <p className="text-2xl md:text-3xl font-extrabold tracking-tight">
                {investimento.mensal.valor}
                <span className="text-sm font-normal text-blue-200/60">
                  {" "}
                  / mês
                </span>
              </p>
            </div>
            <p className="text-xs md:text-sm text-blue-200/70 md:text-right md:max-w-sm leading-relaxed">
              Hospedagem, manutenção, atualizações e suporte para todas as 17
              empresas do grupo.
            </p>
          </div>

          <p className="text-xs text-gray-400 mt-6 text-center max-w-xl mx-auto leading-relaxed">
            Fases 3 a 5 são orçadas e contratadas individualmente após a
            entrega das Fases 1 e 2, conforme o roadmap do produto evolui.
          </p>
        </div>
      </section>

      {/* Próximos passos */}
      <section className="px-6 md:px-10 py-20 md:py-28 bg-bg-light">
        <div className="max-w-4xl mx-auto">
          <p className="font-manrope text-[11px] font-bold text-blue-primary uppercase tracking-[3px] mb-4">
            Próximos Passos
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight mb-10 max-w-2xl">
            De assinatura ao primeiro fechamento sem planilha.
          </h2>

          <div className="space-y-4">
            {proximosPassos.map((p, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-2xl p-6 flex gap-5 items-start"
              >
                <div className="shrink-0 w-10 h-10 bg-blue-primary/10 text-blue-primary rounded-xl flex items-center justify-center font-extrabold">
                  {i + 1}
                </div>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed pt-1.5">
                  {p}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
