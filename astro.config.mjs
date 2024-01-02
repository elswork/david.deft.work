import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import rehypeExternalLinks from 'rehype-external-links';
import partytown from "@astrojs/partytown";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [partytown({
    // Adds dataLayer.push as a forwarding-event.
    config: {
      forward: ["dataLayer.push"]
    }
  }), tailwind() // <-- Mover tailwind() dentro del array
  , icon()],
  site: 'https://david.deft.work',
  markdown: {
    rehypePlugins: [[rehypeExternalLinks, {
      content: {
        type: 'text',
        value: ' 🔗'
      }
    }]]
  }
});