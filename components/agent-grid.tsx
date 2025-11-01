import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, MessageSquare, AlertTriangle, Zap } from "lucide-react"

const agents = [
  {
    name: "Triage Agent",
    description: "Classifies incoming tickets and determines routing strategy",
    icon: Zap,
    status: "active",
    accuracy: 94,
    avgLatency: "1.2s",
    tasksProcessed: 1247,
    tools: ["ticket-classifier", "priority-detector", "category-mapper"],
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    name: "Retrieval Agent",
    description: "Searches knowledge base using FAISS vector embeddings",
    icon: Search,
    status: "active",
    accuracy: 91,
    avgLatency: "87ms",
    tasksProcessed: 2891,
    tools: ["vector-search", "semantic-retrieval", "context-ranker"],
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    name: "Response Agent",
    description: "Generates contextual responses using RAG pipeline",
    icon: MessageSquare,
    status: "active",
    accuracy: 89,
    avgLatency: "2.8s",
    tasksProcessed: 1653,
    tools: ["llm-generator", "response-formatter", "tone-adjuster"],
    color: "text-chart-3",
    bgColor: "bg-chart-3/10",
  },
  {
    name: "Escalation Agent",
    description: "Identifies complex cases requiring human intervention",
    icon: AlertTriangle,
    status: "active",
    accuracy: 96,
    avgLatency: "0.9s",
    tasksProcessed: 342,
    tools: ["complexity-scorer", "sentiment-analyzer", "escalation-router"],
    color: "text-chart-5",
    bgColor: "bg-chart-5/10",
  },
]

export function AgentGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {agents.map((agent) => {
        const Icon = agent.icon
        return (
          <Card key={agent.name} className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${agent.bgColor}`}>
                  <Icon className={`h-6 w-6 ${agent.color}`} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{agent.name}</h3>
                  <Badge variant="outline" className="bg-success/10 text-success border-success/20 mt-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-success mr-1.5 animate-pulse" />
                    {agent.status}
                  </Badge>
                </div>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{agent.description}</p>

            <div className="grid grid-cols-3 gap-4 mb-4 p-3 rounded-lg bg-secondary/50">
              <div>
                <p className="text-xs text-muted-foreground mb-1">Accuracy</p>
                <p className="text-lg font-bold text-foreground">{agent.accuracy}%</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Latency</p>
                <p className="text-lg font-bold text-foreground">{agent.avgLatency}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Processed</p>
                <p className="text-lg font-bold text-foreground">{agent.tasksProcessed.toLocaleString()}</p>
              </div>
            </div>

            <div>
              <p className="text-xs font-medium text-muted-foreground mb-2">Available Tools</p>
              <div className="flex flex-wrap gap-2">
                {agent.tools.map((tool) => (
                  <Badge key={tool} variant="outline" className="text-xs font-mono">
                    {tool}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>
        )
      })}
    </div>
  )
}
