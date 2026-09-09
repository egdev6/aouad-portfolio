const locales = ["es", "en"] as const;

export type Locale = (typeof locales)[number];

type PortfolioSectionKey =
  | "apps-tech"
  | "education"
  | "lifestyle"
  | "travel-apps"
  | "gaming"
  | "services"
  | "beauty"
  | "events-hospitality";

type WorkCategory = {
  key: PortfolioSectionKey;
  id: string;
  label: string;
};

export type PortfolioContent = {
  locale: Locale;
  htmlLang: string;
  metadata: {
    title: string;
    description: string;
  };
  navigation: {
    label: string;
    openMenuLabel: string;
    closeMenuLabel: string;
    about: string;
    work: string;
    creatorKit: string;
    brands: string;
  };
  language: {
    selectorLabel: string;
    es: string;
    en: string;
    currentEs: string;
    currentEn: string;
  };
  hero: {
    role: string;
    contactsLabel: string;
    instagramLabel: string;
    tiktokLabel: string;
    emailLabel: string;
    portraitAlt: string;
    factsLabel: string;
    brandsFact: [string, string];
    experienceFact: [string, string];
    locationFact: [string, string];
  };
  about: {
    titleFirst: string;
    titleSecond: string;
    portraitAlt: string;
    paragraphs: [string, string];
  };
  work: {
    sectionLabel: string;
    categories: WorkCategory[];
    videoLabel: (category: string, number: number) => string;
    videoFallback: string;
    playLabel: string;
    pauseLabel: string;
    genericVideoLabel: string;
  };
  creatorKit: {
    title: string;
    imageAlt: string;
    equipment: [string, string, string, string, string, string];
  };
  brands: {
    title: string;
    subtitle: string;
    imageAlt: (brand: string) => string;
  };
  footer: {
    callToAction: string;
    email: string;
    instagram: string;
    backToTop: string;
  };
};

