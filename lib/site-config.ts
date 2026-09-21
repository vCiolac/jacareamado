// ============================================================================
// CONFIGURAÇÃO DO SITE — edite tudo aqui, nenhum texto fica "preso" no código
// ============================================================================

export const siteConfig = {
  business: {
    name: "Jacaré Amado",
    tagline: "Consultório Veterinário Popular",
  },

  nav: [
    { label: "Início", href: "#inicio" },
    { label: "Serviços", href: "#servicos" },
    { label: "A Doutora", href: "#doutora" },
    { label: "Contato", href: "#contato" },
  ],

  hero: {
    heading: "Cuidado veterinário",
    headingHighlight: "perto de você",
    subheading:
      "Atendimento veterinário humano, responsável e acessível para quem faz parte da sua família.",
    primaryCta: "Falar no WhatsApp",
    secondaryCta: "Conhecer o consultório",
    // Troque por uma foto real da doutora/consultório quando tiver.
    // Ex: "/images/hero.jpg" (coloque o arquivo em /public/images/)
    image: null as string | null,
  },

  // Aparece logo abaixo do hero
  quickInfo: {
    hours: "Terça a Sábado • 10h às 18h",
    address: "Estrada de Jacarepaguá, 7187 — Loja A — Freguesia",
    phones: ["(21) 3190-5544", "(21) 98229-3526"],
  },

  highlight: {
    title: "Desde sempre cuidando de perto",
    text: "Tradição, carinho e compromisso com a saúde do seu pet.",
    image: null as string | null,
  },

  services: {
    eyebrow: "Nossos serviços",
    heading: "Tudo que seu pet precisa",
    items: [
      {
        name: "Consultas",
        description: "Avaliação completa e cuidadosa do seu melhor amigo.",
        icon: "stethoscope",
      },
      {
        name: "Vacinas",
        description: "Protocolos de vacinação seguros e personalizados.",
        icon: "syringe",
      },
      {
        name: "Exames",
        description: "Diagnósticos precisos para um cuidado mais eficaz.",
        icon: "flask",
      },
      {
        name: "Ultrassonografia",
        description: "Tecnologia para ver além e cuidar melhor.",
        icon: "waves",
      },
      {
        name: "Radiografia",
        description: "Imagens que ajudam a entender e tratar com segurança.",
        icon: "scan",
      },
      {
        name: "Soroterapia",
        description: "Hidratação e suporte para recuperação com carinho.",
        icon: "droplet",
      },
    ],
  },

  about: {
    eyebrow: "Sobre a doutora",
    heading: "Cuidado de verdade, de perto",
    text: "Médica-veterinária com ampla experiência e especialização, oferecendo atendimento a preço popular na Freguesia, Jacarepaguá, ao lado do Prezunic.",
    doctorName: "Dra. Ana Paula Ayres Pedro",
    doctorRole: "Médica-Veterinária",
    registration: "CRMV-RJ 7827",
    // Foto real da doutora — troque quando tiver.
    image: null as string | null,
  },

  contactCta: {
    heading: "Vamos cuidar do seu melhor amigo?",
    text: "Fale conosco e agende uma consulta.",
    cta: "Falar no WhatsApp",
    // Endereço usado no mapa incorporado (Google Maps, sem precisar de API key)
    mapQuery: "Estrada de Jacarepaguá, 7187, Loja A, Freguesia, Rio de Janeiro",
  },

  contact: {
    whatsappNumber: "5521982293526", // formato internacional, só dígitos
    whatsappMessage: "Olá! Gostaria de agendar uma consulta para o meu pet.",
    instagramUrl: "",
  },

  footer: {
    closingLine: "Até aqui o Senhor Deus nos ajudou. • 1 Samuel 7:12",
  },
};

export type SiteConfig = typeof siteConfig;
