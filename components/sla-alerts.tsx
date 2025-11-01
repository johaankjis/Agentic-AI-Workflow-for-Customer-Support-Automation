"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, AlertCircle, Info } from "lucide-react"

interface Alert {
  id: string
  severity: "critical" | "warning" | "info"
  title: string
  description: string
  timestamp: string
  metric: string
}

const alerts: Alert[] = [
  {
    id: "1",
    severity: "warning",
    title: "Response latency approaching threshold",
    description: "Response Agent p95 latency at 4.2s (SLA: 5s)",
    timestamp: "5 min ago",
    metric: "Latency",
  },
  {
    id: "2",
    severity: "info",
    title: "High ticket volume detected",
    description: "Incoming ticket rate 20% above baseline",
    timestamp: "12 min ago",
    metric: "Throughput",
  },
]

const severityConfig = {
  critical: {
    icon: AlertTriangle,
    color: "text-destructive",
    bgColor: "bg-destructive/10",
    badgeClass: "bg-destructive/10 text-destructive border-destructive/20",
  },
  warning: {
    icon: AlertCircle,
    color: "text-chart-4",
    bgColor: "bg-chart-4/10",
    badgeClass: "bg-chart-4/10 text-chart-4 border-chart-4/20",
  },
  info: {
    icon: Info,
    color: "text-primary",
    bgColor: "bg-primary/10",
    badgeClass: "bg-primary/10 text-primary border-primary/20",
  },
}

export function SLAAlerts() {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-chart-4/10">
          <AlertTriangle className="h-5 w-5 text-chart-4" />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-foreground">SLA Alerts</h2>
          <p className="text-sm text-muted-foreground">Active system notifications</p>
        </div>
      </div>

      <div className="space-y-3">
        {alerts.map((alert) => {
          const config = severityConfig[alert.severity]
          const Icon = config.icon

          return (
            <div key={alert.id} className="p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors">
              <div className="flex items-start gap-3">
                <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${config.bgColor} shrink-0`}>
                  <Icon className={`h-4 w-4 ${config.color}`} />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className={`text-xs ${config.badgeClass}`}>
                      {alert.severity}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {alert.metric}
                    </Badge>
                  </div>

                  <h3 className="text-sm font-semibold text-foreground mb-1 text-pretty">{alert.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed text-pretty">{alert.description}</p>

                  <span className="text-xs text-muted-foreground mt-2 inline-block">{alert.timestamp}</span>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {alerts.length === 0 && (
        <div className="p-8 text-center">
          <p className="text-muted-foreground">No active alerts</p>
        </div>
      )}
    </Card>
  )
}
