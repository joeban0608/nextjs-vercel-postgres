import Feed from "@/components/Feed";
import { getAllFeeds } from "@/lib/feedRequest";
import { FeedProps } from "@/types/feed";

export default async function Home() {
  const feeds = await getAllFeeds();
  return (
    <main className="flex flex-col p-4 gap-4">
      <div className="grid grid-cols-3 gap-4">
        {feeds.length ? (
          feeds?.map((feedInfo: FeedProps) => {
            return <Feed key={feedInfo.id} {...feedInfo} />;
          })
        ) : (
          <></>
        )}
      </div>
    </main>
  );
}
