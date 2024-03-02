import { loadEnv } from "vite";
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
const env = loadEnv("", process.cwd(), "");
const SITE_LINK = env.SITE_LINK;
const siteLink = SITE_LINK || "http://example.com";

// https://astro.build/config
export default defineConfig({
  site: siteLink,
  output: 'static',
  integrations: [tailwind({
    applyBaseStyles: false
  }), sitemap(), mdx()]
});