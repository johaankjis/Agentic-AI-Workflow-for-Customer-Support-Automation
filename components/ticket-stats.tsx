import { Card } from "@/components/ui/card"
import { AlertCircle, CheckCircle2, Clock, Loader2 } from "lucide-react"

export function TicketStats() {
  const stats = [
    {
      label: "Open Tickets",
      value: "24",
      icon: AlertCircle,
      color: "text-chart-4",
      bgColor: "bg-chart-4/10",
    },
    {
      label: "In Progress",
      value: "12",
      icon: Loader2,
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      label: "Resolved Today",
      value: "48",
      icon: CheckCircle2,
      color: "text-success",
      bgColor: "bg-success/10",
    },
    {
      label: "Avg Response Time",
      value: "2.4s",
      icon: Clock,
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
      {stats.map((stat) => {
        const Icon = stat.icon
        return (
          <Card key={stat.label} className="p-4">
            <div className="flex items-center gap-3">
              <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${stat.bgColor}`}>
                <Icon className={`h-5 w-5 ${stat.color}`} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              </div>
            </div>
          </Card>
        )
      })}
    </div>
  )
}
