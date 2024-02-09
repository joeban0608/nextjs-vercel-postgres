export type FeedProps = {
  author: {
    name: string | null;
  } | null;
} & {
  id: string;
  title: string;
  content: string | null;
  published: boolean;
  authorId: string | null;
  createdAt: Date;
  updatedAt: Date;
};
