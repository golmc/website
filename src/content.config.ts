import {defineCollection, z} from 'astro:content';
import {glob, file} from 'astro/loaders';
const blog = defineCollection({
	loader: glob({base: './src/content/blog', pattern: '**/*.md'}),
	schema: ({image}) =>
		z.object({
			type: z.string(),
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			heroImage: image().optional(),
		}),
});
const guides = defineCollection({
	loader: glob({base: './src/content/guides', pattern: '**/*.md'}),
	schema: ({image}) =>
		z.object({
			title: z.string(),
			heroImage: image().optional(),
		}),
});
const gallery = defineCollection({
	loader: file("./src/data/gallery.json", {parser: (text) => JSON.parse(text)}),
	schema: ({image}) =>
		z.object({
			id: z.string(),
			image: image().optional(),
		}),
});
export const collections = {blog, guides, gallery};
