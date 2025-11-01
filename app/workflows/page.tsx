import { Navigation } from "@/components/navigation"
import { WorkflowDiagram } from "@/components/workflow-diagram"
import { WorkflowStats } from "@/components/workflow-stats"
import { WorkflowHistory } from "@/components/workflow-history"

export default function WorkflowsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Multi-Agent Workflows</h1>
          <p className="text-muted-foreground">LangGraph orchestration and state management</p>
        </div>

        <WorkflowStats />
        <WorkflowDiagram />
        <WorkflowHistory />
      </main>
    </div>
  )
}
