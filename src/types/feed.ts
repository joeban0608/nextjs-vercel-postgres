export type FeedProps = {
  id: string;
  title: string;
  content: string;
  published: true;
  createdAt: Date;
  updatedAt: Date;
  authorId: string;
  author: {
    name: string;
  };
};
