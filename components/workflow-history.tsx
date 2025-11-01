"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { History, CheckCircle2, XCircle, Clock } from "lucide-react"

interface WorkflowExecution {
  id: string
  ticketId: string
  status: "completed" | "failed" | "running"
  duration: string
  steps: number
  startTime: string
  agents: string[]
}

const executions: WorkflowExecution[] = [
  {
    id: "wf-1001",
    ticketId: "TKT-1001",
    status: "running",
    duration: "3.2s",
    steps: 5,
    startTime: "2 min ago",
    agents: ["Triage", "Retrieval", "Response"],
  },
  {
    id: "wf-1002",
    ticketId: "TKT-1002",
    status: "completed",
    duration: "5.8s",
    steps: 7,
    startTime: "5 min ago",
    agents: ["Triage", "Retrieval", "Response"],
  },
  {
    id: "wf-1003",
    ticketId: "TKT-1003",
    status: "completed",
    duration: "4.2s",
    steps: 6,
    startTime: "12 min ago",
    agents: ["Triage", "Response"],
  },
  {
    id: "wf-1004",
    ticketId: "TKT-1004",
    status: "completed",
    duration: "2.1s",
    steps: 4,
    startTime: "18 min ago",
    agents: ["Triage", "Escalation"],
  },
  {
    id: "wf-1005",
    ticketId: "TKT-1005",
    status: "completed",
    duration: "6.4s",
    steps: 8,
    startTime: "25 min ago",
    agents: ["Triage", "Retrieval", "Response"],
  },
]

const statusConfig = {
  completed: {
    icon: CheckCircle2,
    color: "text-success",
    badgeClass: "bg-success/10 text-success border-success/20",
  },
  failed: {
    icon: XCircle,
    color: "text-destructive",
    badgeClass: "bg-destructive/10 text-destructive border-destructive/20",
  },
  running: {
    icon: Clock,
    color: "text-primary",
    badgeClass: "bg-primary/10 text-primary border-primary/20",
  },
}

export function WorkflowHistory() {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
          <History className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-foreground">Execution History</h2>
          <p className="text-sm text-muted-foreground">Recent workflow completions</p>
        </div>
      </div>

      <div className="space-y-3">
        {executions.map((execution) => {
          const config = statusConfig[execution.status]
          const Icon = config.icon

          return (
            <div key={execution.id} className="p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3 flex-1">
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 shrink-0 ${
                      execution.status === "running" ? "animate-pulse" : ""
                    }`}
                  >
                    <Icon className={`h-4 w-4 ${config.color}`} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm font-mono font-medium text-foreground">{execution.ticketId}</span>
                      <Badge variant="outline" className={`text-xs ${config.badgeClass}`}>
                        {execution.status}
                      </Badge>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                      <span>{execution.steps} steps</span>
                      <span>•</span>
                      <span>{execution.duration}</span>
                      <span>•</span>
                      <span>{execution.startTime}</span>
                    </div>

                    <div className="flex flex-wrap gap-1 mt-2">
                      {execution.agents.map((agent) => (
                        <Badge key={agent} variant="outline" className="text-xs">
                          {agent}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </Card>
  )
}
