import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://devtoolsystems.github.io",
  base: 'web',
  integrations: [tailwind(), mdx(), sitemap(), icon()],
  i18n:{
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing:{
      prefixDefaultLocale: true,
      //redirectToDefaultLocale: true
    }
  }
});
