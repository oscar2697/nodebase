import { requireAuth } from "@/lib/auth-utils";
import { caller } from "@/trpc/server";
import LogoutButton from "./logout";

export default async function Home() {
  await requireAuth()

  const data = await caller.getUsers()

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black flex-col gap-y-6">
      protected server

      <div>
        {JSON.stringify(data, null, 2)}
      </div>

      <LogoutButton />
    </div>
  );
}
