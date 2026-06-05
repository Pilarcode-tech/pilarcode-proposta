export const acosvital = {
  titulo: "Dashboard Açosvital",
  subtitulo:
    "Painel diário de indicadores de qualidade que se atualiza sozinho a partir de uma planilha simples. Sem retrabalho, com cara de ferramenta corporativa.",
  empresa: "Pilarcode",
  cliente: "Açosvital",
  clienteCurto: "Açosvital",
  emissao: "Junho / 2026",
  validade: "30 dias",
  prazo: "a partir de 2,5 semanas após a aprovação e início formal",
  senha: "acosvital2026",

  meta: [
    { label: "Preparado para", valor: "Açosvital" },
    { label: "Divisão", valor: "Pilarcode" },
    { label: "Data", valor: "Junho 2026" },
    { label: "Prazo de Entrega", valor: "a partir de 2,5 semanas" },
  ],

  contexto: {
    paragrafos: [
      "Você criou uma rotina de medição que muitos gestores adiam: acompanhar cinco indicadores de qualidade todo dia e apresentar o resultado no fechamento. O dado já existe e já conta uma história clara sobre a operação da Açosvital. O gargalo é o caminho até ele.",
      "Montar o fechamento na mão todo dia não se sustenta por um ano, e qualquer erro de digitação no caminho compromete a apresentação. Você precisa de um painel que se atualize sozinho quando você alimenta a base, com cara de ferramenta corporativa.",
      "Esta proposta é o primeiro passo: colocar o painel diário no ar, funcionando, pra você já parar de retrabalhar agora.",
    ],
  },

  proposta: {
    texto:
      "O Dashboard Açosvital é um painel diário de indicadores: um painel web conectado a uma planilha Google simples. Você lança os números do dia, o painel recalcula automaticamente os cinco cards com a evolução percentual em relação ao dia anterior e os gráficos comparativos. Acesso por link, na identidade visual da Açosvital. Você abre na reunião ou tira o print, sem nenhum trabalho manual de montagem.",
    nota: {
      titulo: "O painel cobre o dia a dia",
      texto:
        "Esta proposta entrega o painel diário no ar, funcionando. Quando fizer sentido, evoluímos para o fechamento mensal automático, com o mês inteiro consolidado pra reunião do dia 1º, e a integração com SharePoint, num módulo adicional orçado à parte. Você começa enxuto, valida o valor, e cresce a ferramenta no seu tempo.",
    },
  },

  fases: [
    {
      numero: "1",
      titulo: "Modelagem da base e regras",
      duracao: "3 a 4 dias",
      desc: "Definimos juntos a estrutura da planilha (uma linha por dia, colunas pelos cinco indicadores) e travamos as regras de cálculo, principalmente como a evolução percentual é apurada e como o RNC é tratado quando não há registro. Isso elimina ambiguidade antes do código.",
    },
    {
      numero: "2",
      titulo: "Construção e entrega",
      duracao: "1,5 a 2 semanas",
      desc: "Desenvolvemos o painel fiel ao layout que você já validou, com acabamento profissional: tema escuro sóbrio, tipografia corporativa, cards e gráficos reagindo à base. Conectamos à planilha definitiva, testamos com seus dados reais desde o dia 29, publicamos em produção e te mostramos o uso, que é simples: alimentar a planilha e abrir o link.",
    },
  ],

  metodologiaDescricao:
    "Duas fases curtas e diretas. Primeiro travamos a base e as regras de cálculo, sem ambiguidade. Depois construímos o painel fiel ao layout que você já validou, conectamos à planilha definitiva e publicamos em produção, testado com seus dados reais.",

  entregaveis: [
    {
      titulo: "Painel diário atualizado automaticamente",
      desc: "Você muda a planilha, o dashboard reflete na hora, sem nenhum retrabalho manual.",
    },
    {
      titulo: "Os cinco indicadores com evolução percentual",
      desc: "Exatamente como você apresenta hoje, calculados de forma confiável em relação ao dia anterior.",
    },
    {
      titulo: "Base única e simples de alimentar",
      desc: "Uma planilha, uma linha por dia, sem conhecimento técnico.",
    },
    {
      titulo: "Identidade visual corporativa",
      desc: "Cara de ferramenta da Açosvital: tema escuro sóbrio e tipografia corporativa.",
    },
    {
      titulo: "Hospedagem configurada e acesso por link",
      desc: "Abre em qualquer dispositivo na reunião, é só compartilhar o link.",
    },
  ],

  investimento: {
    valor: "R$ 6.500",
    descricao:
      "Valor total do painel diário. Hospedagem e manutenção do ambiente entram à parte, a partir do segundo mês.",
    justificativa:
      "O valor cobre as duas fases: modelagem da base e das regras de cálculo, e a construção e entrega do painel conectado à planilha, publicado em produção e testado com seus dados reais. O prazo é a partir de 2,5 semanas após a aprovação e o início formal.",
    opcoes: [
      {
        rotulo: "Pagamento",
        titulo: "À vista",
        destaque: "R$ 6.500",
        parcelas: [
          { titulo: "50% na assinatura", desc: "R$ 3.250 de sinal; o trabalho começa na sequência." },
          { titulo: "50% na entrega", desc: "R$ 3.250 com o painel publicado em produção." },
        ],
      },
    ],
    mensalidade: {
      titulo: "Hospedagem e manutenção: R$ 180/mês a partir do segundo mês",
      texto:
        "O primeiro mês acompanha a entrega, sem custo adicional. A partir do segundo mês, R$ 180 por mês cobrem a hospedagem do ambiente e a manutenção, mantendo o painel no ar e estável.",
    },
    evolucao: {
      titulo: "O passo seguinte, quando você quiser",
      texto:
        "Este painel cobre o dia a dia. Quando fizer sentido, evoluímos para o fechamento mensal automático (o mês inteiro consolidado pra reunião do dia 1º) e a integração com SharePoint, num módulo adicional. Você começa enxuto, valida o valor, e cresce a ferramenta no seu tempo.",
    },
  },

  proximosPassos: [
    {
      titulo: "Você nos dá o sinal verde",
      desc: "Por aqui mesmo já basta para a gente preparar o início.",
    },
    {
      titulo: "Agendamos um kick-off curto",
      desc: "Uma chamada rápida pra fechar a estrutura da planilha.",
    },
    {
      titulo: "Começamos na semana seguinte",
      desc: "Já com seus dados reais desde o dia 29.",
    },
  ],

  sobre: {
    titulo: "Sobre a Pilarcode",
    texto:
      "A Pilarcode é uma software house focada em construir sistemas e produtos digitais que resolvem problemas reais de negócio, do MVP ao sistema em produção. Trabalhamos com empresas que precisam de um time de tecnologia confiável sem a complexidade de montar um departamento interno. Você foca no negócio, a gente cuida do produto. Nosso modelo é direto: você fala com quem está desenvolvendo, acompanha o progresso toda semana e recebe o que foi acordado, no prazo. Henrique França é o founder e o ponto de contato direto ao longo de todo o projeto.",
  },
};
