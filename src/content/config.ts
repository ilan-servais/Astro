import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
    schema: z.object({
        inProgress: z.boolean(),
        title: z.string(),
        description: z.string(),
        tags: z.array(z.string()),
        link: z.string(),
        img_alt: z.string().optional(),
        image: z.string().optional(),
        date: z.string().optional() // ajout du champ date optionnel
    }),
});

export const collections = {
    projects: projectsCollection,
};
