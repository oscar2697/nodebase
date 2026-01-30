'use client'

import LogoutButton from "./logout"
import { useTRPC } from "@/trpc/client"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

export default function Home() {
  const trpc = useTRPC()
  const queryClient = useQueryClient()
  const { data } = useQuery(trpc.getWorkflows.queryOptions())

  const testAi = useMutation(trpc.testAi.mutationOptions({
    onSuccess: () => {
      toast.success('AI Job queued')
    }
  }))

  const create = useMutation(trpc.createWorkflow.mutationOptions({
    onSuccess: () => {
      toast.success('Job queued')
    }
  }))

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black flex-col gap-y-6 text-white">
      protected server

      <div>
        {JSON.stringify(data, null, 2)}
      </div>

      <Button
        disabled={testAi.isPending}
        onClick={() => testAi.mutate()}
      >
        Test AI
      </Button>

      <Button
        disabled={create.isPending}
        onClick={() => create.mutate()}
      >
        Create Workflow
      </Button>

      <LogoutButton />
    </div>
  )
}
