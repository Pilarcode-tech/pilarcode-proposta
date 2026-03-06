export const proposta = {
  titulo: "Sistema de Cotação Automática de Fretes",
  subtitulo:
    "Plataforma web corporativa para automação de cotações de frete com motor de cálculo inteligente, integração à base de dados e auditoria completa de operações.",
  empresa: "Pilarcode Tech",
  cliente: "Prati-Donaduzzi",
  emissao: "Março / 2026",
  validade: "30 dias",
  prazo: "10 semanas",
  senha: "prati2026",
  investimento: "R$ 45.000,00",
  manutencao: "R$ 1.500",

  objetivo: {
    texto1:
      "Desenvolver um sistema web corporativo com autenticação e controle de acesso, capaz de realizar cotações automáticas de frete com base nas tabelas contratuais fornecidas pelas transportadoras.",
    texto2:
      "O sistema eliminará a necessidade de envio manual de cotações, garantindo padronização, agilidade e redução de erros operacionais no processo logístico.",
  },

  escopo: [
    {
      numero: "2.1",
      titulo: "Autenticação e Controle de Acesso",
      itens: [
        "Login com autenticação segura e recuperação de senha",
        "Perfis de acesso: Administrador e Operador",
        "Registro de logs de acesso por usuário",
      ],
    },
    {
      numero: "2.2",
      titulo: "Gestão de Transportadoras",
      itens: [
        "Cadastro, edição e inativação de transportadoras",
        "Parametrizações específicas por transportadora",
      ],
    },
    {
      numero: "2.3",
      titulo: "Importação de Tabelas Contratuais",
      itens: [
        "Upload via planilha padrão (xlsx/csv)",
        "Versionamento por vigência contratual com histórico de versões",
        "Validação automática de estrutura no momento do upload",
      ],
    },
    {
      numero: "2.4",
      titulo: "Motor de Cálculo de Frete",
      itens: [
        "Comparação entre peso real e peso cubado",
        "Faixas de peso e regras regionais por transportadora",
        "Aplicação automática de adicionais: GRIS, pedágio, taxas fixas",
        "Detalhamento completo da composição do valor final",
        "Comparativo simultâneo entre transportadoras",
      ],
    },
    {
      numero: "2.5",
      titulo: "Integração com Banco de Dados do Cliente",
      itens: [
        "Integração segura via credenciais fornecidas pelo cliente",
        "Leitura dos dados necessários à cotação (somente consulta, sem escrita)",
        "Definição conjunta do escopo de dados antes do início do desenvolvimento",
      ],
    },
    {
      numero: "2.6",
      titulo: "Auditoria",
      itens: [
        "Registro de todas as importações de tabelas",
        "Histórico de simulações de cotação realizadas",
        "Log de alterações por usuário e data",
      ],
    },
  ],

  foraDoEscopo:
    "Aplicativo mobile, integrações com ERPs externos (SAP, TOTVS), dashboards de BI avançados e envio automático de e-mails/notificações. Podem ser incluídos mediante proposta adicional.",

  tecnologias: [
    { camada: "Frontend", tecnologia: "React + Next.js" },
    { camada: "Backend", tecnologia: "Nest.js (Node.js)" },
    { camada: "Banco de Dados", tecnologia: "PostgreSQL (AWS RDS)" },
    { camada: "Hospedagem", tecnologia: "AWS — ECS Fargate, RDS, S3" },
    { camada: "Monitoramento", tecnologia: "AWS CloudWatch" },
    { camada: "Segurança", tecnologia: "AWS WAF + Load Balancer" },
  ],

  custosAWS: [
    { servico: "RDS PostgreSQL", estimativa: "R$ 900 – R$ 1.600" },
    { servico: "ECS Fargate", estimativa: "R$ 800 – R$ 1.500" },
    { servico: "Load Balancer", estimativa: "R$ 150 – R$ 300" },
    { servico: "S3 + Logs + Backup", estimativa: "R$ 400 – R$ 1.200" },
  ],
  custosAWSTotal: "R$ 2.350 – R$ 4.900",

  cronograma: [
    {
      fase: "Kick-off e Planejamento",
      desc: "Levantamento de requisitos, definição de escopo detalhado e alinhamento de dados",
      prazo: "1 semana",
    },
    {
      fase: "Desenvolvimento Core",
      desc: "Autenticação, gestão de transportadoras, importação de tabelas e motor de cálculo",
      prazo: "5 semanas",
    },
    {
      fase: "Integrações e Auditoria",
      desc: "Integração com banco do cliente, módulo de auditoria e ajustes finais",
      prazo: "2 semanas",
    },
    {
      fase: "Homologação",
      desc: "Ambiente de homologação disponibilizado ao cliente para validação e correções",
      prazo: "2 semanas",
    },
    {
      fase: "Go-live",
      desc: "Deploy em produção e acompanhamento pós-lançamento — incluso na garantia",
      prazo: "incluso",
    },
  ],

  pagamento: [
    { pct: "50%", etapa: "Assinatura do contrato", valor: "R$ 22.500" },
    { pct: "50%", etapa: "Entrega do projeto", valor: "R$ 22.500" },
  ],

  responsabilidades: [
    "Contratação e pagamento direto da infraestrutura AWS",
    "Disponibilização de acessos e credenciais ao banco de dados",
    "Validação e aprovação das regras de cálculo de frete",
    "Definição de usuários, perfis e permissões internas",
    "Disponibilidade para reuniões de alinhamento e homologação",
    "Fornecimento das planilhas contratuais no formato acordado",
  ],
};
