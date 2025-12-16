import { getQueryClient, trpc } from "@/trpc/server";
import { Client } from "./client";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { Suspense } from "react";

export default async function Home() {
  const query = getQueryClient()

  void query.prefetchQuery(trpc.getUsers.queryOptions())

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <HydrationBoundary state={dehydrate(query)}>
        <Suspense fallback={<p>Loading...</p>}>
          <Client />
        </Suspense>
      </HydrationBoundary>
    </div>
  );
}
