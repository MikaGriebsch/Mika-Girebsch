import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	// Aktualisiere diese URL zu deiner echten Domain
	site: 'https://mikagriebsch.onrender.com',
	integrations: [mdx(), sitemap()],
});
