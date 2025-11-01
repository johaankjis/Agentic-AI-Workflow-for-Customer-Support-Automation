import { Navigation } from "@/components/navigation"
import { AgentGrid } from "@/components/agent-grid"
import { AgentPerformance } from "@/components/agent-performance"
import { AgentActivity } from "@/components/agent-activity"

export default function AgentsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Agent Processing System</h1>
          <p className="text-muted-foreground">Multi-agent orchestration with LangChain and LangGraph</p>
        </div>

        <AgentGrid />

        <div className="grid gap-6 lg:grid-cols-2 mt-6">
          <AgentPerformance />
          <AgentActivity />
        </div>
      </main>
    </div>
  )
}
