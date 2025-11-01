"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { XCircle, TrendingDown } from "lucide-react"

interface ErrorLog {
  id: string
  type: string
  message: string
  agent: string
  count: number
  lastOccurred: string
}

const errorLogs: ErrorLog[] = [
  {
    id: "1",
    type: "TimeoutError",
    message: "Vector search exceeded 100ms threshold",
    agent: "Retrieval Agent",
    count: 3,
    lastOccurred: "18 min ago",
  },
  {
    id: "2",
    type: "ClassificationError",
    message: "Low confidence score on ticket categorization",
    agent: "Triage Agent",
    count: 1,
    lastOccurred: "45 min ago",
  },
]

export function ErrorTracking() {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-destructive/10">
            <XCircle className="h-5 w-5 text-destructive" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-foreground">Error Tracking</h2>
            <p className="text-sm text-muted-foreground">Last 24 hours</p>
          </div>
        </div>

        <Badge variant="outline" className="bg-success/10 text-success border-success/20">
          <TrendingDown className="h-3 w-3 mr-1" />
          -35% errors
        </Badge>
      </div>

      <div className="space-y-3">
        {errorLogs.map((error) => (
          <div key={error.id} className="p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors">
            <div className="flex items-start justify-between gap-4 mb-2">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <Badge
                    variant="outline"
                    className="text-xs font-mono bg-destructive/10 text-destructive border-destructive/20"
                  >
                    {error.type}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {error.agent}
                  </Badge>
                </div>

                <p className="text-sm text-foreground leading-relaxed text-pretty">{error.message}</p>
              </div>

              <div className="text-right shrink-0">
                <p className="text-xs text-muted-foreground mb-1">Occurrences</p>
                <p className="text-lg font-bold text-foreground">{error.count}</p>
              </div>
            </div>

            <span className="text-xs text-muted-foreground">Last occurred {error.lastOccurred}</span>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 rounded-lg bg-secondary/50">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Total Errors (24h)</span>
          <span className="text-lg font-bold text-foreground">4</span>
        </div>
      </div>
    </Card>
  )
}
