// Import utilities from `astro:content`
import { z, defineCollection, type ImageFunction } from "astro:content";

// Define a `type` and `schema` for each collection
const postsCollectionSchema = (image: ImageFunction) => z.object({
  title: z.string(),
  pubDate: z.date(),
  description: z.string(),
  author: z.string(),
  image: z.object({
    src: image(),
    alt: z.string()
  }),
  tags: z.array(z.string())
});

const postsCollection = defineCollection({
    type: 'content',
    schema:({image}) => postsCollectionSchema(image),
});

// Use `.infer` to generate a TypeScript type from the Zod schema
type Post = z.infer<ReturnType<typeof postsCollectionSchema>>;

// Export a single `collections` object to register your collection(s)
export const collections = {
  posts: postsCollection,
};

// Also export the TypeScript type
export type { Post };