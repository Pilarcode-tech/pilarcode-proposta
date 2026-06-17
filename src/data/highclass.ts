export const highclass = {
  titulo: "High Class",
  subtitulo:
    "Proposta de desenvolvimento do Sistema de Gestão da High Class: cadastro online de passageiros, indicação por motorista, orçamento, pagamento e contrato digital, ponta a ponta. Fase 1.",
  empresa: "Pilarcode Tech",
  cliente: "High Class",
  clienteCurto: "High Class",
  emissao: "Junho / 2026",
  validade: "30 dias",
  prazo: "6 a 8 semanas a partir da assinatura",
  senha: "highclass2026",

  meta: [
    { label: "Preparado para", valor: "Equipe High Class Transportes" },
    { label: "Divisão", valor: "Pilarcode" },
    { label: "Data", valor: "Junho 2026" },
    {
      label: "Prazo de Entrega",
      valor: "6 a 8 semanas a partir da assinatura",
    },
  ],

  contexto: {
    paragrafos: [
      "A High Class movimenta alunos para escolas, faculdades, empresas e passeios todos os dias, e hoje tudo isso vive numa planilha. Cada novo passageiro depende de cadastro presencial, cada motorista carrega na cabeça quem indicou quem, e cada orçamento sai no improviso. Funciona, mas não escala. E o que não escala em transporte significa rota mal aproveitada, van saindo com lugar vazio e dinheiro ficando no caminho.",
      "Olhando a planilha que vocês usam, dá pra ver que a operação já tem uma estrutura clara: nome, CPF, endereço, faculdade, período, status e o motorista responsável por cada aluno. O problema não é falta de organização, é o formato. CPF, endereço completo, celular e email de centenas de estudantes circulando num arquivo compartilhado é um risco real de LGPD, e cada nova linha depende de alguém digitar à mão.",
      "O ponto mais sensível é o aluno subsidiado. Para conseguir o desconto, ele se cadastra presencialmente na associação em horário marcado, e depois de novo na High Class. São duas filas, dois deslocamentos, e um horário que muitas vezes não cabe na rotina de quem estuda. Cada passo desses é um aluno que pode desistir antes de embarcar. Vocês já enxergaram a saída: centralizar o cadastro na High Class e entregar para a associação só o que ela precisa, os alunos com direito a subsídio.",
    ],
  },

  proposta: {
    texto:
      "Um sistema próprio da High Class para gerir cadastro, indicação, orçamento, pagamento e contrato, ponta a ponta e 100% online. O motorista compartilha um link, o cliente preenche, escolhe a rota, recebe o orçamento, paga e assina o contrato digital sem sair de casa, e tudo já fica amarrado ao motorista que indicou, com a tabela de preço certa. Ao final desta primeira fase, vocês param de depender de planilha para crescer, os dados dos alunos ficam protegidos com acesso por perfil, e cada novo passageiro entra de forma organizada e rastreável.",
    nota: {
      titulo: "Esta proposta cobre a primeira fase",
      texto:
        "O controle de embarque (lista de quem subiu, quem faltou) e o rastreamento do veículo para o passageiro ficam como fases futuras, com escopo e valor próprios, depois que este núcleo estiver rodando. Esta proposta cobre exclusivamente o núcleo descrito abaixo.",
    },
  },

  fases: [
    {
      numero: "1",
      titulo: "Imersão e desenho",
      duracao: "1 semana",
      desc: "Mapeamos juntos os fluxos reais: como nasce uma indicação, como o orçamento é montado hoje, quais os tipos de rota e as faixas de preço por motorista. Aproveitamos a planilha atual como ponto de partida para não perder nenhum campo que vocês já usam. Saímos daqui com o desenho das telas e a regra de negócio fechada antes de escrever código.",
    },
    {
      numero: "2",
      titulo: "Construção do núcleo",
      duracao: "4 a 5 semanas",
      desc: "Desenvolvemos os cadastros de passageiro, motorista, rota e veículo, o motor de indicação por link, o orçamento, o pagamento online e o contrato digital. Vocês acompanham o avanço toda semana e validam cada parte funcionando.",
    },
    {
      numero: "3",
      titulo: "Subsídio e entrega",
      duracao: "1 a 2 semanas",
      desc: "Implementamos a ponte com a associação (exportação por planilha ou acesso restrito só aos alunos subsidiados), migramos os dados da planilha atual para o sistema, fazemos os ajustes finais, colocamos no ar e treinamos a equipe.",
    },
  ],

  metodologiaDescricao:
    "O projeto vai da imersão à entrega em três fases, começando na semana seguinte à assinatura. Primeiro desenhamos o fluxo a partir da planilha que vocês já usam, depois construímos o núcleo do sistema com validação semanal, e por fim ligamos a ponte com a associação, migramos os dados e colocamos no ar.",

  entregaveis: [
    {
      titulo: "Cadastro online de passageiros via link",
      desc: "Com os campos que vocês já usam (nome, CPF, endereço, bairro, CEP, faculdade, período, celular, email), preenchidos pelo próprio aluno, de casa, sem fila e sem horário marcado.",
    },
    {
      titulo: "Faculdade e período como dados estruturados",
      desc: "Para filtrar alunos por instituição e turno, base direta para montar rota e aplicar o subsídio.",
    },
    {
      titulo: "Painel de motoristas, rotas e veículos",
      desc: "Você enxerga quem dirige o quê e por onde, num lugar só.",
    },
    {
      titulo: "Indicação atrelada ao motorista",
      desc: 'Cada link sabe quem indicou, com a tabela de preço daquele motorista, exatamente como a coluna "Motorista" já registra hoje.',
    },
    {
      titulo: "Orçamento + pagamento online",
      desc: "O cliente fecha sozinho, e o dinheiro entra rastreado.",
    },
    {
      titulo: "Contrato digital com assinatura",
      desc: "Fim do contrato em papel; tudo assinado e arquivado no sistema.",
    },
    {
      titulo: "Controle de status e onboarding",
      desc: 'O equivalente às colunas "Status" e "Incluiu no Grupo", agora como etapa registrada no fluxo do passageiro.',
    },
    {
      titulo: "Ponte com a associação",
      desc: "Só os alunos com direito a subsídio chegam até ela, sem expor o resto da base.",
    },
    {
      titulo: "Dados protegidos por perfil de acesso",
      desc: "CPF, endereço e contato deixam de circular em planilha aberta e passam a ter acesso controlado, alinhado à LGPD.",
    },
  ],

  investimento: {
    valor: "R$ 18.000",
    descricao:
      "Setup do projeto, da Fase 1 à Fase 3, pago em 2 parcelas de R$ 9.000: 50% na assinatura e 50% na entrega.",
    justificativa:
      "O valor cobre as três fases do projeto: a imersão e o desenho a partir da planilha que vocês já usam, a construção do núcleo (cadastros de passageiro, motorista, rota e veículo, indicação por link, orçamento, pagamento online e contrato digital) e a entrega, com a ponte da associação, a migração dos dados da planilha atual, os ajustes finais, o go-live e o treinamento da equipe. O trabalho começa na semana seguinte à assinatura. O controle de embarque e o rastreamento do veículo ficam como fases futuras, orçadas à parte depois que este núcleo estiver rodando.",
    parcelas: [
      {
        percentual: "50%",
        titulo: "Na assinatura",
        desc: "R$ 9.000 de entrada; o trabalho começa já na semana seguinte.",
      },
      {
        percentual: "50%",
        titulo: "Na entrega",
        desc: "R$ 9.000, com o sistema no ar e a equipe treinada.",
      },
    ],
    mensalidade: {
      titulo: "R$ 600 por mês, a partir da entrega",
      texto:
        "A mensalidade só começa a ser cobrada após a entrega do sistema. Cobre hospedagem, manutenção, correção de bugs e suporte direto comigo. Não inclui novas funcionalidades, que entram como uma fase seguinte orçada à parte. Durante o período de pagamento do setup, vocês pagam apenas as parcelas do projeto; nada além disso.",
    },
  },

  proximosPassos: [
    {
      titulo: "Você me dá o sinal verde",
      desc: "Um ok por aqui já basta para a gente preparar o contrato.",
    },
    {
      titulo: "Agendamos a chamada de imersão",
      desc: "Marcamos a conversa para mapear os fluxos e o desenho das telas.",
    },
    {
      titulo: "Começamos na semana seguinte",
      desc: "Contrato assinado, entrada paga e o trabalho começa já na semana seguinte.",
    },
  ],

  sobre: {
    titulo: "Sobre a Pilarcode",
    texto:
      "A Pilarcode é uma software house focada em construir sistemas e produtos digitais que resolvem problemas reais de negócio, do MVP ao sistema em produção. Trabalhamos com empresas que precisam de um time de tecnologia confiável, sem a complexidade de montar um departamento interno. Você foca no negócio; a gente cuida do produto. Você fala direto com quem está desenvolvendo, acompanha o progresso toda semana e recebe o que foi acordado, no prazo. Henrique França é o responsável técnico e o ponto de contato direto ao longo de todo o projeto.",
  },
};
