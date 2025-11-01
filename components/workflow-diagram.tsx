"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Circle } from "lucide-react"

interface WorkflowNode {
  id: string
  label: string
  type: "start" | "agent" | "decision" | "tool" | "end"
  status: "active" | "completed" | "pending" | "idle"
}

interface WorkflowEdge {
  from: string
  to: string
  label?: string
}

const nodes: WorkflowNode[] = [
  { id: "start", label: "Ticket Received", type: "start", status: "completed" },
  { id: "triage", label: "Triage Agent", type: "agent", status: "completed" },
  { id: "decision", label: "Route Decision", type: "decision", status: "completed" },
  { id: "retrieval", label: "Retrieval Agent", type: "agent", status: "active" },
  { id: "vector-search", label: "Vector Search", type: "tool", status: "active" },
  { id: "response", label: "Response Agent", type: "agent", status: "pending" },
  { id: "escalation", label: "Escalation Check", type: "decision", status: "pending" },
  { id: "end", label: "Ticket Resolved", type: "end", status: "idle" },
]

const edges: WorkflowEdge[] = [
  { from: "start", to: "triage" },
  { from: "triage", to: "decision" },
  { from: "decision", to: "retrieval", label: "Standard" },
  { from: "retrieval", to: "vector-search" },
  { from: "vector-search", to: "response" },
  { from: "response", to: "escalation" },
  { from: "escalation", to: "end", label: "Auto-resolve" },
]

const statusColors = {
  active: "bg-primary text-primary-foreground border-primary",
  completed: "bg-success/20 text-success border-success",
  pending: "bg-muted text-muted-foreground border-border",
  idle: "bg-secondary text-secondary-foreground border-border",
}

const typeIcons = {
  start: "🎯",
  agent: "🤖",
  decision: "🔀",
  tool: "🔧",
  end: "✓",
}

export function WorkflowDiagram() {
  return (
    <Card className="p-6 mb-6">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-foreground mb-2">Workflow Execution Graph</h2>
        <p className="text-sm text-muted-foreground">Real-time LangGraph state visualization for ticket TKT-1001</p>
      </div>

      <div className="space-y-4">
        {/* Workflow visualization */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {nodes.slice(0, 4).map((node) => (
            <div key={node.id} className="space-y-2">
              <Badge
                variant="outline"
                className={`w-full justify-center py-3 text-sm font-medium ${statusColors[node.status]}`}
              >
                <span className="mr-2">{typeIcons[node.type]}</span>
                {node.label}
              </Badge>
              {node.id !== "decision" && (
                <div className="flex justify-center">
                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {nodes.slice(4).map((node) => (
            <div key={node.id} className="space-y-2">
              <Badge
                variant="outline"
                className={`w-full justify-center py-3 text-sm font-medium ${statusColors[node.status]}`}
              >
                <span className="mr-2">{typeIcons[node.type]}</span>
                {node.label}
              </Badge>
              {node.id !== "end" && (
                <div className="flex justify-center">
                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 p-4 rounded-lg bg-secondary/50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Circle className="h-3 w-3 fill-success text-success" />
              <span className="text-xs text-muted-foreground">Completed</span>
            </div>
            <div className="flex items-center gap-2">
              <Circle className="h-3 w-3 fill-primary text-primary animate-pulse" />
              <span className="text-xs text-muted-foreground">Active</span>
            </div>
            <div className="flex items-center gap-2">
              <Circle className="h-3 w-3 fill-muted text-muted" />
              <span className="text-xs text-muted-foreground">Pending</span>
            </div>
          </div>
          <span className="text-xs text-muted-foreground">Elapsed: 3.2s / Est. Total: 6.1s</span>
        </div>
      </div>
    </Card>
  )
}
