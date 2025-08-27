// @ts-check
import { defineConfig } from 'astro/config';
import rehypeMermaid from 'rehype-mermaid';
import tailwindcss from "@tailwindcss/vite";
import preact from "@astrojs/preact";
import sitemap from "@astrojs/sitemap"
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://collins-island.netlify.app/",
  integrations: [preact(), icon(), sitemap({
    filter: (page) =>
      !page.includes("/blog/tags") &&
      !page.includes("/blog/techs"),
  }),],

  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark'
    },
    syntaxHighlight: {
      type: "shiki",
      excludeLangs: ["mermaid"]
    },
    rehypePlugins: [[rehypeMermaid, { strategy: "img-svg", dark: true, colorScheme: "forest" }]]
  },
});