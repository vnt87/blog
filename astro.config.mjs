// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
	site: 'https://vnt87.github.io',
	base: '/blog', // This should match your repository name
	integrations: [
		mdx({
			remarkPlugins: ['remark-gfm', 'remark-smartypants'],
			rehypePlugins: ['rehype-external-links'],
		}),
		sitemap(),
		svelte(),
	],
});
