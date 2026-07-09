export const defaultLang = "es" as const;

export const languages = {
  es: "Español",
  en: "English",
} as const;

export type Lang = keyof typeof languages;

// Diccionario de textos de interfaz. `es` es el idioma por defecto;
// `en` está listo para cuando se agregue el selector de idioma.
export const ui = {
  es: {
    "meta.title": "Agustín Villar — Desarrollador Front-End",
    "meta.description":
      "Portfolio de Agustín Villar, desarrollador front-end. Interfaces web claras, accesibles y rápidas con JavaScript, React y Astro.",

    "nav.home": "Inicio",
    "nav.experience": "Experiencia",
    "nav.projects": "Proyectos",

    "hero.greeting": "Hola, soy Agustín",
    // TODO: personalizar este texto — es un borrador basado en tu perfil.
    "hero.bio":
      "Desarrollador front-end enfocado en construir interfaces claras, accesibles y rápidas. Trabajo con JavaScript, React y Astro, y cuido los detalles de diseño tanto como el código.",
    "hero.cv": "Mi CV",

    "experience.title": "Mi experiencia",
    "experience.present": "Actualidad",

    "projects.title": "Mis proyectos",
    "projects.empty": "Pronto vas a encontrar mis proyectos acá.",

    "footer.contact": "Pongámonos en contacto",
    "footer.rights": "Todos los derechos reservados.",
  },
  en: {
    "meta.title": "Agustín Villar — Front-End Developer",
    "meta.description":
      "Portfolio of Agustín Villar, front-end developer. Clear, accessible and fast web interfaces with JavaScript, React and Astro.",

    "nav.home": "Home",
    "nav.experience": "Experience",
    "nav.projects": "Projects",

    "hero.greeting": "Hi, I'm Agustín",
    // TODO: personalize this copy — it's a draft based on your profile.
    "hero.bio":
      "Front-end developer focused on building clear, accessible and fast interfaces. I work with JavaScript, React and Astro, and I care about design details as much as the code.",
    "hero.cv": "My résumé",

    "experience.title": "Experience",
    "experience.present": "Present",

    "projects.title": "Projects",
    "projects.empty": "My projects will show up here soon.",

    "footer.contact": "Let's get in touch",
    "footer.rights": "All rights reserved.",
  },
} as const;

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}
