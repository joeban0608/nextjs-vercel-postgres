"use client"; // Error components must be Client Components

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <Button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => {
            router.push("/");
          }
          // () => reset()
        }
      >
        Try again
      </Button>
    </div>
  );
}
