// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import svelte from '@astrojs/svelte';
import remarkGfm from 'remark-gfm';
import remarkSmartypants from 'remark-smartypants';
import rehypeExternalLinks from 'rehype-external-links';

// https://astro.build/config
export default defineConfig({
	site: 'https://vnt87.github.io',
	base: '/blog', // This should match your repository name
	integrations: [
		mdx({
			remarkPlugins: [remarkGfm, remarkSmartypants],
			rehypePlugins: [rehypeExternalLinks],
		}),
		sitemap(),
		svelte(),
	],
});
