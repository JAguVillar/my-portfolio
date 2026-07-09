import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: "https://jaguvillar.github.io",
  // Polling: el watcher nativo no detecta cambios de archivo de forma fiable
  // en algunos setups de Windows. Con esto el HMR toma los cambios siempre.
  vite: {
    server: {
      watch: { usePolling: true, interval: 200 },
    },
  },
});
