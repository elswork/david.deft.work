import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

import rehypeExternalLinks from 'rehype-external-links';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://david.deft.work',
  markdown: {
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          content: { type: 'text', value: ' 🔗' }
        }
      ],
    ]
  },
});