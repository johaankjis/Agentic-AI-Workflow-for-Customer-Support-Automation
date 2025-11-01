"use client"

import { Card } from "@/components/ui/card"
import { TrendingUp } from "lucide-react"

export function AgentPerformance() {
  const performanceData = [
    { agent: "Triage Agent", accuracy: 94, change: "+2.3%" },
    { agent: "Retrieval Agent", accuracy: 91, change: "+1.8%" },
    { agent: "Response Agent", accuracy: 89, change: "+3.1%" },
    { agent: "Escalation Agent", accuracy: 96, change: "+0.9%" },
  ]

  return (
    <Card className="p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
          <TrendingUp className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-foreground">Performance Metrics</h2>
          <p className="text-sm text-muted-foreground">Last 7 days comparison</p>
        </div>
      </div>

      <div className="space-y-4">
        {performanceData.map((item) => (
          <div key={item.agent} className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-foreground">{item.agent}</span>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-foreground">{item.accuracy}%</span>
                <span className="text-xs text-success">{item.change}</span>
              </div>
            </div>
            <div className="h-2 rounded-full bg-secondary overflow-hidden">
              <div className="h-full bg-primary transition-all duration-500" style={{ width: `${item.accuracy}%` }} />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 rounded-lg bg-secondary/50">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Overall System Accuracy</span>
          <span className="text-xl font-bold text-foreground">92.5%</span>
        </div>
      </div>
    </Card>
  )
}
