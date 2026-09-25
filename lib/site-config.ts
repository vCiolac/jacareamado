// ============================================================================
// CONFIGURAÇÃO DO SITE — edite tudo aqui, nenhum texto fica "preso" no código
// ============================================================================
//
// Imagens e vídeo: coloque os arquivos em /public/images (ou /public/videos)
// e aponte o caminho aqui, ex: "/images/doutora.jpg". Enquanto o valor for
// `null`, o site mostra um espaço pontilhado marcado como placeholder.
//
// Itens marcados com "PLACEHOLDER" ainda precisam de dados reais.
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

  // Menu do topo — mantenha curto. O item com `paw: true` dispara a patinha.
  nav: [
    { label: "A Doutora", href: "#doutora" },
    { label: "Galeria", href: "#galeria" },
    { label: "Como chegar", href: "#como-chegar", paw: true },
  ],

  hero: {
    heading: "Cuidado veterinário de qualidade,",
    headingHighlight: "perto de você.",
    subheading:
      "Atendimento veterinário humano, responsável e acessível para quem faz parte da sua família.",
    whatsappCta: "Falar no WhatsApp",
    instagramCta: "Ver Instagram",
    // Arte principal (ilustração da doutora com os animais).
    // Ex: "/images/hero-arte.png"
    image: null as Media,
    imageAlt:
      "Ilustração da Dra. Ana Paula Ayres Pedro abraçando cães, gatos, um coelho e o jacaré mascote",
  },

  doctor: {
    eyebrow: "A Doutora",
    name: "Dra. Ana Paula Ayres Pedro",
    role: "Médica-Veterinária",
    registration: "CRMV-RJ 7827",
    text: "Médica-veterinária com ampla experiência e especialização, oferecendo atendimento a preço popular na Freguesia, Jacarepaguá, ao lado do Prezunic.",
    // PLACEHOLDER — preencha com as especializações/áreas de atuação reais,
    // ex: ["Clínica geral de cães e gatos", "..."]. Lista vazia = aviso na tela.
    specialties: [] as string[],
    // Foto real da doutora (retrato, idealmente 4:5). Ex: "/images/doutora.jpg"
    photo: null as Media,
    photoAlt: "Dra. Ana Paula Ayres Pedro no consultório Jacaré Amado",
  },

  // Faixa compacta de serviços entre a doutora e a galeria
  services: {
    heading: "Atendimentos no consultório",
    items: [
      { name: "Consultas", icon: "stethoscope" },
      { name: "Vacinas", icon: "syringe" },
      { name: "Exames", icon: "flask" },
      { name: "Ultrassonografia", icon: "waves" },
      { name: "Radiografia", icon: "scan" },
      { name: "Soroterapia", icon: "droplet" },
    ],
  },

  gallery: {
    eyebrow: "Galeria",
    heading: "Conheça o consultório",
    text: "O espaço, o cuidado e alguns dos pacientes que já passaram por aqui.",
    // Fotos do carrossel (proporção 4:3). Troque `src` e ajuste o `alt`
    // descrevendo o que aparece na foto.
    items: [
      { src: null as Media, alt: "Fachada do consultório", placeholder: "Fachada" },
      { src: null as Media, alt: "Recepção do consultório", placeholder: "Recepção" },
      { src: null as Media, alt: "Sala de atendimento", placeholder: "Consultório" },
      { src: null as Media, alt: "Equipamentos do consultório", placeholder: "Equipamentos" },
      { src: null as Media, alt: "Paciente atendido no consultório", placeholder: "Paciente" },
      { src: null as Media, alt: "Paciente atendido no consultório", placeholder: "Paciente" },
    ],
  },

  video: {
    heading: "Um tour pelo consultório",
    text: "Dê o play e veja por dentro onde seu pet vai ser atendido.",
    // Vídeo gravado na clínica (MP4 H.264, idealmente até ~15 MB).
    // Ex: "/videos/tour.mp4"
    src: null as Media,
    // Capa do vídeo (imagem 16:9). Ex: "/images/tour-capa.jpg"
    poster: null as Media,
    title: "Tour pelo consultório Jacaré Amado",
  },

  // Mosaico pequeno de fotos extras, abaixo do vídeo (use 5 fotos).
  // A primeira aparece maior.
  mosaic: [
    { src: null as Media, alt: "Paciente no consultório", placeholder: "Foto extra 1" },
    { src: null as Media, alt: "Paciente no consultório", placeholder: "Foto extra 2" },
    { src: null as Media, alt: "Paciente no consultório", placeholder: "Foto extra 3" },
    { src: null as Media, alt: "Paciente no consultório", placeholder: "Foto extra 4" },
    { src: null as Media, alt: "Paciente no consultório", placeholder: "Foto extra 5" },
  ],

  about: {
    eyebrow: "Sobre o Jacaré Amado",
    heading: "Desde sempre cuidando de perto",
    text: "Tradição, carinho e compromisso com a saúde do seu pet. Aqui, cada animal é recebido com calma e atenção, com atendimento de qualidade a preço popular, pertinho de você.",
  },

  location: {
    eyebrow: "Como chegar",
    heading: "Venha nos visitar",
    hours: "Terça a Sábado • 10h às 18h",
    address: "Estrada de Jacarepaguá, 7187 — Loja A — Freguesia",
    reference: "Ao lado do Prezunic",
    phones: ["(21) 3190-5544", "(21) 98229-3526"],
    // Endereço usado no mapa incorporado e no link "Abrir no Google Maps"
    mapQuery: "Estrada de Jacarepaguá, 7187, Loja A, Freguesia, Rio de Janeiro",
  },

  contact: {
    whatsappNumber: "5521982293526", // formato internacional, só dígitos
    whatsappMessage: "Olá! Gostaria de agendar uma consulta para o meu pet.",
    // PLACEHOLDER — cole aqui o link do perfil, ex: "https://www.instagram.com/usuario"
    instagramUrl: "",
  },

  footer: {
    closingLine: "Até aqui o Senhor Deus nos ajudou. • 1 Samuel 7:12",
  },
};

export type SiteConfig = typeof siteConfig;
