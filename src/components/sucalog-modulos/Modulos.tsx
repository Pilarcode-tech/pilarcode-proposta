import { sucalog } from "../../data/sucalog";

export default function Modulos() {
  const fasesAbertas = sucalog.fases.filter((f) => !f.incluida);

  const pagamento = [
    { pct: "40%", etapa: "Assinatura do aditivo", valor: "R$ 16.800" },
    { pct: "20%", etapa: "Entrega Fase 3", valor: "R$ 8.400" },
    { pct: "20%", etapa: "Entrega Fase 4", valor: "R$ 8.400" },
    { pct: "20%", etapa: "Entrega Fase 5", valor: "R$ 8.400" },
  ];

  const valorTotal = "R$ 42.000";

  const mensalidade = {
    atual: "R$ 1.900",
    novo: "R$ 2.400",
  };

  const proximosPassos = [
    "Aprovação do orçamento pela diretoria e assinatura do aditivo contratual.",
    "Kick-off com a Gisele para sequenciamento das fases conforme prioridade — o fluxo de aprovação salarial (Fase 4) pode ser priorizado se for a maior urgência da diretoria.",
    "Entrega contínua em ~12 semanas calendário: Fase 3 nas primeiras 5 semanas, Fase 4 em paralelo a partir da 4ª, Fase 5 a partir da 9ª.",
  ];

  return (
    <main>
      {/* Cover */}
      <section className="relative bg-gradient-to-br from-blue-primary via-blue-dark to-blue-primary overflow-hidden">
        <div className="absolute top-[-120px] right-[-100px] w-[500px] h-[500px] bg-blue-light rounded-full blur-[150px] opacity-[0.08] pointer-events-none" />
        <div className="absolute bottom-[5%] left-[-80px] w-[400px] h-[400px] bg-blue-light rounded-full blur-[140px] opacity-[0.06] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-10 pt-32 md:pt-40 pb-24 md:pb-32">
          <p className="font-manrope text-[11px] md:text-xs font-bold tracking-[4px] uppercase text-blue-light mb-8">
            Próximos Módulos · {sucalog.cliente}
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[0.95] tracking-tight text-white mb-8">
            Sucalog Hub.
            <br />
            <span className="text-white/40">A continuidade.</span>
          </h1>

          <p className="text-lg md:text-xl leading-relaxed text-white/60 max-w-2xl">
            Orçamento das fases ainda em aberto do roadmap do Sucalog Hub —
            benefícios, portal do colaborador, automações e saúde
            ocupacional. Cada fase com escopo, prazo e valor definidos.
          </p>
        </div>
      </section>

      {/* Contexto */}
      <section className="px-6 md:px-10 py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="font-manrope text-[11px] font-bold text-blue-primary uppercase tracking-[3px] mb-6">
            Onde estamos
          </p>
          <p className="text-xl md:text-2xl lg:text-[28px] text-gray-900 leading-[1.45] font-medium tracking-tight">
            As <strong className="font-extrabold">Fases 1 e 2</strong> já
            estão contratadas e em execução: Nponto nas 17 empresas, painel
            de auditoria trabalhista em tempo real, módulo de CCTs e
            fechamento de folha automatizado com integração ao Domínio e
            Sagi. Este orçamento cobre os{" "}
            <strong className="font-extrabold">próximos três módulos</strong>{" "}
            do roadmap, que dão continuidade ao sistema sem retrabalho de
            arquitetura — toda a fundação já está construída.
          </p>
        </div>
      </section>

      {/* Fases em aberto — escopo detalhado */}
      <section className="px-6 md:px-10 py-20 md:py-28 bg-bg-light">
        <div className="max-w-5xl mx-auto">
          <p className="font-manrope text-[11px] font-bold text-blue-primary uppercase tracking-[3px] mb-4">
            Escopo dos módulos
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight mb-12 max-w-2xl">
            Três fases, três entregas independentes.
          </h2>

          <div className="space-y-6">
            {fasesAbertas.map((f) => (
              <div
                key={f.numero}
                className="bg-white border border-gray-200 rounded-3xl p-7 md:p-10"
              >
                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <span className="shrink-0 w-9 h-9 bg-blue-primary text-white rounded-xl flex items-center justify-center font-extrabold">
                    {f.numero}
                  </span>
                  {f.badges.map((b) => (
                    <span
                      key={b}
                      className="font-manrope text-[10px] font-bold text-gray-500 uppercase tracking-[2px] bg-gray-100 px-3 py-1.5 rounded-full"
                    >
                      {b}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl md:text-2xl font-extrabold text-gray-900 tracking-tight mb-3">
                  {f.titulo}
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6 max-w-3xl">
                  {f.descricao}
                </p>
                <ul className="space-y-2.5">
                  {f.itens.map((item, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <svg
                        className="shrink-0 w-4 h-4 text-blue-primary mt-1"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="text-sm text-gray-700 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
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
            Valor por fase e condições de pagamento.
          </h2>

          {/* Valor por fase */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            {sucalog.investimento.fasesSeguintes.map((f) => (
              <div
                key={f.nome}
                className="bg-bg-light border border-gray-200 rounded-2xl p-6"
              >
                <p className="font-manrope text-[10px] font-bold text-gray-400 uppercase tracking-[2px] mb-3">
                  {f.nome} · {f.prazo}
                </p>
                <p className="text-sm font-extrabold text-gray-900 mb-4 leading-snug">
                  {f.titulo}
                </p>
                <p className="text-2xl md:text-3xl font-extrabold text-blue-primary tracking-tight">
                  {f.valor}
                </p>
              </div>
            ))}
          </div>

          {/* Valor total + pagamento */}
          <div className="bg-gradient-to-br from-blue-dark to-blue-primary rounded-3xl p-8 md:p-12 text-white relative overflow-hidden mb-6">
            <div className="absolute bottom-[-80px] right-[-60px] w-[350px] h-[350px] bg-blue-light rounded-full blur-[140px] opacity-[0.1] pointer-events-none" />
            <div className="relative z-10">
              <p className="font-manrope text-[11px] font-bold text-blue-200 uppercase tracking-[3px] mb-4">
                Valor total · Fases 3 + 4 + 5
              </p>

              <h3 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-3">
                {valorTotal}
              </h3>
              <p className="text-sm text-blue-200/80 max-w-xl mb-10">
                Cobre os três módulos do roadmap, executados em sequência
                com sobreposição entre fases. Prazo total estimado de ~12
                semanas calendário.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {pagamento.map((p) => (
                  <div
                    key={p.etapa}
                    className="bg-white/[0.08] border border-white/10 rounded-2xl p-4 text-center backdrop-blur-sm"
                  >
                    <p className="font-manrope text-xs font-bold text-blue-light uppercase tracking-[1px] mb-2">
                      {p.pct}
                    </p>
                    <p className="text-lg md:text-xl font-extrabold text-white tracking-tight">
                      {p.valor}
                    </p>
                    <p className="text-[10px] text-blue-200 mt-2 leading-tight">
                      {p.etapa}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="text-xs text-gray-400 mt-6 text-center max-w-xl mx-auto leading-relaxed">
            Soma dos valores individuais das três fases (R$ 14.000 + R$
            16.000 + R$ 12.000). Pagamento conforme tabela acima, com
            assinatura, marcos de entrega e nota fiscal por etapa.
          </p>
        </div>
      </section>

      {/* Mensalidade */}
      <section className="px-6 md:px-10 py-20 md:py-28 bg-bg-light">
        <div className="max-w-4xl mx-auto">
          <p className="font-manrope text-[11px] font-bold text-blue-primary uppercase tracking-[3px] mb-4">
            Mensalidade após entrega
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight mb-10 max-w-2xl">
            Reajuste após a Fase 5 entrar em produção.
          </h2>

          <div className="bg-blue-dark rounded-3xl p-8 md:p-10 text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div>
                <p className="font-manrope text-[10px] font-bold text-blue-200 uppercase tracking-[2px] mb-2">
                  Hoje · Fases 1 + 2
                </p>
                <p className="text-3xl md:text-4xl font-extrabold tracking-tight">
                  {mensalidade.atual}
                  <span className="text-sm font-normal text-blue-200/60">
                    {" "}
                    / mês
                  </span>
                </p>
              </div>
              <div>
                <p className="font-manrope text-[10px] font-bold text-blue-light uppercase tracking-[2px] mb-2">
                  Após Fase 5 · Sistema completo
                </p>
                <p className="text-3xl md:text-4xl font-extrabold tracking-tight">
                  {mensalidade.novo}
                  <span className="text-sm font-normal text-blue-200/60">
                    {" "}
                    / mês
                  </span>
                </p>
              </div>
            </div>
            <p className="text-xs md:text-sm text-blue-200/70 mt-8 leading-relaxed max-w-2xl">
              O ajuste reflete a ampliação da superfície do sistema — portal
              do colaborador, assinatura digital, integrações com 6
              operadoras de saúde, controle de ASO, EPI e processos
              trabalhistas — e o suporte estendido a todas as áreas
              cobertas. Hospedagem, manutenção, atualizações e suporte
              continuam inclusos.
            </p>
          </div>
        </div>
      </section>

      {/* Próximos passos */}
      <section className="px-6 md:px-10 py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="font-manrope text-[11px] font-bold text-blue-primary uppercase tracking-[3px] mb-4">
            Próximos Passos
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight mb-10 max-w-2xl">
            Da aprovação ao sistema completo em 12 semanas.
          </h2>

          <div className="space-y-4">
            {proximosPassos.map((p, i) => (
              <div
                key={i}
                className="bg-bg-light border border-gray-100 rounded-2xl p-6 flex gap-5 items-start"
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
