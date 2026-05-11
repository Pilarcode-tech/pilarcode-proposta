export const willdelta = {
  titulo: "Will Delta",
  subtitulo:
    "Proposta de desenvolvimento do Sistema de Gestão Industrial Will Delta: orçamento auditável, gestão de ordens de serviço com entregas parciais e controle de matéria-prima do cliente. Fase 1.",
  empresa: "Pilarcode Tech",
  cliente: "Will Delta",
  clienteCurto: "Will Delta",
  emissao: "Maio / 2026",
  validade: "30 dias",
  prazo: "4 semanas a partir da assinatura, go-live dentro do prazo de agosto de 2026",
  senha: "willdelta2026",

  meta: [
    { label: "Preparado para", valor: "William e Flávia · Will Delta" },
    { label: "Divisão", valor: "Pilarcode" },
    { label: "Data", valor: "Maio 2026" },
    { label: "Prazo de Entrega", valor: "4 semanas · go-live dentro do prazo de agosto" },
  ],

  contexto: {
    paragrafos: [
      "Um pedido de 13 mil peças é precificado em minutos com o cálculo que a Flávia faz de cabeça, e depois sai fracionado em entregas ao longo de semanas. Cada parcial vira um documento refeito no Word, com cabeçalho, itens, vencimentos e saldo do alumínio do cliente, tudo digitado de novo. O cliente principal cresceu, fechou com a Yamamura e a Leroy Merlin, e hoje responde por 60 a 70% do volume. O ritmo aumentou, as ferramentas de controle não: papel, planilha, e-mail e WhatsApp.",
      "Quando a margem está na casa dos centavos, dois centavos a mais ou a menos no preço de uma peça têm impacto real no faturamento. Um orçamento que mora na cabeça de uma pessoa funciona enquanto essa pessoa está presente, mas não dá para auditar, delegar ou revisar com calma. O mesmo vale para o prazo de entrega: responder \"quando fica pronto\" exige parar e calcular toda vez.",
      "E tem a oportunidade que fica de fora: sem saber quanto ainda cabe na fila das máquinas, vocês mesmos disseram que não dá para prospectar cliente novo com segurança. Vocês vão de 3 para 6 máquinas até agosto. O momento de organizar a operação é agora.",
    ],
  },

  proposta: {
    texto:
      "O Sistema de Gestão Industrial Will Delta é um sistema sob medida que reúne, num só lugar, o orçamento, a gestão das ordens de serviço e o controle da matéria-prima do cliente. Ao final da Fase 1, a Flávia gera um orçamento em segundos a partir de uma fórmula que qualquer pessoa do time consegue conferir, o William enxerga a fila de cada máquina em tempo real, e cada entrega parcial sai do sistema já com o documento certo, os vencimentos lançados e o saldo de alumínio do cliente atualizado. O que hoje vive no Word, no caderno e na memória passa a viver num sistema só, acessível pelos dois sócios.",
    nota: {
      titulo: "Esta proposta cobre a Fase 1",
      texto:
        "O sistema foi pensado para crescer. Depois do go-live, está prevista uma evolução com apontamento de chão de fábrica em tempo real, integração com o Soften e o Organize e um aplicativo para os operadores. Nada disso entra agora: esta proposta cobre exclusivamente a Fase 1, descrita abaixo, e cada etapa seguinte será orçada à parte quando fizer sentido.",
    },
  },

  modulos: [
    {
      titulo: "Cadastros base",
      desc: "Clientes, máquinas com tarifa hora individual (R$ 120 para a máquina modelo 180 e R$ 100 para a modelo 100), moldes com peso da peça e número de cavidades, e matérias-primas.",
      complexidade: "standard" as const,
    },
    {
      titulo: "Motor de orçamento",
      desc: "Calcula o preço da peça a partir do peso, das cavidades, das peças por hora, da tarifa da máquina, do markup padrão de 50% (ajustável por cliente) e do percentual de perda. Gera um PDF de orçamento pronto para enviar por WhatsApp ou e-mail.",
      complexidade: "high" as const,
    },
    {
      titulo: "Gestão de OS com entregas parciais",
      desc: "OS principal vinculada ao pedido do cliente, com entregas parciais numeradas num padrão novo e limpo (OS-0147/2026, Entrega 01, 02, 03). Cada entrega aceita vários números de controle do cliente e vários vencimentos de cobrança.",
      complexidade: "high" as const,
    },
    {
      titulo: "Controle de matéria-prima por cliente",
      desc: "Saldo inicial, entradas do material recebido do cliente e baixas automáticas conforme a produção. Um painel mostra quanto material de cada cliente ainda está na Will Delta.",
      complexidade: "medium" as const,
    },
    {
      titulo: "Documento de entrega em PDF",
      desc: "Replica o layout atual da Will Delta: dados do cliente, tabela de itens, total a pagar, dados bancários, vencimentos, número da OS e controle de matéria-prima. Funciona com ou sem nota fiscal.",
      complexidade: "medium" as const,
    },
    {
      titulo: "Dashboard básico",
      desc: "OS abertas, fila por máquina, contas a receber das entregas e saldo de matéria-prima por cliente, tudo numa tela só.",
      complexidade: "standard" as const,
    },
  ],

  fases: [
    {
      numero: "1",
      titulo: "Fundação",
      duracao: "Semanas 1 e 2",
      desc: "Cadastros base (clientes, máquinas, moldes, matérias-primas), motor de orçamento com a fórmula completa e geração do PDF de orçamento. No fim desta etapa, a Flávia já gera orçamentos pelo sistema, com fórmula auditável, em vez de calcular de cabeça. Esta é a entrega parcial.",
    },
    {
      numero: "2",
      titulo: "Operação e go-live",
      duracao: "Semanas 3 e 4",
      desc: "Gestão de OS com entregas parciais no padrão novo, controle de matéria-prima por cliente com baixas automáticas, geração do documento de entrega em PDF e dashboard com OS abertas, fila por máquina, contas a receber e saldo de matéria-prima. Treinamento do William e da Flávia e go-live com todos os módulos da Fase 1 no ar.",
    },
  ],

  metodologiaDescricao:
    "A Fase 1 é entregue em quatro semanas, divididas em duas etapas de duas semanas. O trabalho começa na semana seguinte à assinatura. No fim da segunda semana você já gera orçamento pelo sistema; no fim da quarta, todo o fluxo do pedido até a entrega está no ar, dentro do prazo de agosto que vocês precisam.",

  entregaveis: [
    {
      titulo: "Motor de orçamento auditável",
      desc: "A Flávia gera o preço da peça em segundos e qualquer pessoa do time consegue conferir a fórmula, do peso ao markup.",
    },
    {
      titulo: "Cadastro de máquinas e moldes",
      desc: "Base sólida para crescer de 3 para 6 máquinas até agosto sem precisar refazer nada.",
    },
    {
      titulo: "Gestão de OS com entregas parciais",
      desc: "Nunca mais perder o controle de quanto já saiu e quanto falta de um pedido grande, com vários controles do cliente e vários vencimentos por entrega.",
    },
    {
      titulo: "Controle de matéria-prima por cliente",
      desc: "O saldo do alumínio que o cliente fornece sempre fechado, com entradas e baixas no sistema, sem retrabalho no Word.",
    },
    {
      titulo: "Documento de entrega gerado pelo sistema",
      desc: "Cada entrega sai com um PDF padronizado: dados bancários, vencimentos, número da OS e controle de material atualizado, com ou sem nota fiscal.",
    },
    {
      titulo: "Dashboard de OS e fila por máquina",
      desc: "Visibilidade real da capacidade para vocês prospectarem clientes novos sabendo exatamente o que cabe na fila.",
    },
    {
      titulo: "Treinamento dos dois usuários",
      desc: "William e Flávia operando o sistema com autonomia desde o go-live.",
    },
    {
      titulo: "30 dias de suporte pós go-live",
      desc: "Incluído no valor do projeto: correção de bugs e ajustes pontuais no que foi entregue, durante o primeiro mês de uso.",
    },
  ],

  investimento: {
    valor: "R$ 18.000",
    descricao:
      "Projeto fechado da Fase 1 do Sistema de Gestão Industrial Will Delta, pago em quatro parcelas mensais de R$ 4.500, com 30 dias de suporte incluídos após o go-live.",
    justificativa:
      "O valor cobre as duas etapas da Fase 1, entregues em quatro semanas: cadastros base, motor de orçamento com geração de PDF, gestão de ordens de serviço com entregas parciais, controle de matéria-prima por cliente, documento de entrega em PDF e dashboard. O trabalho começa na semana seguinte à assinatura, com entrega parcial no fim da segunda semana e go-live no fim da quarta, dentro do prazo de agosto. A entrega acontece nessas quatro semanas, mas o pagamento é diluído em quatro meses, em parcelas de R$ 4.500, para não pesar no caixa. Os 30 dias de suporte após o go-live estão incluídos neste valor.",
    parcelas: [
      {
        percentual: "1ª",
        titulo: "Na assinatura",
        desc: "R$ 4.500 de sinal; o trabalho começa já na semana seguinte.",
      },
      {
        percentual: "2ª",
        titulo: "30 dias depois",
        desc: "R$ 4.500, já com o go-live entregue e o sistema da Fase 1 no ar.",
      },
      {
        percentual: "3ª",
        titulo: "60 dias depois",
        desc: "R$ 4.500, com o sistema em uso na operação.",
      },
      {
        percentual: "4ª",
        titulo: "90 dias depois",
        desc: "R$ 4.500, parcela final do projeto.",
      },
    ],
    mensalidade: {
      titulo: "R$ 300 por mês no primeiro ano, R$ 400 depois",
      texto:
        "A mensalidade só começa a ser cobrada a partir do mês seguinte ao da última parcela do projeto. No primeiro ano de uso ela fica em R$ 300 por mês; a partir do 13º mês passa a R$ 400 por mês. Cobre hospedagem em infraestrutura dedicada, manutenção evolutiva, ajustes pequenos e suporte por WhatsApp em horário comercial. Durante os quatro meses de pagamento da Fase 1, vocês pagam apenas as parcelas; nada além disso.",
    },
  },

  proximosPassos: [
    {
      titulo: "Vocês dão o sinal verde",
      desc: "Um ok por aqui no WhatsApp já basta para a gente preparar o contrato.",
    },
    {
      titulo: "Assinamos e começamos",
      desc: "Contrato assinado, sinal pago e o trabalho começa já na semana seguinte.",
    },
    {
      titulo: "Em duas semanas você já gera orçamento",
      desc: "E em quatro semanas o sistema inteiro da Fase 1 está no ar, dentro do prazo de agosto.",
    },
  ],

  sobre: {
    titulo: "Sobre a Pilarcode",
    texto:
      "A Pilarcode é uma software house focada em sistemas sob medida para operações reais de negócio. Trabalha próximo do cliente, entrega em ciclos curtos e prioriza o que gera resultado antes do que parece bonito. Henrique França é o responsável técnico e o ponto de contato direto ao longo de todo o projeto.",
  },
};
