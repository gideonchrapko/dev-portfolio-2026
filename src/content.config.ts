import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { tagSlugs } from './data/tags';

const validTagSlugs = new Set(tagSlugs.map((s: string) => s.toLowerCase()));

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  }),
});

const videoSource = z.union([
  z.string(), // single URL (e.g. MP4 or WebM)
  z.object({ webm: z.string().optional(), mp4: z.string().optional() }).refine((o) => !!(o.webm || o.mp4), { message: 'Provide at least webm or mp4' }),
]);
const projectSection = z.object({
  id: z.string().optional(), // e.g. "2.1" for numbered sections
  title: z.string(),
  images: z.array(z.string()).optional().default([]), // paths in /public, e.g. /projects/stand-with-crypto/01.jpg
  videos: z.array(videoSource).optional().default([]), // URL string or { webm?, mp4? } for smaller size
  link: z.string().optional(), // e.g. Lottie share URL
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date().optional(),
    /** Live project URL – shown as a link in the project header when set */
    url: z.string().optional(),
    image: z.string().optional(),
    draft: z.boolean().optional().default(false),
    tags: z
    .array(
      z.string().refine((s) => validTagSlugs.has(s.toLowerCase()), {
        message: `Tag must be one of: ${tagSlugs.join(', ')}. Add new tags in src/data/tags.ts.`,
      })
    )
    .optional()
    .default([]),
    category: z.enum(['graphic-design', 'motion', 'web-development']).optional().default('graphic-design'),
    // Intro block (1.1 - Introduction)
    roles: z.array(z.string()).optional().default([]), // e.g. ["Editorial Designer", "Illustration Designer"]
    tools: z.array(z.string()).optional().default([]), // e.g. ["Adobe InDesign", "Adobe Illustrator"]
    overview: z.string().optional(), // PROJECT OVERVIEW text
    // Optional structured sections (2.1, 2.2, 3.1, etc.) with their own media
    sections: z.array(projectSection).optional(),
    // Simple projects: one set of media (no numbered sections)
    images: z.array(z.string()).optional(),
    videos: z.array(videoSource).optional(),
  }),
});

export const collections = { pages, projects };
