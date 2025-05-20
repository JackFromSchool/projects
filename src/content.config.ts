import { defineCollection, reference, z } from "astro:content";

import { glob } from "astro/loaders";

const writeups = defineCollection({
   loader: glob({ pattern: "**/*.mdx", base: "./src/writeups" }),
   schema: z.object({
      title: z.string(),
   }),
});

export const collections = { writeups };
