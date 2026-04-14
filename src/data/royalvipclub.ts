export const royalvipclub = {
  titulo: "Royal Vip Club",
  subtitulo:
    "Proposta de desenvolvimento frontend responsivo (mobile + desktop) do web app de gamificação e fidelização para a plataforma Royal Vip Club.",
  empresa: "Pilarcode Tech",
  cliente: "Mainstream Consultoria de Esportes Eletrônicos Ltda",
  clienteCurto: "Mainstream",
  emissao: "Abril / 2026",
  validade: "30 dias",
  prazo: "5 semanas",
  senha: "royalvip2026",

  meta: [
    { label: "Preparado para", valor: "Mainstream Consultoria de Esportes Eletrônicos" },
    { label: "Divisão", valor: "Pilarcode" },
    { label: "Data", valor: "Abril 2026" },
    { label: "Prazo de Entrega", valor: "5 semanas" },
  ],

  contexto: {
    paragrafos: [
      'O Royal Vip Club já tem as bases certas: o backend está construído e o design do produto está completo no Figma, com 12 módulos detalhados, fluxogramas de navegação e uma visão clara de como a gamificação deve funcionar na ponta. O que falta é a camada que o usuário realmente vê e toca.',
      'A diferença entre um produto que engaja e um que é abandonado na primeira visita está na qualidade da interface. Um motor de gamificação potente no backend perde o impacto se a tela de abertura de Caixa VIP não gera aquela expectativa, se o álbum de figurinhas não dá vontade de colecionar, se o ranking do torneio não transmite competição. A experiência visual é o que transforma mecânica em emoção.',
      'A Mainstream precisa de um desenvolvedor frontend que pegue o Figma como referência, conecte com o backend existente e entregue uma interface pixel-perfect, fluida e que faça jus à ambição do produto, tanto na versão mobile quanto na desktop.',
    ],
  },

  proposta: {
    texto:
      "Desenvolver toda a camada frontend do Royal Vip Club como um web app responsivo (mobile + desktop), fiel ao design aprovado no Figma, com todos os 13 módulos implementados em ambas as versões (incluindo sistema de avatar 2D animado com customização), integração com as APIs do backend existente e experiência de usuário otimizada para engajamento em qualquer tela. Ao final, a Mainstream terá o frontend publicado e conectado ao backend, pronto para receber os primeiros usuários.",
    nota: {
      titulo: "Escopo deste projeto",
      texto:
        "Esta proposta cobre exclusivamente o desenvolvimento frontend (interface mobile e desktop, componentização, responsividade, animações, integração com APIs). O backend, banco de dados e infraestrutura de servidor são de responsabilidade da Mainstream e já estão construídos. O design desktop será fornecido pela Mainstream no Figma antes do início de cada fase.",
    },
  },

  modulos: [
    {
      titulo: "Cadastro e Onboarding",
      desc: "Telas de registro, login, validação visual e fluxo de boas-vindas com integração à API de autenticação.",
      complexidade: "standard" as const,
    },
    {
      titulo: "Home (Dashboard)",
      desc: "Dashboard principal com banners dinâmicos, atalhos para módulos, notificações e modais promocionais.",
      complexidade: "medium" as const,
    },
    {
      titulo: "Clube VIP / Benefícios VIP",
      desc: "Interface de membros com visualização de níveis, benefícios por tier, código de convite e telas de promoções.",
      complexidade: "high" as const,
    },
    {
      titulo: "Torneio da Semana",
      desc: "Telas de ranking com atualização em tempo real, seleção de torneios, animações de resultado e prêmios Top 10.",
      complexidade: "high" as const,
    },
    {
      titulo: "Mundo dos Cassinos",
      desc: "Listagem de cassinos parceiros, ranking global e de amigos, telas de seleção e redirecionamento com pontuação visual.",
      complexidade: "high" as const,
    },
    {
      titulo: "Loja VIP",
      desc: "Interface de e-commerce interno: catálogo, cards de produto, fluxo de compra com moeda virtual e histórico.",
      complexidade: "medium" as const,
    },
    {
      titulo: "Álbum de Figurinhas",
      desc: "Interface visual do álbum com barra de progresso, grid de figurinhas, animação de revelação e tela de troca.",
      complexidade: "high" as const,
    },
    {
      titulo: "Caixa VIP",
      desc: "Tela de abertura de loot box com animação visual de revelação, itens colecionáveis e resgate de prêmios.",
      complexidade: "high" as const,
    },
    {
      titulo: "Social (Feed)",
      desc: "Feed de atividades, cards de interação, modais de conteúdo e componentes de engajamento social.",
      complexidade: "medium" as const,
    },
    {
      titulo: "Profile",
      desc: "Tela de perfil com estatísticas visuais, histórico, configurações e modal de edição de dados.",
      complexidade: "standard" as const,
    },
    {
      titulo: "Recompensa / Sorteio",
      desc: "Interface de sorteios periódicos com mecânica visual de participação e animação de resultado.",
      complexidade: "medium" as const,
    },
    {
      titulo: "Elos (Ranking / Níveis)",
      desc: "Visualização do sistema de progressão por elos com indicadores visuais de subida/descida e benefícios.",
      complexidade: "high" as const,
    },
  ],

  moduloDestaque: {
    titulo: "Avatar 2D Animado + Customização",
    desc: "Sistema de avatar animado com idle animation (respiração, piscada), troca de roupas, acessórios e itens cosméticos. Renderização em canvas/sprite sheet com composição de layers (corpo, roupa, acessório, cabelo). Motor de animação para transições e estados do personagem.",
    complexidade: "muito-alto" as const,
  },

  fases: [
    {
      numero: "1",
      titulo: "Setup, Design System e Navegação",
      duracao: "Semana 1",
      desc: "Configuração do projeto frontend, criação do design system responsivo (tokens, componentes base, breakpoints mobile/desktop), telas de registro e login com integração à API de autenticação, e toda a estrutura de navegação entre módulos.",
    },
    {
      numero: "2",
      titulo: "Home, Perfil e Clube VIP",
      duracao: "Semana 2",
      desc: "Dashboard principal com banners dinâmicos e modais promocionais, perfil do usuário com estatísticas, e interface completa do Clube VIP com visualização de níveis e benefícios por tier. Versões mobile e desktop de cada tela.",
    },
    {
      numero: "3",
      titulo: "Gamificação: Elos, Torneios, Caixa VIP e Álbum",
      duracao: "Semana 3",
      desc: "Módulos de gamificação com maior densidade visual: elos com progressão, torneios com ranking em tempo real, Caixa VIP com animação de abertura, e álbum de figurinhas com troca entre usuários. Animações, micro-interações e dois layouts por módulo.",
    },
    {
      numero: "4",
      titulo: "Avatar 2D, Cassinos, Loja e Social",
      duracao: "Semana 4",
      desc: "Sistema de avatar animado com composição de layers e idle animations, telas de Mundo dos Cassinos, Loja VIP com economia de pontos, feed Social e sistema de Sorteios. Tudo nas versões mobile e desktop.",
    },
    {
      numero: "5",
      titulo: "Integração Final, QA e Entrega",
      duracao: "Semana 5",
      desc: "Integração completa de todos os módulos com as APIs do backend, QA visual (pixel-perfect vs Figma em ambos os formatos), ajustes de responsividade, otimização de performance, testes end-to-end e entrega final do projeto.",
    },
  ],

  entregaveis: [
    {
      titulo: "Web App Responsivo (Mobile + Desktop)",
      desc: "Interface completa com layouts dedicados para mobile e desktop, fiel ao design Figma, com todos os 13 módulos implementados e conectados ao backend.",
    },
    {
      titulo: "Design System Componentizado",
      desc: "Biblioteca de componentes reutilizáveis (botões, cards, modais, rankings, badges) padronizados conforme a identidade do Royal Vip Club.",
    },
    {
      titulo: "Animações e Micro-interações",
      desc: "Animações de abertura de Caixa VIP, revelação de figurinhas, transições de tela e feedback visual que fazem a gamificação ganhar vida.",
    },
    {
      titulo: "Sistema de Avatar 2D Animado",
      desc: "Motor de renderização de avatar com composição de layers, idle animations (respiração, piscada), tela de customização com troca de roupas e acessórios em tempo real.",
    },
    {
      titulo: "Integração com APIs",
      desc: "Toda a camada de consumo das APIs do backend: autenticação, dados de gamificação, rankings, transações e conteúdo dinâmico.",
    },
    {
      titulo: "Dois Layouts Dedicados por Módulo",
      desc: "Cada módulo com layout mobile e desktop implementados separadamente conforme o Figma, com breakpoints intermediários para tablets.",
    },
    {
      titulo: "Código-fonte Organizado",
      desc: "Todo o código frontend entregue em repositório Git, com estrutura de pastas clara, componentes documentados e pronto para manutenção.",
    },
  ],

  investimento: {
    valor: "R$ 30.000",
    descricao: "Valor total do projeto — frontend mobile + desktop",
    justificativa:
      "O valor foi calculado com base na complexidade visual mapeada no Figma: 13 módulos com múltiplas telas e modais (incluindo sistema de avatar 2D animado), cada um com layout mobile e desktop dedicado, 7 módulos de alta complexidade visual (animações, gamificação, avatar com sprites, rankings em tempo real), e integração com APIs do backend existente. Prazo de entrega: 5 semanas de desenvolvimento frontend dedicado.",
    pagamento: {
      titulo: "2x de R$ 15.000",
      desc: "50% na assinatura do contrato + 50% na entrega final",
    },
  },

  premissas: [
    {
      titulo: "APIs documentadas e funcionais",
      desc: "O backend precisa ter as APIs dos módulos documentadas (endpoints, payloads, autenticação) e acessíveis em ambiente de desenvolvimento.",
    },
    {
      titulo: "Design Figma mobile e desktop finalizado",
      desc: "Todas as telas nas versões mobile e desktop, com todos os estados (vazio, carregando, erro, sucesso) presentes no Figma antes do início de cada fase. Atualmente só existe a versão mobile.",
    },
    {
      titulo: "Ponto de contato técnico",
      desc: "Um desenvolvedor backend disponível para tirar dúvidas sobre as APIs e resolver bloqueios de integração dentro de 24h úteis.",
    },
    {
      titulo: "Ambiente de deploy",
      desc: "A Mainstream fornece o ambiente onde o frontend será publicado (domínio, hosting, SSL), ou validamos juntos a melhor opção.",
    },
    {
      titulo: "Assets do avatar 2D",
      desc: "A Mainstream fornece os sprite sheets e assets do avatar (corpo base, roupas, acessórios, cabelos) em formato adequado para composição de layers. A Pilarcode implementa o motor de renderização e animação, mas não produz a arte.",
    },
  ],

  proximosPassos: [
    {
      titulo: "Aprovação da proposta",
      desc: "Vocês dão o sinal verde por aqui ou por e-mail, e formalizamos o contrato.",
    },
    {
      titulo: "Kick-off técnico",
      desc: "Agendamos uma chamada para alinhar as APIs disponíveis, validar o Figma e definir o cronograma detalhado.",
    },
    {
      titulo: "Início do desenvolvimento",
      desc: "Começamos na semana seguinte à assinatura, direto no código.",
    },
  ],
};
