import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  }),
});

const projectSection = z.object({
  id: z.string().optional(), // e.g. "2.1" for numbered sections
  title: z.string(),
  images: z.array(z.string()).optional().default([]), // paths in /public, e.g. /projects/stand-with-crypto/01.jpg
  videos: z.array(z.string()).optional().default([]), // paths or URLs
  link: z.string().optional(), // e.g. Lottie share URL
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date().optional(),
    image: z.string().optional(),
    draft: z.boolean().optional().default(false),
    tags: z.array(z.string()).optional().default([]),
    category: z.enum(['graphic-design', 'motion', 'web-development']).optional().default('graphic-design'),
    // Intro block (1.1 - Introduction)
    roles: z.array(z.string()).optional().default([]), // e.g. ["Editorial Designer", "Illustration Designer"]
    tools: z.array(z.string()).optional().default([]), // e.g. ["Adobe InDesign", "Adobe Illustrator"]
    overview: z.string().optional(), // PROJECT OVERVIEW text
    // Optional structured sections (2.1, 2.2, 3.1, etc.) with their own media
    sections: z.array(projectSection).optional(),
    // Simple projects: one set of media (no numbered sections)
    images: z.array(z.string()).optional(),
    videos: z.array(z.string()).optional(),
  }),
});

export const collections = { pages, projects };
