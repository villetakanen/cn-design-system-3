// @ts-check
import { defineConfig } from 'astro/config';
import { visualizer } from "rollup-plugin-visualizer";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  vite: {
      plugins: [visualizer({
          emitFile: true,
          filename: "stats.html",
      })]
  },

  integrations: [mdx()]
});