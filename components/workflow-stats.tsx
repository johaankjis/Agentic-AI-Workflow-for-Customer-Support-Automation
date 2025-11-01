import { Card } from "@/components/ui/card"
import { Workflow, Clock, CheckCircle2, GitBranch } from "lucide-react"

export function WorkflowStats() {
  const stats = [
    {
      label: "Active Workflows",
      value: "12",
      icon: Workflow,
      color: "text-primary",
      bgColor: "bg-primary/10",
      change: "Running now",
    },
    {
      label: "Avg Completion Time",
      value: "6 min",
      icon: Clock,
      color: "text-accent",
      bgColor: "bg-accent/10",
      change: "67% faster",
    },
    {
      label: "Success Rate",
      value: "96%",
      icon: CheckCircle2,
      color: "text-success",
      bgColor: "bg-success/10",
      change: "Last 24h",
    },
    {
      label: "State Transitions",
      value: "2,847",
      icon: GitBranch,
      color: "text-chart-3",
      bgColor: "bg-chart-3/10",
      change: "Today",
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
      {stats.map((stat) => {
        const Icon = stat.icon
        return (
          <Card key={stat.label} className="p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${stat.bgColor}`}>
                <Icon className={`h-5 w-5 ${stat.color}`} />
              </div>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
              <p className="text-2xl font-bold text-foreground mb-1">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.change}</p>
            </div>
          </Card>
        )
      })}
    </div>
  )
}
