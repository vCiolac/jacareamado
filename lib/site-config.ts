// ============================================================================
// CONFIGURAÇÃO DO SITE — edite tudo aqui, nenhum texto fica "preso" no código
// ============================================================================
//
// Imagens: coloque os arquivos em /public/images e aponte o caminho aqui,
// ex: "/images/doutora.jpg". O next/image converte para WebP/AVIF sozinho.
//
// Horário, endereço e telefones ficam SÓ em `contact` — todos os componentes
// leem daqui, para não haver horários diferentes espalhados pelo site.
// ============================================================================

type Media = string | null;

export const siteConfig = {
  business: {
    name: "Jacaré Amado",
    tagline: "Consultório Veterinário Popular",
    // Logo em imagem (ex: "/images/logo.png"). Enquanto for null, o nome
    // aparece escrito com a fonte da marca.
    logo: null as Media,
  },

  // Menu do topo (âncoras dos 5 blocos da página)
  nav: [
    { label: "Início", href: "#inicio" },
    { label: "Serviços", href: "#servicos" },
    { label: "A Doutora", href: "#doutora" },
    { label: "Equipe", href: "#equipe" },
    { label: "Contato", href: "#contato" },
  ],

  // Fonte única dos dados operacionais
  contact: {
    hours: "Terça a sábado • 10h30 às 18h",
    address: "Estrada de Jacarepaguá, 7187 — Loja A", //   mantém "Loja A" junto
    district: "Freguesia — Jacarepaguá",
    reference: "Ao lado do Prezunic",
    phones: ["(21) 3190-5544", "(21) 98229-3526"],
    whatsappNumber: "5521982293526", // formato internacional, só dígitos
    whatsappMessage: "Olá! Gostaria de agendar uma consulta para o meu pet.",
    instagramUrl: "https://www.instagram.com/jacareamadoveterinariapopular",
    // Endereço usado no mapa incorporado e no botão "Abrir rota"
    mapQuery: "Estrada de Jacarepaguá, 7187, Loja A, Freguesia, Rio de Janeiro",
  },

  hero: {
    heading: "Cuidado veterinário de qualidade,",
    headingHighlight: "perto de você.",
    subheading:
      "Atendimento veterinário humano, responsável e acessível para quem faz parte da sua família.",
    whatsappCta: "Falar no WhatsApp",
    // Rola até a apresentação da doutora (não abre outra página)
    secondaryCta: "Conhecer o consultório",
    secondaryHref: "#doutora",
    // Imagem principal. Quando a arte ilustrada (doutora com os animais)
    // ficar pronta, troque por ela e use imageFit: "contain".
    image: "/images/doutora-paciente-westie.jpeg" as Media,
    imageFit: "cover" as "cover" | "contain",
    imagePosition: "center 15%",
    imageAlt: "Dra. Ana Paula Ayres Pedro segurando um paciente no consultório Jacaré Amado",
  },

  services: {
    eyebrow: "Serviços",
    heading: "Cuidado completo começa com o diagnóstico certo.",
    // Uma linha curta por serviço — mantenha enxuto
    items: [
      { name: "Consultas", icon: "stethoscope", text: "Avaliação e acompanhamento clínico" },
      { name: "Vacinas", icon: "syringe", text: "Protocolos para cada animal" },
      { name: "Exames", icon: "flask", text: "Apoio ao diagnóstico" },
      { name: "Ultrassonografia", icon: "waves", text: "Avaliação por imagem" },
      { name: "Radiografia", icon: "scan", text: "Imagem além do exame físico" },
      { name: "Soroterapia", icon: "droplet", text: "Suporte e hidratação" },
    ],
  },

  doctor: {
    eyebrow: "A Doutora",
    heading: "Cuidado atento em cada fase da vida do seu pet.",
    name: "Dra. Ana Paula Ayres Pedro",
    role: "Médica-veterinária",
    registration: "CRMV-RJ 7827",
    text: "A Dra. Ana Paula é médica-veterinária especializada em Clínica Médica de Gatos, Dermatologia Veterinária e Nefrologia e Urologia Veterinária. O atendimento é próximo e explicado com clareza ao tutor.",
    specialties: [
      "Clínica Médica de Gatos",
      "Dermatologia Veterinária",
      "Nefrologia e Urologia Veterinária",
    ],
    photo: "/images/doutora-coelho-consultorio.jpeg" as Media,
    photoPosition: "center 25%",
    photoAlt: "Dra. Ana Paula Ayres Pedro com um coelho no colo, na sala de atendimento",
    // História do nome — box pequeno dentro do bloco da doutora
    origin: {
      heading: "De onde vem o nome Jacaré Amado?",
      text: "O nome Jacaré Amado nasceu de um cão de focinho alongado, que ganhou o apelido de ‘Jacaré’. Como a Dra. Ana Paula tem o costume carinhoso de chamar os animais de ‘amado’ e ‘amada’, o apelido virou ‘Jacaré Amado’ — e acabou dando nome ao consultório.",
    },
  },

  // Carrossel "Nossa equipe" — só fotos reais. Se tiver nome/função de alguém,
  // preencha `caption` (ex: "Fulano • Auxiliar"); sem isso, aparece só a foto.
  team: {
    eyebrow: "Equipe",
    heading: "Nossa equipe",
    items: [
      {
        src: "/images/equipe-paciente-gato.jpeg",
        alt: "Profissional da equipe com um gato preto e branco no colo",
        caption: null as string | null,
        position: "center 40%",
      },
      {
        src: "/images/doutora-equipe-coelho.jpeg",
        alt: "Dra. Ana Paula e um colega da equipe com um coelho no colo",
        caption: null as string | null,
        position: "center 40%",
      },
      {
        src: "/images/ultrassom-gato.jpeg",
        alt: "Profissional da equipe realizando ultrassom em um gato",
        caption: null as string | null,
        position: "right center",
      },
      {
        src: "/images/radiografia-coelho.jpeg",
        alt: "Dra. Ana Paula e a equipe de radiografia com um coelho no colo",
        caption: null as string | null,
        position: "35% center",
      },
      {
        src: "/images/doutora-paciente-caramelo.jpeg",
        alt: "Veterinária abraçada a um paciente cão caramelo no consultório",
        caption: null as string | null,
        position: "center 30%",
      },
      {
        src: "/images/doutora-paciente-pretoebranco.jpeg",
        alt: "Veterinária com um paciente cão preto e branco na sala de atendimento",
        caption: null as string | null,
        position: "center 35%",
      },
    ],
  },

  contactSection: {
    heading: "Seu pet precisa de atendimento?",
    text: "Converse diretamente com o Jacaré Amado pelo WhatsApp e tire suas dúvidas antes de vir.",
    whatsappCta: "Falar no WhatsApp",
    routeCta: "Abrir rota",
  },

  footer: {
    closingLine: "Até aqui o Senhor Deus nos ajudou. • 1 Samuel 7:12",
  },
};

export type SiteConfig = typeof siteConfig;
