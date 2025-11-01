import { Card } from "@/components/ui/card"
import { Database, FileText, Zap, TrendingUp } from "lucide-react"

export function KnowledgeStats() {
  const stats = [
    {
      label: "Documents Indexed",
      value: "2,847",
      icon: FileText,
      color: "text-primary",
      bgColor: "bg-primary/10",
      change: "+124 this week",
    },
    {
      label: "Vector Embeddings",
      value: "45.2K",
      icon: Database,
      color: "text-accent",
      bgColor: "bg-accent/10",
      change: "FAISS index",
    },
    {
      label: "Avg Search Speed",
      value: "87ms",
      icon: Zap,
      color: "text-chart-3",
      bgColor: "bg-chart-3/10",
      change: "< 100ms target",
    },
    {
      label: "Retrieval Accuracy",
      value: "91%",
      icon: TrendingUp,
      color: "text-chart-4",
      bgColor: "bg-chart-4/10",
      change: "+28% improvement",
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
