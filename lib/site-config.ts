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
    // Cada item vira uma linha do título; o destaque fecha o título
    headingLines: ["Cuidado veterinário", "de verdade,"],
    headingHighlight: "perto de você.",
    subheading:
      "Do atendimento de rotina à investigação de problemas mais específicos, seu pet encontra acompanhamento veterinário próximo, responsável e acessível.",
    whatsappCta: "Falar no WhatsApp",
    instagramCta: "Conhecer no Instagram",
    // Informação de apoio abaixo dos botões (não são botões)
    infoHours: "Atendimento de terça a sábado",
    infoPlace: "Freguesia, Jacarepaguá",
    // Imagem principal. Quando a arte ilustrada (doutora com os animais)
    // ficar pronta, troque por ela e use imageFit: "contain".
    image: "/images/doutora-paciente-westie.jpeg" as Media,
    imageFit: "cover" as "cover" | "contain",
    imagePosition: "center 12%",
    imageAlt: "Dra. Ana Paula Ayres Pedro segurando um paciente no consultório Jacaré Amado",
  },

  doctor: {
    eyebrow: "A Doutora",
    heading: "Cuidado atento em cada fase da vida do seu pet.",
    name: "Dra. Ana Paula Ayres Pedro",
    role: "Médica-veterinária",
    registration: "CRMV-RJ 7827",
    paragraphs: [
      "A Dra. Ana Paula é médica-veterinária com especialização em Clínica Médica de Gatos, Dermatologia Veterinária e Nefrologia e Urologia Veterinária.",
      "No Jacaré Amado, cada atendimento começa pela escuta e por uma avaliação cuidadosa de cada animal. A proposta é unir conhecimento técnico, acompanhamento próximo e uma comunicação clara com o tutor — para que você entenda o que está acontecendo e participe de cada decisão sobre a saúde do seu pet.",
    ],
    specialtiesHeading: "Especializações",
    specialties: [
      {
        name: "Clínica Médica de Gatos",
        text: "Um olhar especialmente direcionado às particularidades da saúde e do comportamento dos felinos.",
      },
      {
        name: "Dermatologia Veterinária",
        text: "Investigação e acompanhamento de alterações de pele, pelos e ouvidos.",
      },
      {
        name: "Nefrologia e Urologia Veterinária",
        text: "Acompanhamento de condições relacionadas aos rins e ao sistema urinário.",
      },
    ],
    // Foto real da doutora (retrato, idealmente 4:5)
    photo: "/images/doutora-paciente-coelho.jpeg" as Media,
    photoAlt: "Dra. Ana Paula Ayres Pedro com um coelho no colo, na sala de atendimento",
  },

  // De onde vem o nome — seção logo depois da doutora
  origin: {
    eyebrow: "A origem do nome",
    heading: "De onde vem o nome Jacaré Amado?",
    paragraphs: [
      "O nome nasceu muito antes do consultório.",
      "A Dra. Ana Paula tinha uma cachorrinha de focinho comprido, com uma pequena mancha em formato de coração no focinho. Pelo jeitinho dela e pelo costume da doutora de chamar com carinho as pessoas de “amado” e “amada”, surgiu um apelido que acabou ficando: Jacaré Amado.",
      "Com o tempo, aquele apelido cheio de afeto acabou dando nome ao consultório — e hoje carrega um pouco da história que ajudou a inspirar o cuidado oferecido por aqui.",
    ],
    quote: "Jacaré Amado não nasceu de um endereço. Nasceu de um apelido.",
    // Foto da história (ex: a doutora com a cachorrinha). Com null, a seção
    // fica só com o texto, centralizada.
    photo: "/images/paciente-pitbull.jpeg" as Media,
    photoAlt: "Veterinária abraçada a um paciente cão no consultório",
  },

  services: {
    eyebrow: "Serviços",
    heading: "Cuidado completo começa com o diagnóstico certo.",
    text: "O Jacaré Amado oferece atendimento clínico e exames que ajudam a investigar a saúde do seu animal e definir os próximos passos de forma mais segura.",
    items: [
      {
        name: "Consultas",
        icon: "stethoscope",
        text: "Avaliação clínica, acompanhamento e orientação para cada etapa da vida do seu pet.",
      },
      {
        name: "Vacinas",
        icon: "syringe",
        text: "Protocolos de vacinação de acordo com as necessidades de cada animal.",
      },
      {
        name: "Exames",
        icon: "flask",
        text: "Apoio diagnóstico para investigar sintomas e acompanhar a evolução dos pacientes.",
      },
      {
        name: "Ultrassonografia",
        icon: "waves",
        text: "Avaliação por imagem para auxiliar na investigação de diferentes condições clínicas.",
      },
      {
        name: "Radiografia",
        icon: "scan",
        text: "Exames de imagem que ajudam o veterinário a enxergar além do que o exame físico consegue mostrar.",
      },
      {
        name: "Soroterapia",
        icon: "droplet",
        text: "Suporte e hidratação quando o quadro clínico exige acompanhamento e reposição de fluidos.",
      },
    ],
  },

  gallery: {
    eyebrow: "Galeria",
    heading: "Um pouquinho do Jacaré Amado",
    text: "Conheça o espaço, os atendimentos e alguns dos pacientes que já passaram por aqui.",
    // Fotos do carrossel (proporção 4:5, retrato). Troque `src` e ajuste o
    // `alt` descrevendo o que aparece na foto. `position` ajusta o enquadramento.
    // (fachada.jpeg ficou de fora: mostra o horário antigo "Seg à Sáb")
    items: [
      {
        src: "/images/doutora-paciente-caramelo.jpeg" as Media,
        alt: "Veterinária abraçada a um paciente cão caramelo no consultório",
        placeholder: "Paciente",
        position: "center 30%",
      },
      {
        src: "/images/ultrassom-gato.jpeg" as Media,
        alt: "Gato sendo examinado no ultrassom do consultório",
        placeholder: "Ultrassom",
        position: "right center",
      },
      {
        src: "/images/paciente-poodle.jpeg" as Media,
        alt: "Paciente poodle sentado na mesa de atendimento",
        placeholder: "Paciente",
        position: "center 60%",
      },
      {
        src: "/images/doutora-paciente-pretoebranco.jpeg" as Media,
        alt: "Veterinária com um paciente cão preto e branco na sala de atendimento",
        placeholder: "Paciente",
        position: "center 35%",
      },
      {
        src: "/images/radiografia-coelho.jpeg" as Media,
        alt: "Dra. Ana Paula e a equipe de radiografia com um coelho no colo",
        placeholder: "Radiografia",
        position: "35% center",
      },
      {
        src: "/images/equipe-paciente-gato.jpeg" as Media,
        alt: "Profissional da equipe com um gato preto e branco no colo",
        placeholder: "Paciente",
        position: "center 50%",
      },
      {
        src: "/images/paciente-shihtzu.jpeg" as Media,
        alt: "Paciente shih-tzu de coleira rosa na recepção",
        placeholder: "Paciente",
        position: "center 35%",
      },
      {
        src: "/images/doutora-equipe-coelho.jpeg" as Media,
        alt: "Dra. Ana Paula e um colega da equipe com um coelho no colo",
        placeholder: "Equipe",
        position: "center 45%",
      },
    ],
  },

  video: {
    heading: "Conheça o consultório por dentro",
    text: "Quer saber onde seu pet será atendido? Dá uma olhada no nosso espaço e conheça um pouco da rotina do Jacaré Amado.",
    // Vídeo gravado na clínica (MP4 H.264, idealmente até ~15 MB)
    src: "/videos/tour-consultorio.mp4" as Media,
    // Capa do vídeo (mesma proporção do vídeo)
    poster: "/images/tour-capa.jpg" as Media,
    // "portrait" para vídeo vertical (celular, 9:16), "landscape" para 16:9
    orientation: "portrait" as "portrait" | "landscape",
    title: "Tour pelo consultório Jacaré Amado",
  },

  // Mosaico opcional de fotos extras, abaixo do vídeo (até 5; a primeira
  // aparece maior). Lista vazia = o mosaico não aparece.
  // Ex: { src: "/images/extra-1.jpg", alt: "Descrição da foto", placeholder: "Extra" }
  mosaic: [] as { src: Media; alt: string; placeholder: string }[],

  instagram: {
    eyebrow: "Instagram",
    heading: "Acompanhe nossa rotina",
    text: "Atendimentos, pacientes, informações sobre saúde animal e um pouco do dia a dia do Jacaré Amado.",
    cta: "Seguir no Instagram",
  },

  location: {
    eyebrow: "Como chegar",
    heading: "Agora é só seguir as patinhas.",
    text: "Estamos na Freguesia, em Jacarepaguá, com acesso fácil para quem vem da região.",
    address: "Estrada de Jacarepaguá, 7187 — Loja A",
    district: "Freguesia — Jacarepaguá",
    reference: "Ao lado do Prezunic",
    hours: "De terça a sábado",
    hoursDetail: "Das 10h às 18h",
    phones: ["(21) 3190-5544", "(21) 98229-3526"],
    routeCta: "Abrir rota",
    // Endereço usado no mapa incorporado e no botão "Abrir rota"
    mapQuery: "Estrada de Jacarepaguá, 7187, Loja A, Freguesia, Rio de Janeiro",
  },

  finalCta: {
    heading: "Seu pet precisa de atendimento?",
    text: "Converse diretamente com o Jacaré Amado pelo WhatsApp e tire suas dúvidas antes de vir.",
    whatsappCta: "Falar no WhatsApp",
    instagramCta: "Ver Instagram",
  },

  contact: {
    whatsappNumber: "5521982293526", // formato internacional, só dígitos
    whatsappMessage: "Olá! Gostaria de agendar uma consulta para o meu pet.",
    instagramUrl: "https://www.instagram.com/jacareamadoveterinariapopular",
    instagramHandle: "@jacareamadoveterinariapopular",
  },

  footer: {
    closingLine: "Até aqui o Senhor Deus nos ajudou. • 1 Samuel 7:12",
  },
};

export type SiteConfig = typeof siteConfig;
