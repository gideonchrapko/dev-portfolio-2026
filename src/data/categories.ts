export const CATEGORIES = {
	react: { label: 'React', color: 'azure' },
	nextjs: { label: 'Next.js', color: 'acid' },
	typescript: { label: 'TypeScript', color: 'gold' },
	tailwind: { label: 'Tailwind CSS', color: 'mint' },
	threejs: { label: 'WebGL / Three.js', color: 'hot-pink' },
} as const;

export type CategorySlug = keyof typeof CATEGORIES;

export const FALLBACK_CATEGORY: CategorySlug = 'react';
