import { Navigation } from "@/components/navigation"
import { MonitoringOverview } from "@/components/monitoring-overview"
import { PerformanceCharts } from "@/components/performance-charts"
import { SLAAlerts } from "@/components/sla-alerts"
import { ErrorTracking } from "@/components/error-tracking"

export default function MonitoringPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Monitoring & Analytics</h1>
          <p className="text-muted-foreground">Real-time observability and SLA enforcement</p>
        </div>

        <MonitoringOverview />
        <PerformanceCharts />

        <div className="grid gap-6 lg:grid-cols-2 mt-6">
          <SLAAlerts />
          <ErrorTracking />
        </div>
      </main>
    </div>
  )
}
