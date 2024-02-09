import Feed from "@/components/Feed";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { FeedProps } from "@/types/feed";

// import Image from "next/image";
async function getFeeds() {
  const BASE_URL =
    process.env.NODE_ENV === "production"
      ? process.env.VERCEL_URL
      : "http://localhost:3000";
  const res = await fetch(`${BASE_URL}/api/feed-all`, {
    next: { revalidate: 10000 },
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  console.log("res", res);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to get feed-all");
  }

  return res.json();
}

export default async function Home() {
  const feeds = await getFeeds();
  console.log("feeds", feeds);
  return (
    <main className="flex flex-col p-4 gap-4">
      <div className="grid grid-cols-3 gap-4">
        {feeds.map((feedInfo: FeedProps) => {
          return <Feed key={feedInfo.id} {...feedInfo} />;
        })}
      </div>
    </main>
  );
}
