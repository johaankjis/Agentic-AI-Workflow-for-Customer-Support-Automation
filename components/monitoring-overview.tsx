import { Card } from "@/components/ui/card"
import { Activity, Clock, AlertTriangle, CheckCircle2 } from "lucide-react"

export function MonitoringOverview() {
  const metrics = [
    {
      label: "System Uptime",
      value: "99.8%",
      icon: Activity,
      color: "text-success",
      bgColor: "bg-success/10",
      status: "Operational",
    },
    {
      label: "Avg Response Time",
      value: "2.4s",
      icon: Clock,
      color: "text-primary",
      bgColor: "bg-primary/10",
      status: "Within SLA",
    },
    {
      label: "Active Alerts",
      value: "2",
      icon: AlertTriangle,
      color: "text-chart-4",
      bgColor: "bg-chart-4/10",
      status: "Low Priority",
    },
    {
      label: "SLA Compliance",
      value: "98%",
      icon: CheckCircle2,
      color: "text-accent",
      bgColor: "bg-accent/10",
      status: "Excellent",
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
      {metrics.map((metric) => {
        const Icon = metric.icon
        return (
          <Card key={metric.label} className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${metric.bgColor}`}>
                <Icon className={`h-5 w-5 ${metric.color}`} />
              </div>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">{metric.label}</p>
              <p className="text-2xl font-bold text-foreground mb-1">{metric.value}</p>
              <p className="text-xs text-muted-foreground">{metric.status}</p>
            </div>
          </Card>
        )
      })}
    </div>
  )
}
