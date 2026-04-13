export const sucalog = {
  titulo: "Sistema de RH, Folha e Auditoria Trabalhista",
  subtitulo:
    "Plataforma web sob medida que centraliza RH, folha, monitoramento de CCTs e auditoria trabalhista em tempo real para as 17 empresas do Grupo Sucalog.",
  empresa: "Pilarcode Tech",
  cliente: "Grupo Sucalog",
  emissao: "Abril / 2026",
  validade: "30 dias",
  prazo: "10 semanas",
  senha: "sucalog2026",

  stats: [
    { valor: "17", label: "empresas do grupo" },
    { valor: "389", label: "colaboradores CLT" },
    { valor: "R$ 199k", label: "custo de HE/mês" },
    { valor: "127", label: "alertas críticos ativos" },
  ],

  contexto: {
    alertaTitulo: "Fiscalização do MTE em andamento",
    alertaTexto:
      "O grupo passou por fiscalização do Ministério do Trabalho. Os números do fechamento de março mostram a dimensão real do problema e a urgência de agir antes do próximo ciclo.",
    diagnostico: [
      {
        valor: "127",
        label: "alertas críticos no fechamento de março",
        nivel: "alert" as const,
      },
      {
        valor: "74",
        label: "motoristas acima do limite legal de jornada",
        nivel: "alert" as const,
      },
      {
        valor: "1.043",
        label: "violações de interjornada menor que 11h",
        nivel: "warning" as const,
      },
      {
        valor: "R$ 77k",
        label: "custo excedente: HE superou comissão em março",
        nivel: "warning" as const,
      },
    ],
    paragrafos: [
      "O Grupo Sucalog tem 389 colaboradores CLT em 17 empresas: Sucalog Matriz, Scraplog, GDuck, JM Arujá, Sucalog Diadema, Sucalog MG, Sucalog BA, Sucalog ES, Sucalog RJ, Sucalog Bom Jesus e demais CNPJs do grupo. Uma operação com motoristas em rotas interestaduais, operadores de equipamentos em turnos, múltiplos sindicatos e CCTs com vigências e regras diferentes entre si.",
      "Toda essa complexidade passa hoje por planilhas, pelo VR Ponto Mais, pelo Convênia, pelo portal do E-Consignado do MTE, pela API da Flash e pelo sistema Domínio das contabilidades externas. O fechamento mensal envolve cruzar manualmente dados de benefícios de cinco operadoras, calcular comissões de motoristas pela regra do maior valor, corrigir o DSR que o Ponto Mais não calcula corretamente, lançar descontos parcelados rubrica a rubrica, e conferir o extrato em PDF devolvido pela contabilidade. Tudo isso recai sobre uma única gestora de RH que regularmente excede o próprio horário nas semanas de fechamento.",
      "Cada sindicato tem sua CCT com prazos, datas de dissídio e regras de contribuição assistencial específicas. Quando uma convenção é renovada e o prazo de oposição passa despercebido, o colaborador perde o direito. Com 17 empresas e categorias diferentes, esse risco é permanente e invisível nos sistemas atuais.",
      "Dois exemplos reais ilustram bem o problema. A Sucalog BA foi aberta recentemente e a contabilidade não informou o sindicato da categoria. Sem CCT cadastrada, sem saber quais regras seguir, ninguém cobrou na correria. Em paralelo, os menores aprendizes têm reajuste pelo salário mínimo, não pelo dissídio da categoria, uma particularidade que não segue a lógica geral e que passa batida porque depende de alguém lembrar. Esses dois casos não são exceção: são o padrão quando a gestão de CCTs depende de memória e planilha.",
      "O Sucalog RH não automatiza só tarefas repetitivas. Ele substitui a memória institucional que hoje está na cabeça de uma pessoa. Tudo que depende de alguém lembrar, cobrar ou notar na correria passa a ser controlado pelo sistema: regra aplicada, alerta disparado, prazo monitorado.",
    ],
  },

  proposta: {
    titulo: "O que propomos",
    texto1:
      "Propomos o desenvolvimento do Sucalog RH, um sistema web sob medida que centraliza em um único lugar o que hoje está distribuído entre seis ferramentas e dezenas de planilhas. O sistema cobre todas as empresas do grupo, automatiza os cálculos de fechamento, integra diretamente com Flash, Pluxee, Domínio e Sagi via API, monitora automaticamente as CCTs de cada sindicato e entrega à diretoria um painel de auditoria trabalhista em tempo real.",
    texto2:
      "A base técnica parte do Nponto, sistema de ponto eletrônico já desenvolvido pela Pilarcode e em produção, com auditoria CLT, controle de jornada para motoristas e engine anti-fraude. O trabalho é construído em fases sequenciais. Cada fase entrega valor imediato antes de começar a próxima, sem esperar o sistema inteiro estar pronto para começar a operar.",
  },

  integracoes: [
    {
      nome: "VR Ponto Mais → Nponto",
      desc: "Substituído: ponto com auditoria CLT e módulo de jornada do motorista",
      status: "replace" as const,
    },
    {
      nome: "Convênia → Sucalog RH",
      desc: "Substituído: gestão de colaboradores, férias, documentos e comunicados",
      status: "replace" as const,
    },
    {
      nome: "Flash (VA/VR) · API",
      desc: "Mantido: débito automático e relatório de custo por empresa",
      status: "keep" as const,
    },
    {
      nome: "Pluxee (VT) · API",
      desc: "Mantido: comparativo 6% x recarga, sem desconto excedente",
      status: "keep" as const,
    },
    {
      nome: "Domínio (Ricco/Taves)",
      desc: "Mantido: arquivo de importação gerado automaticamente no fechamento",
      status: "keep" as const,
    },
    {
      nome: "Sagi · API",
      desc: "Mantido: lançamentos financeiros enviados automaticamente",
      status: "keep" as const,
    },
    {
      nome: "E-Consignado (MTE)",
      desc: "Mantido: relatório puxado automaticamente, sem acesso manual mensal",
      status: "keep" as const,
    },
    {
      nome: "Gupy · webhook",
      desc: "Mantido: notificação automática pós-aprovação para continuar a admissão",
      status: "keep" as const,
    },
  ],

  fases: [
    {
      numero: "1",
      titulo: "Ponto, Auditoria Trabalhista e CCTs",
      badges: ["Urgente · MTE", "Semanas 1–5"],
      urgente: true,
      descricao:
        "Substituição do Ponto Mais pelo Nponto em todas as empresas do grupo. Ativação do painel de auditoria trabalhista em tempo real e do módulo de monitoramento de CCTs. São os dois pontos com mais urgência considerando a fiscalização em curso.",
      itens: [
        "Migração dos colaboradores e jornadas do Ponto Mais para todas as empresas do grupo",
        "Configuração de perfis por categoria: motorista carreteiro, motorista op. guindauto, operador, administrativo, aprendiz, autônomo",
        "Módulo Jornada do Motorista: limite 8h/dia, máx. 2h extras, interjornada 11h contínuas (pós-ADI 5322), pausa obrigatória 30min a cada 6h",
        "Alerta em tempo real para gestor e RH quando motorista se aproxima do limite de jornada ou viola interjornada",
        "Painel de Auditoria Trabalhista: alertas críticos, ranking de HE, violações de interjornada, dias consecutivos sem folga, visão por unidade, por gestor e por colaborador",
        "Relatório exportável para defesa em fiscalização do MTE",
        "Correção automática do DSR, eliminando o ajuste manual atual",
        "Módulo de CCTs: cadastro de convenções coletivas por empresa e sindicato, com datas de vigência, dissídio e prazo de oposição",
        "Monitor automático de CCTs: alerta antecipado de vencimentos e prazos de oposição para contribuições assistenciais",
        "Parâmetros por vínculo: regras específicas por categoria aplicadas automaticamente, incluindo particularidades como reajuste de aprendiz pelo salário mínimo",
        "Alerta automático quando uma empresa do grupo não tem sindicato cadastrado",
      ],
      incluida: true,
    },
    {
      numero: "2",
      titulo: "Fechamento de Folha Automatizado",
      badges: ["Semanas 4–10"],
      urgente: false,
      descricao:
        "Automação de todos os cálculos manuais do ciclo de fechamento, com geração automática do layout para o Domínio e exportação para o Sagi, eliminando as planilhas intermediárias e o trabalho extra da Gisele a cada mês.",
      itens: [
        "Comissão de motoristas: cálculo automático pela regra do maior valor entre HE e Comissão, por empresa. Elimina as planilhas PLANILHA_COMISSÃO e 424_SUCALOG_MATRIZ",
        "Vale Transporte: comparativo 6% x recarga, proporcional a ausências, sem desconto excedente",
        "Vale Alimentação: elegibilidade por admissão (após dia 5) e faltas injustificadas, exclusão restrita ao mês de ocorrência",
        "Descontos parcelados: Vale (0234), Despesas Diversas (0268), Moradia (0273), Multas de Trânsito, com início, término e relatório mensal para a contabilidade",
        "E-Consignado: integração automática com portal MTE, eliminando o acesso manual mensal no dia 21",
        "PTS: lançamento automático no mês de aniversário (5% no 2º ano, 8% nos seguintes sobre o piso da CCT do motorista)",
        "Contribuição sindical: 6% na Matriz no 1º mês, 2% nas unidades do ES nos 4 primeiros meses, calculado por data de admissão e parâmetros de CCT",
        "Periculosidade proporcional, Auxílio Filho Excepcional, Bolsa Auxílio e Pensão Alimentícia, todos calculados por rubrica com regras configuradas",
        "Geração automática do layout para o Domínio (Ricco/Taves) no fechamento de cada empresa",
        "Exportação automática dos lançamentos para o Sagi com descritivo de operação e referência de NF",
        "Conferência automatizada: comparativo entre os dados do sistema e o extrato em PDF devolvido pela contabilidade, apontando divergências sem conferência manual",
      ],
      incluida: true,
    },
    {
      numero: "3",
      titulo: "Benefícios: Flash, Pluxee e Operadoras de Saúde",
      badges: ["Semanas 11–16"],
      urgente: false,
      descricao:
        "Integração direta com as operadoras de benefícios, eliminando o controle manual da planilha CUSTO_2026 e o lançamento manual de descontos na folha.",
      itens: [
        "Flash (VA/VR): débito automático, controle de elegibilidade por empresa e colaborador, relatório custo total Empresa x Colaborador por grupo",
        "Pluxee (VT): integração com comparativo 6% x valor de recarga",
        "EXCard, Amil, Notre Dame, Porto Seguro Odonto, Bradesco Odonto: custo consolidado por empresa, controle de inclusões e movimentações mensais",
        "Na admissão: preenchimento automático dos descontos de folha ao registrar benefícios (VT, saúde, filho excepcional)",
        "Controle de refeições adicionais de motoristas com saldo acessível pelo colaborador",
      ],
      incluida: false,
    },
    {
      numero: "4",
      titulo: "Portal do Colaborador, Automações e Documentos",
      badges: ["Semanas 14–19"],
      urgente: false,
      descricao:
        "Portal de acesso para colaboradores, automações de fluxo operacional entre departamentos e geração de documentos com assinatura digital.",
      itens: [
        "Portal do colaborador: holerite digital, saldo de benefícios, férias, documentos assinados e solicitações ao RH, com notificação por e-mail e push",
        "Fluxo de férias: solicitação pelo colaborador, aprovação pelo gestor, cronograma consolidado para o RH",
        "Automações por evento: admissão, desligamento, vencimento de experiência, férias e afastamento. Destinatários configuráveis por empresa e departamento",
        "Onboarding automatizado: inclusão nos benefícios com alerta de pendências por colaborador",
        "Notificação para Isabelly após aprovação no Gupy para continuar a admissão",
        "Fluxo de alteração salarial: solicitação pelo gestor, aprovação da diretoria, registro automático",
        "Geração de documentos com assinatura digital: termos de desconto, confissão de dívida, contratos de treinamento, com dados puxados do cadastro",
        "Comunicação automática para portaria, TI, Almoxarifado, Segurança do Trabalho e refeitório em admissões e rescisões",
        "Alerta Cátia para colaboradores em aviso prévio com documentação pendente",
      ],
      incluida: false,
    },
    {
      numero: "5",
      titulo: "Saúde Ocupacional, Documentação e Gestão",
      badges: ["Semanas 17–22"],
      urgente: false,
      descricao:
        "Controle de ASO, documentação dos colaboradores, processos trabalhistas e gestão de contratos terceiros.",
      itens: [
        "Controle de ASO: admissional, periódico, demissional, mudança de função, com alertas de vencimento por unidade e função",
        "Linha do tempo do colaborador: histórico completo de movimentações, promoções, salários e documentos",
        "Repositório de documentos acessível pelo portal com assinatura digital",
        "Controle de EPI por colaborador e função",
        "Gestão de contratos terceiros: renovação, pagamentos mensais, alertas de vencimento",
        "Controle de documentação (PCMSO, PGR, Laudos) com alertas de renovação",
        "Controle de Processos Trabalhistas: quantidade, tempo de finalização e % por headcount por unidade",
        "Checklist operacional: admissão, demissão, afastamentos com etapas e responsáveis",
      ],
      incluida: false,
    },
  ],

  expansaoFutura: [
    "PDI e Avaliação de Desempenho",
    "Cargos e Salários",
    "Gestão de Afastamentos (LIMBO/CCT)",
    "Integração Gupy: pré-cadastro automático",
    "Comunicados Internos com vídeo",
    "Controle de MEI e Prestadores",
    "Propriedade Rural (José Maria Gomes)",
  ],

  entregaveis: [
    {
      titulo: "Nponto: ponto eletrônico com auditoria trabalhista",
      desc: "Substituição do Ponto Mais em todas as empresas do grupo, com auditoria CLT automática, módulo de jornada do motorista (Lei 13.103/2015), correção automática de DSR e relatórios prontos para defesa em fiscalização do MTE.",
    },
    {
      titulo: "Painel de auditoria trabalhista em tempo real",
      desc: "Alertas críticos, ranking de HE por colaborador, violações de interjornada, dias consecutivos sem folga e custo por unidade. Atualizado automaticamente a cada registro de ponto, com visão por empresa e por gestor.",
    },
    {
      titulo: "Módulo de CCTs e parâmetros por sindicato",
      desc: "Cadastro centralizado de convenções por empresa e categoria, monitor automático de vencimentos e prazos de oposição, parâmetros de CCT aplicados automaticamente nos cálculos, incluindo particularidades como o reajuste de aprendiz pelo salário mínimo.",
    },
    {
      titulo: "Engine de fechamento de folha automatizado",
      desc: "Comissão pela regra do maior valor, VT, VA, PTS, contribuição sindical, periculosidade, descontos parcelados e E-Consignado, todos calculados automaticamente. Layout para o Domínio e lançamentos para o Sagi gerados no fechamento sem digitação.",
    },
    {
      titulo: "Conferência automatizada da folha",
      desc: "Comparativo automático entre os dados do sistema e o extrato em PDF devolvido pela contabilidade, apontando divergências sem que a Gisele precise conferir rubrica por rubrica.",
    },
  ],

  investimento: {
    valor: "R$ 38.000",
    nota: "Entrega em até 10 semanas a partir da assinatura. Cobre as Fases 1 e 2.",
    pagamento: [
      { pct: "30%", etapa: "Assinatura do contrato", valor: "R$ 11.400" },
      { pct: "40%", etapa: "Entrega da Fase 1", valor: "R$ 15.200" },
      { pct: "30%", etapa: "Entrega da Fase 2", valor: "R$ 11.400" },
    ],
    fasesSeguintes: [
      {
        nome: "Fase 3",
        titulo: "Benefícios e Integrações",
        valor: "≈ R$ 14.000",
        prazo: "5 semanas",
      },
      {
        nome: "Fase 4",
        titulo: "Portal e Automações",
        valor: "≈ R$ 12.000",
        prazo: "5 semanas",
      },
      {
        nome: "Fase 5",
        titulo: "Saúde Ocupacional e Documentação",
        valor: "≈ R$ 10.000",
        prazo: "4 semanas",
      },
    ],
    mensal: {
      valor: "R$ 1.900",
      nota: "Inclui hospedagem, manutenção, atualizações e suporte. Inicia após aceite da Fase 2 e cobre todas as empresas do grupo incorporadas ao sistema.",
    },
  },

  proximosPassos: [
    "Vocês nos dão o sinal verde e assinamos o contrato. O desenvolvimento começa na semana seguinte.",
    "Realizamos uma sessão de kick-off com a Gisele e a equipe de RH para mapear as CCTs de cada empresa, as particularidades de cada sindicato e as prioridades do primeiro ciclo de fechamento.",
    "Em até 5 semanas a Fase 1 já está no ar. Em até 10 semanas a Fase 2 entra em produção e a Gisele fecha o primeiro mês sem planilha. Esse é o marco que muda a operação com dados reais, antes do próximo fechamento e antes de qualquer nova visita do MTE.",
  ],
};
