# Portfolio — Agustín Villar

Sitio personal construido con [Astro](https://astro.build/) y [Tailwind CSS](https://tailwindcss.com/). Desplegado en Vercel.

## Stack

- **Astro 4** — framework de contenido, cero JS por defecto.
- **Tailwind CSS 3** — con tokens de color semánticos (ver `tailwind.config.mjs` + variables HSL en `src/layouts/Layout.astro`).
- **Onest Variable** — tipografía.

## Estructura

```text
src/
├── components/          # Header, Footer, tarjetas, íconos, theme toggle
│   └── experiences/     # Ítem de la línea de tiempo de experiencia
├── data/
│   └── experiences.ts   # Datos de experiencia (bilingüe es/en)
├── i18n/
│   └── ui.ts            # Diccionario de textos de interfaz (es por defecto, en listo)
├── images/
├── layouts/
│   └── Layout.astro     # <head>, tokens de color, anti-FOUC, meta OG
└── pages/
    └── index.astro
```

### Internacionalización

Los textos viven en `src/i18n/ui.ts` como diccionario `es` / `en`. Hoy se renderiza `es`
por defecto (`defaultLang`). Para habilitar dos idiomas en vivo falta solo agregar el
routing por idioma y un selector; el contenido ya está separado del markup.

## Comandos

| Comando           | Acción                                   |
| :---------------- | :--------------------------------------- |
| `npm install`     | Instala dependencias                     |
| `npm run dev`     | Servidor local en `localhost:4321`       |
| `npm run build`   | Compila el sitio a `./dist/`             |
| `npm run preview` | Previsualiza el build local              |

## Pendientes

- [ ] Reemplazar el borrador de la bio del hero (`src/i18n/ui.ts` → `hero.bio`).
- [ ] Subir el CV a `public/cv.pdf`.
- [ ] Agregar `public/og.png` (1200×630) y descomentar la meta `og:image` en el Layout.
- [ ] Cargar proyectos reales en la sección de proyectos.
