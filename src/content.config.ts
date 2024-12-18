import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const principles = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/books/principles" }),
	schema: z.object({
		title: z.string(),
		icon: z.string(),
	}),
});

const addons = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/books/addons" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		readme: z.string().optional(),
	}),
});

export const collections = { addons, principles };
