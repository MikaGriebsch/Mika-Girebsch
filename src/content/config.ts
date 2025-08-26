import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});

const projects = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		heroImage: z.string(),
		websiteUrl: z.string(),
		linkType: z.enum(['website', 'github']).default('website'),
		year: z.string(),
		tags: z.array(z.string()),
		featured: z.boolean().optional(),
		extraImage: z.string().optional(),
	}),
});

const about = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		heroImage: z.string().optional(),
	}),
});

export const collections = { blog, projects, about };
