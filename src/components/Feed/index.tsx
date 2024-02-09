import React from "react";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";
import { FeedProps } from "@/types/feed";

const Feed = ({
  id,
  title,
  content,
  published,
  authorId,
  updatedAt,
  author,
}: FeedProps) => {
  typeof updatedAt;
  const date = new Date(updatedAt);

  const year = date.getFullYear(); // 獲取年份
  const month = date.getMonth() + 1; // 獲取月份（注意 JavaScript 的月份是從 0 開始的，所以要加 1）
  const day = date.getDate(); // 獲取日期
  const hours = date.getHours(); // 獲取小時
  const minutes = date.getMinutes(); // 獲取分鐘
  const seconds = date.getSeconds(); // 獲取秒

  const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  return (
    <Card className="flex flex-col w-full p-8 gap-4">
      <CardTitle>{title}</CardTitle>
      <CardDescription>
        <div className="flex justify-between">
          <span>By {author.name}</span>
          <span>Updated: {formattedDate}</span>
        </div>
      </CardDescription>
      <CardContent className="p-0">{content}</CardContent>
    </Card>
  );
};

export default Feed;