export const content = {
  es: {
    locale: "es",
    htmlLang: "es",
    metadata: {
      title: "Andrea Díez — Creadora UGC",
      description: "Portfolio de Andrea Díez, creadora UGC en València.",
    },
    navigation: {
      label: "Principal",
      openMenuLabel: "Abrir menú de navegación",
      closeMenuLabel: "Cerrar menú de navegación",
      about: "Sobre mí",
      work: "Trabajos",
      creatorKit: "Kit creador",
      brands: "Marcas",
    },
    language: {
      selectorLabel: "Seleccionar idioma",
      es: "ES",
      en: "EN",
      currentEs: "Español, idioma actual",
      currentEn: "English",
    },
    hero: {
      role: "Creadora UGC",
      contactsLabel: "Contacto y redes sociales",
      instagramLabel: "Instagram de Andrea Díez",
      tiktokLabel: "TikTok de Andrea Díez",
      emailLabel: "Enviar un email a Andrea Díez",
      portraitAlt: "Andrea Díez creando contenido con su móvil y una luz",
      factsLabel: "Experiencia profesional",
      brandsFact: ["+ 100", "marcas"],
      experienceFact: ["+ 4 años", "creando"],
      locationFact: ["40 años,", "València"],
    },
    about: {
      titleFirst: "Sobre",
      titleSecond: "mí",
      portraitAlt: "Andrea Díez rodeada de su equipo de creación de contenido",
      paragraphs: [
        "Creo contenido estratégico para conectar con la audiencia de forma natural y generar confianza en redes sociales.",
        "Mi estilo combina creatividad, storytelling, tendencias y contenido visual adaptado a distintos sectores y formatos.",
      ],
    },
    work: {
      sectionLabel: "Trabajos",
      categories: [
        { key: "apps-tech", id: "trabajos-apps-tech", label: "Apps/Tech" },
        { key: "education", id: "trabajos-formacion", label: "Formación" },
        { key: "lifestyle", id: "trabajos-lifestyle", label: "Lifestyle" },
        {
          key: "travel-apps",
          id: "trabajos-apps-viajes",
          label: "Apps de viajes",
        },
        { key: "gaming", id: "trabajos-videojuegos", label: "Videojuegos" },
        { key: "services", id: "trabajos-servicios", label: "Servicios" },
        { key: "beauty", id: "trabajos-belleza", label: "Belleza" },
        {
          key: "events-hospitality",
          id: "trabajos-eventos-y-restauracion",
          label: "Eventos y restauración",
        },
      ],
      videoLabel: (category, number) =>
        `Vídeo UGC de ${category}, trabajo ${number}`,
      videoFallback: "Tu navegador no puede reproducir este vídeo.",
      playLabel: "Reproducir",
      pauseLabel: "Pausar",
      genericVideoLabel: "vídeo",
    },
    creatorKit: {
      title: "Kit creador",
      imageAlt:
        "Andrea rodeada de su iPhone, cámara, micrófonos, panel de luz y estabilizador",
      equipment: [
        "iPhone 17 Pro",
        "Micros Hollyland LARK M2",
        'Panel de luz Neewer NL-116AI 9"',
        "Nikon D5600",
        "Estabilizador de 3 ejes",
        "Trípode y aro de luz",
      ],
    },
    brands: {
      title: "Marcas",
      subtitle: "con las que he trabajado",
      imageAlt: (brand) => `Logotipo de ${brand}`,
    },
    footer: {
      callToAction: "¿Creamos\njuntos?",
      email: "Email",
      instagram: "Instagram",
      backToTop: "Volver arriba",
    },
  },
  en: {
    locale: "en",
    htmlLang: "en",
    metadata: {
      title: "Andrea Díez — UGC Creator",
      description: "Portfolio of Andrea Díez, a UGC creator based in València.",
    },
    navigation: {
      label: "Main navigation",
      openMenuLabel: "Open navigation menu",
      closeMenuLabel: "Close navigation menu",
      about: "About me",
      work: "Work",
      creatorKit: "Creator kit",
      brands: "Brands",
    },
    language: {
      selectorLabel: "Select language",
      es: "ES",
      en: "EN",
      currentEs: "Español",
      currentEn: "English, current language",
    },
    hero: {
      role: "UGC Creator",
      contactsLabel: "Contact and social media",
      instagramLabel: "Andrea Díez on Instagram",
      tiktokLabel: "Andrea Díez on TikTok",
      emailLabel: "Email Andrea Díez",
      portraitAlt: "Andrea Díez creating content with her phone and a light",
      factsLabel: "Professional experience",
      brandsFact: ["100+", "brands"],
      experienceFact: ["4+ years", "creating"],
      locationFact: ["40 years old,", "València"],
    },
    about: {
      titleFirst: "About",
      titleSecond: "me",
      portraitAlt: "Andrea Díez surrounded by her content-creation equipment",
      paragraphs: [
        "I create strategic content that connects with audiences naturally and builds trust on social media.",
        "My style combines creativity, storytelling, trends and visual content tailored to different industries and formats.",
      ],
    },
    work: {
      sectionLabel: "Work",
      categories: [
        { key: "apps-tech", id: "trabajos-apps-tech", label: "Apps & Tech" },
        { key: "education", id: "trabajos-formacion", label: "Education" },
        { key: "lifestyle", id: "trabajos-lifestyle", label: "Lifestyle" },
        {
          key: "travel-apps",
          id: "trabajos-apps-viajes",
          label: "Travel Apps",
        },
        { key: "gaming", id: "trabajos-videojuegos", label: "Gaming" },
        { key: "services", id: "trabajos-servicios", label: "Services" },
        { key: "beauty", id: "trabajos-belleza", label: "Beauty" },
        {
          key: "events-hospitality",
          id: "trabajos-eventos-y-restauracion",
          label: "Events & Hospitality",
        },
      ],
      videoLabel: (category, number) =>
        `UGC video for ${category}, project ${number}`,
      videoFallback: "Your browser does not support this video.",
      playLabel: "Play",
      pauseLabel: "Pause",
      genericVideoLabel: "video",
    },
    creatorKit: {
      title: "Creator kit",
      imageAlt:
        "Andrea surrounded by her iPhone, camera, microphones, light panel and stabilizer",
      equipment: [
        "iPhone 17 Pro",
        "Hollyland LARK M2 microphones",
        'Neewer NL-116AI 9" light panel',
        "Nikon D5600",
        "3-axis stabilizer",
        "Tripod and ring light",
      ],
    },
    brands: {
      title: "Brands",
      subtitle: "I have worked with",
      imageAlt: (brand) => `${brand} logo`,
    },
    footer: {
      callToAction: "Shall we create\ntogether?",
      email: "Email",
      instagram: "Instagram",
      backToTop: "Back to top",
    },
  },
} satisfies Record<Locale, PortfolioContent>;
