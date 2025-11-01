"use client"

import { Card } from "@/components/ui/card"
import { Activity, ArrowRight } from "lucide-react"

export function AgentActivity() {
  const activities = [
    {
      agent: "Triage Agent",
      action: "Classified ticket TKT-1001 as high priority technical issue",
      time: "2 min ago",
      status: "success",
    },
    {
      agent: "Retrieval Agent",
      action: "Retrieved 5 relevant documents for billing query",
      time: "3 min ago",
      status: "success",
    },
    {
      agent: "Response Agent",
      action: "Generated response for account deletion request",
      time: "5 min ago",
      status: "success",
    },
    {
      agent: "Escalation Agent",
      action: "Escalated payment processing failure to human agent",
      time: "8 min ago",
      status: "escalated",
    },
    {
      agent: "Triage Agent",
      action: "Routed feature request to product team",
      time: "12 min ago",
      status: "success",
    },
    {
      agent: "Response Agent",
      action: "Completed automated response for login issue",
      time: "15 min ago",
      status: "success",
    },
  ]

  return (
    <Card className="p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
          <Activity className="h-5 w-5 text-accent" />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-foreground">Recent Activity</h2>
          <p className="text-sm text-muted-foreground">Real-time agent operations</p>
        </div>
      </div>

      <div className="space-y-3">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="flex items-start gap-3 p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors"
          >
            <div
              className={`h-2 w-2 rounded-full mt-2 shrink-0 ${
                activity.status === "escalated" ? "bg-chart-5" : "bg-success"
              }`}
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-medium text-foreground">{activity.agent}</span>
                <ArrowRight className="h-3 w-3 text-muted-foreground" />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed text-pretty">{activity.action}</p>
              <span className="text-xs text-muted-foreground mt-1 inline-block">{activity.time}</span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
