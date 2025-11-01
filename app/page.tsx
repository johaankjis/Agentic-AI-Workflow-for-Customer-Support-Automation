import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Activity, Bot, CheckCircle2, Clock, TrendingUp, Zap } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">AI Customer Support Automation</h1>
          <p className="text-muted-foreground text-balance">
            Multi-agent system for automated ticket triage, routing, and response generation
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Zap className="h-5 w-5 text-primary" />
              </div>
              <span className="text-xs font-medium text-success">+60%</span>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Manual Routing Reduction</p>
              <p className="text-2xl font-bold text-foreground">60%</p>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                <CheckCircle2 className="h-5 w-5 text-accent" />
              </div>
              <span className="text-xs font-medium text-success">+28%</span>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Response Accuracy</p>
              <p className="text-2xl font-bold text-foreground">92%</p>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-chart-3/10">
                <Clock className="h-5 w-5 text-chart-3" />
              </div>
              <span className="text-xs font-medium text-success">-67%</span>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Avg Resolution Time</p>
              <p className="text-2xl font-bold text-foreground">6 min</p>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-chart-4/10">
                <TrendingUp className="h-5 w-5 text-chart-4" />
              </div>
              <span className="text-xs font-medium text-success">-35%</span>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Error Rate Reduction</p>
              <p className="text-2xl font-bold text-foreground">35%</p>
            </div>
          </Card>
        </div>

        {/* System Overview */}
        <div className="grid gap-6 lg:grid-cols-2 mb-8">
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Bot className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-foreground">Active Agents</h2>
                <p className="text-sm text-muted-foreground">Multi-agent orchestration system</p>
              </div>
            </div>

            <div className="space-y-4">
              {[
                { name: "Triage Agent", status: "Active", accuracy: "94%" },
                { name: "Retrieval Agent", status: "Active", accuracy: "91%" },
                { name: "Response Agent", status: "Active", accuracy: "89%" },
                { name: "Escalation Agent", status: "Active", accuracy: "96%" },
              ].map((agent) => (
                <div key={agent.name} className="flex items-center justify-between p-3 rounded-lg bg-secondary/50">
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-success animate-pulse" />
                    <span className="text-sm font-medium text-foreground">{agent.name}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-xs text-muted-foreground">{agent.status}</span>
                    <span className="text-sm font-medium text-foreground">{agent.accuracy}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                <Activity className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-foreground">System Health</h2>
                <p className="text-sm text-muted-foreground">Real-time performance metrics</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Agent Accuracy</span>
                  <span className="text-sm font-medium text-foreground">92%</span>
                </div>
                <div className="h-2 rounded-full bg-secondary overflow-hidden">
                  <div className="h-full bg-primary" style={{ width: "92%" }} />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Response Latency</span>
                  <span className="text-sm font-medium text-foreground">2.4s</span>
                </div>
                <div className="h-2 rounded-full bg-secondary overflow-hidden">
                  <div className="h-full bg-accent" style={{ width: "80%" }} />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Vector Search Speed</span>
                  <span className="text-sm font-medium text-foreground">87ms</span>
                </div>
                <div className="h-2 rounded-full bg-secondary overflow-hidden">
                  <div className="h-full bg-chart-3" style={{ width: "95%" }} />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">SLA Compliance</span>
                  <span className="text-sm font-medium text-foreground">98%</span>
                </div>
                <div className="h-2 rounded-full bg-secondary overflow-hidden">
                  <div className="h-full bg-chart-4" style={{ width: "98%" }} />
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Feature Highlights */}
        <div className="grid gap-4 md:grid-cols-3">
          <Card className="p-6">
            <h3 className="text-sm font-semibold text-foreground mb-2">Agentic Triage</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Function-calling agents for automated ticket classification and workflow execution
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="text-sm font-semibold text-foreground mb-2">RAG with FAISS</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Vector search of support docs, historical tickets, and FAQs for grounded responses
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="text-sm font-semibold text-foreground mb-2">LangGraph Orchestration</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Multi-agent coordination with dynamic tool selection and state management
            </p>
          </Card>
        </div>
      </main>
    </div>
  )
}
