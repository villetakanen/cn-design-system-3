import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const principles = defineCollection({
	loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/books/principles" }),
	schema: z.object({
		title: z.string(),
		icon: z.string(),
		multipart: z.boolean().optional(),
	}),
});

const app = defineCollection({
	loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/books/app" }),
	schema: z.object({
		title: z.string(),
		icon: z.string(),
		multipart: z.boolean().optional(),
	}),
});

const elements = defineCollection({
	loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/books/elements" }),
	schema: z.object({
		title: z.string(),
		icon: z.string(),
		multipart: z.boolean().optional(),
	}),
});

const css = defineCollection({
	loader: glob({ pattern: "*.{md,mdx}", base: "./src/books/css" }),
	schema: z.object({
		title: z.string(),
		collection: z.string().default("Generics"),
		multipart: z.boolean().optional(),
	}),
});

const addons = defineCollection({
	loader: glob({ pattern: "*.{md,mdx}", base: "./src/books/addons" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		readme: z.string().optional(),
	}),
});

export const collections = { addons, app, principles, elements, css };
