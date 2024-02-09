import prisma from "@/lib/prisma";

export const getAllFeeds = async () => {
  const feeds = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  if (!feeds?.length) return [];

  return feeds;
};
