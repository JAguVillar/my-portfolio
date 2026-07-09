import type { Lang } from "../i18n/ui";

type Localized = Record<Lang, string>;

export interface Experience {
  empresa: string;
  color: string;
  inicio: string;
  /** `null` = trabajo actual (se renderiza como "Actualidad" / "Present") */
  fin: string | null;
  puesto: Localized;
  descripcion: Localized;
}

export const experiences: Experience[] = [
  {
    empresa: "Visma Latam",
    color: "#a78bfa",
    inicio: "2024",
    fin: null,
    puesto: {
      es: "Senior Frontend Engineer",
      en: "Senior Frontend Engineer",
    },
    descripcion: {
      es: "Integrante del equipo que desarrolla “Tu Recibo” y “Mandü”, una suite regional líder de RR. HH. Construyo funcionalidades y componentes reutilizables con Angular, React y Vue 3, migro codebases legacy (Vue 2 y PHP), resuelvo issues de seguridad y colaboro en pipelines de CI/CD, apoyándome en herramientas de IA para agilizar el desarrollo.",
      en: "Part of the team building “Tu Recibo” and “Mandü”, a leading regional HR suite. I build features and reusable components with Angular, React and Vue 3, migrate legacy codebases (Vue 2 and PHP), resolve security issues and contribute to CI/CD pipelines — leaning on AI tooling to speed up development.",
    },
  },
  {
    empresa: "Macamedia",
    color: "#4ce07d",
    inicio: "2021",
    fin: "2024",
    puesto: {
      es: "Frontend Engineer",
      en: "Frontend Engineer",
    },
    descripcion: {
      es: "Desarrollé dashboards, paneles administrativos y landing pages con JavaScript y librerías UI como Quasar, Element y Vuetify. Lideré el rediseño del sitio de un club de fútbol de primera división, con un aumento del 80 % en el tráfico, integré pasarelas de pago (MercadoPago, Paypertic) y un CRM en tiempo real con WebSockets. Implementé un flujo Git Flow para mejorar releases y entregas.",
      en: "Built dashboards, admin panels and landing pages with JavaScript and UI libraries like Quasar, Element and Vuetify. Led the redesign of a first-division football club's site, driving an 80% traffic increase, integrated payment gateways (MercadoPago, Paypertic) and a real-time CRM with WebSockets. Set up a Git Flow workflow to improve releases and delivery times.",
    },
  },
  {
    empresa: "Santiago Web",
    color: "#f06336",
    inicio: "2018",
    fin: "2021",
    puesto: {
      es: "Fullstack Developer",
      en: "Fullstack Developer",
    },
    descripcion: {
      es: "Desarrollé aplicaciones web con JavaScript, PHP y librerías UI como Element, Ant Design y Vuetify. Lideré la reconstrucción de un sistema legacy de inscripción médica, mejorando la usabilidad y la experiencia de usuario, y diseñé interfaces para múltiples proyectos de clientes.",
      en: "Built web applications with JavaScript, PHP and UI libraries like Element, Ant Design and Vuetify. Led the rebuild of a legacy medical enrollment system, improving usability and user experience, and designed interfaces for multiple client projects.",
    },
  },
];
