export const gabinetevirtual = {
  titulo: "Gabinete Virtual",
  subtitulo:
    "Proposta de construção do Gabinete Virtual: SaaS multi-tenant, white-label e pronto para revenda, para gestão completa de campanha e mandato político — eleitores, cabos, comunicação multicanal e inteligência de IA num só lugar.",
  empresa: "Pilarcode",
  cliente: "Bruno Cortez",
  clienteCurto: "Bruno",
  emissao: "Maio / 2026",
  validade: "30 dias",
  prazo: "24 a 30 semanas a partir do kick-off, com a Fase 1 já comercializável a partir da semana 12",
  senha: "gabinete2026",

  meta: [
    { label: "Preparado para", valor: "Bruno Cortez" },
    { label: "Modelo", valor: "SaaS white-label para revenda" },
    { label: "Data", valor: "Maio 2026" },
    { label: "Prazo de Entrega", valor: "24 a 30 semanas · Fase 1 vendável na semana 12" },
  ],

  contexto: {
    paragrafos: [
      "Bruno, você identificou uma oportunidade real: o mercado de software para campanhas políticas no Brasil é fragmentado, dominado por ferramentas caras e desconectadas que forçam o político e a equipe a operar em cinco abas diferentes. Quem entrega tudo num lugar só, com IA e WhatsApp integrados, ganha o mercado, e a janela de 2026 fecha rápido.",
      "O que você desenhou no Replit é a tese certa: um centro de comando político onde cabos, eleitores, demandas, comunicação e inteligência conversam entre si. O problema é que o que existe hoje é prototipagem visual, não produto. Para revender com segurança, cobrar mensalidade e escalar para dezenas de políticos sem o sistema cair em véspera de eleição, é preciso construir do zero com arquitetura multi-tenant, compliance LGPD, segurança de dados eleitorais e operação 24/7.",
      "É exatamente esse salto, do protótipo bonito ao produto vendável, que essa proposta resolve.",
    ],
  },

  proposta: {
    texto:
      "Construção completa do Gabinete Virtual como SaaS multi-tenant, white-label e pronto para revenda. Você sai com um produto funcionando em produção, com clientes podendo ser provisionados em minutos, IA integrada, WhatsApp bot ativo e estrutura preparada para escalar de 1 a 200 políticos sem refazer arquitetura. Ao final, você terá um produto SaaS operacional, com cobrança recorrente configurada, painel de administração para você gerenciar os clientes políticos, e capacidade técnica de prospectar e onboardar novos mandatos sem depender de mim para cada cliente novo.",
    nota: {
      titulo: "Do protótipo ao produto vendável",
      texto:
        "O que existe hoje no Replit é prototipagem visual. Esta proposta cobre a construção do produto de verdade: arquitetura multi-tenant, segurança de dados eleitorais, compliance LGPD, cobrança recorrente e operação contínua. O escopo é faseado em três blocos, e cada fase entrega valor independente — você pode começar a vender e cobrar mensalidade antes do produto estar 100% completo.",
    },
  },

  modulos: [
    {
      titulo: "Dashboard executivo",
      desc: "Centro de comando com visão consolidada de eleitores, cabos, demandas, métricas e comunicação. A primeira tela que o político vê todo dia.",
      complexidade: "standard" as const,
    },
    {
      titulo: "Cabos eleitorais com QR Code",
      desc: "Cadastro e gestão de cabos com QR Code individual, vinculação a regiões, acompanhamento de captação e performance por liderança.",
      complexidade: "medium" as const,
    },
    {
      titulo: "Base de eleitores",
      desc: "Cadastro completo de eleitores, segmentação, histórico de relacionamento, enriquecimento de dados, DNA do eleitor e grafo de conhecimento.",
      complexidade: "high" as const,
    },
    {
      titulo: "Regiões e territórios",
      desc: "Mapeamento de zonas, bairros e regiões, com vínculo a cabos e eleitores e visão de cobertura territorial da campanha.",
      complexidade: "standard" as const,
    },
    {
      titulo: "Métricas e relatórios",
      desc: "Indicadores de campanha em tempo real, Power BI integrado e relatórios exportáveis para a equipe e para o político.",
      complexidade: "medium" as const,
    },
    {
      titulo: "Disparos multicanal",
      desc: "Campanhas por WhatsApp, SMS, Push e RCS, com segmentação, agendamento e disparos em massa dentro das regras de compliance.",
      complexidade: "high" as const,
    },
    {
      titulo: "Relacionamento e WhatsApp bot",
      desc: "Automações com gatilhos, WhatsApp bot com editor visual de menu, caixa de entrada unificada e fluxos de atendimento configuráveis por cliente.",
      complexidade: "high" as const,
    },
    {
      titulo: "Cérebro de IA",
      desc: "Assistente de IA treinado nas fontes do gabinete, gerador de conteúdo e inteligência sobre eleitores — cada político tem seu próprio cérebro.",
      complexidade: "high" as const,
    },
    {
      titulo: "Agenda integrada",
      desc: "Agenda do mandato e da campanha, com vínculo a demandas, eventos e compromissos, acessível pela equipe.",
      complexidade: "standard" as const,
    },
    {
      titulo: "Demandas e ouvidoria",
      desc: "Registro, triagem e acompanhamento de demandas dos eleitores, com ouvidoria pública, status e histórico de atendimento.",
      complexidade: "medium" as const,
    },
    {
      titulo: "Proposituras",
      desc: "Gestão de proposituras, projetos e ações legislativas, com vínculo a demandas e a comunicação com o eleitor.",
      complexidade: "medium" as const,
    },
    {
      titulo: "Configurações e administração white-label",
      desc: "Painel multi-tenant para você criar e configurar cada político cliente, cobrança recorrente, planos, domínios, branding e logs de auditoria — sem mexer em código.",
      complexidade: "high" as const,
    },
  ],

  fases: [
    {
      numero: "1",
      titulo: "Núcleo comercializável",
      duracao: "10 a 12 semanas",
      desc: "Arquitetura multi-tenant, autenticação, dashboard executivo, base de eleitores, cabos eleitorais com QR Code, regiões, métricas, configurações e áreas públicas (cadastro, ouvidoria). Com isso você já pode vender e cobrar mensalidade — os módulos que mais vendem na primeira conversa estão aqui. Esta é a entrega comercializável.",
    },
    {
      numero: "2",
      titulo: "Comunicação e engajamento",
      duracao: "8 a 10 semanas",
      desc: "Disparos multicanal (WhatsApp, SMS, Push, RCS), automações com gatilhos, WhatsApp bot com editor visual de menu, caixa de entrada unificada, agenda integrada, demandas e ouvidoria completos. É a fase que justifica a mensalidade mês a mês, porque vira ferramenta de operação diária.",
    },
    {
      numero: "3",
      titulo: "Cérebro de IA e inteligência",
      duracao: "6 a 8 semanas",
      desc: "Assistente de IA treinado nas fontes do gabinete, gerador de conteúdo, enriquecimento de eleitores, DNA do eleitor, grafo de conhecimento, Power BI integrado, proposituras. É o diferencial competitivo que separa o Gabinete Virtual de planilha com WhatsApp.",
    },
  ],

  metodologiaDescricao:
    "Dado o volume real do escopo — 12 módulos, 130+ funcionalidades, IA, automações, multicanal e multi-tenancy — faseamos a construção em três blocos. Cada fase entrega valor independente e você pode comercializar antes de ter o produto 100% completo. São 24 a 30 semanas no total, com a Fase 1 já comercializável a partir da semana 12.",

  entregaveis: [
    {
      titulo: "SaaS multi-tenant em produção",
      desc: "Infraestrutura provisionada, domínio próprio, SSL, backup automático e monitoramento, pronto para receber clientes pagantes.",
    },
    {
      titulo: "Painel administrativo white-label",
      desc: "Você cria, configura e gerencia cada político cliente sem precisar mexer em código.",
    },
    {
      titulo: "Cobrança recorrente integrada",
      desc: "Stripe ou Asaas, com planos configuráveis, faturamento automático e gestão de inadimplência.",
    },
    {
      titulo: "12 módulos funcionais",
      desc: "Dashboard, Cabos, Eleitores, Regiões, Métricas, Disparos, Relacionamento, Cérebro IA, Agenda, Demandas, Proposituras e Configurações, conforme escopo.",
    },
    {
      titulo: "Integração WhatsApp Business API oficial",
      desc: "Bot configurável e disparos em massa dentro das regras de compliance.",
    },
    {
      titulo: "Camada de IA com fontes por cliente",
      desc: "OpenRouter ou Anthropic, com sistema de fontes de conhecimento — cada político tem seu próprio cérebro treinado.",
    },
    {
      titulo: "Conformidade LGPD",
      desc: "Termo de uso, política de privacidade, gestão de consentimento e logs de auditoria dos dados eleitorais.",
    },
    {
      titulo: "Código-fonte completo no GitHub",
      desc: "Repositório que você é dono, documentado, com guia de operação.",
    },
    {
      titulo: "3 meses de garantia técnica após o go-live",
      desc: "Bugs e ajustes corretivos sem custo adicional durante o período de garantia.",
    },
  ],

  opcoes: [
    {
      id: "A",
      nome: "Projeto Fechado",
      tag: "Modelo tradicional",
      destaque: false,
      resumo:
        "Construção completa nas três fases, entrega do código, você opera 100% por conta a partir do go-live.",
      valor: "R$ 58.000",
      valorLegenda: "Investimento total · 24 a 30 semanas após o kick-off",
      parcelas: [
        { titulo: "30% na assinatura", desc: "R$ 17.400 de sinal; o trabalho começa na semana seguinte." },
        { titulo: "30% na entrega da Fase 1", desc: "R$ 17.400, com o núcleo comercializável no ar." },
        { titulo: "25% na entrega da Fase 2", desc: "R$ 14.500, com comunicação e engajamento entregues." },
        { titulo: "15% na entrega da Fase 3", desc: "R$ 8.700, parcela final com a IA e a inteligência entregues." },
      ],
      mensal: null,
    },
    {
      id: "B",
      nome: "Build + Licenciamento",
      tag: "Recomendada",
      destaque: true,
      resumo:
        "Investimento inicial menor, e a Pilarcode segue como parceira técnica do produto via licenciamento mensal. Você paga menos na construção e divide o sucesso do SaaS ao longo do tempo. Esse modelo te protege de ter um SaaS que ninguém mantém, e cria uma parceria técnica de longo prazo no lugar de uma entrega pontual.",
      valor: "R$ 32.000",
      valorLegenda: "Setup inicial · mesmas três fases, mesmo escopo",
      parcelas: [
        { titulo: "50% na assinatura", desc: "R$ 16.000 de sinal; o trabalho começa na semana seguinte." },
        { titulo: "25% na entrega da Fase 1", desc: "R$ 8.000, com o núcleo comercializável no ar." },
        { titulo: "25% na entrega da Fase 3", desc: "R$ 8.000, parcela final com o produto completo." },
      ],
      mensal: {
        titulo: "Licenciamento mensal Pilarcode · R$ 2.200/mês após go-live",
        desc: "Inclui hospedagem, manutenção corretiva, atualizações de segurança, monitoramento e 10 horas mensais de evolução do produto. Você só paga a partir do mês em que faturar o primeiro cliente.",
      },
    },
    {
      id: "C",
      nome: "Banco de Horas Estendido",
      tag: "Ritmo controlado",
      destaque: false,
      resumo:
        "Para o caso de você preferir construir em ritmo mais controlado, validando cada módulo antes de seguir para o próximo. Vantagem de poder pausar entre fases sem perder o time alocado.",
      valor: "R$ 9.500/mês",
      valorLegenda: "Pacote de 60 horas mensais · mínimo de 6 meses",
      parcelas: [
        { titulo: "Mínimo de 6 meses contratados", desc: "Total entre R$ 57.000 e R$ 85.500 conforme o ritmo de construção." },
        { titulo: "Pagamento mensal", desc: "R$ 9.500 por mês enquanto o pacote estiver ativo." },
        { titulo: "Flexibilidade de pausa", desc: "Possível pausar entre fases sem perder o time alocado." },
      ],
      mensal: null,
    },
  ],

  investimentoIntro:
    "Três modelos abaixo. A forma como esse projeto é contratado muda o resultado financeiro para nós dois nos próximos 24 meses — você decide qual faz mais sentido para o momento. Em qualquer um deles o escopo é o mesmo: o Gabinete Virtual completo, multi-tenant, white-label e pronto para revenda.",

  proximosPassos: [
    {
      titulo: "Você escolhe o modelo",
      desc: "Opção A, B ou C — ou pede ajuste em alguma delas. Um ok por aqui no WhatsApp já basta.",
    },
    {
      titulo: "Chamada de 1 hora para fechar a Fase 1",
      desc: "Definimos com precisão o escopo da Fase 1 e o que entra no MVP comercializável.",
    },
    {
      titulo: "Começamos na semana seguinte",
      desc: "Setup de infraestrutura e primeiros wireframes já na primeira semana.",
    },
  ],

  sobre: {
    titulo: "Sobre a Pilarcode",
    texto:
      "A Pilarcode é uma software house focada em construir sistemas e produtos digitais que resolvem problemas reais de negócio, do MVP ao sistema em produção. Trabalhamos com empresas que precisam de um time de tecnologia confiável, sem a complexidade de montar um departamento interno. Stack: React, Next.js, TypeScript, Supabase, .NET Core, Flutter, integração com WhatsApp Business API e camada de IA via OpenRouter/Anthropic. Henrique França é o founder e o ponto de contato direto ao longo de todo o projeto.",
  },
};
