"use client"

import { Card } from "@/components/ui/card"
import { TrendingUp, Zap } from "lucide-react"

export function PerformanceCharts() {
  const throughputData = [
    { time: "00:00", requests: 1200 },
    { time: "04:00", requests: 800 },
    { time: "08:00", requests: 2400 },
    { time: "12:00", requests: 3200 },
    { time: "16:00", requests: 2800 },
    { time: "20:00", requests: 1600 },
  ]

  const latencyData = [
    { agent: "Triage", p50: 1.2, p95: 2.1, p99: 3.4 },
    { agent: "Retrieval", p50: 0.087, p95: 0.15, p99: 0.28 },
    { agent: "Response", p50: 2.8, p95: 4.2, p99: 6.1 },
    { agent: "Escalation", p50: 0.9, p95: 1.5, p99: 2.3 },
  ]

  const maxRequests = Math.max(...throughputData.map((d) => d.requests))

  return (
    <div className="grid gap-6 lg:grid-cols-2 mb-6">
      <Card className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
            <TrendingUp className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-foreground">Request Throughput</h2>
            <p className="text-sm text-muted-foreground">Last 24 hours</p>
          </div>
        </div>

        <div className="space-y-4">
          {throughputData.map((data, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground font-mono">{data.time}</span>
                <span className="font-medium text-foreground">{data.requests.toLocaleString()} req</span>
              </div>
              <div className="h-2 rounded-full bg-secondary overflow-hidden">
                <div
                  className="h-full bg-primary transition-all duration-500"
                  style={{ width: `${(data.requests / maxRequests) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 rounded-lg bg-secondary/50">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Peak Throughput</span>
            <span className="text-lg font-bold text-foreground">3,200 req/hr</span>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
            <Zap className="h-5 w-5 text-accent" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-foreground">Latency Percentiles</h2>
            <p className="text-sm text-muted-foreground">Response time distribution</p>
          </div>
        </div>

        <div className="space-y-4">
          {latencyData.map((data) => (
            <div key={data.agent} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-foreground">{data.agent} Agent</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div className="p-2 rounded-lg bg-secondary/50 text-center">
                  <p className="text-xs text-muted-foreground mb-1">p50</p>
                  <p className="text-sm font-bold text-foreground">
                    {data.p50 < 1 ? `${data.p50 * 1000}ms` : `${data.p50}s`}
                  </p>
                </div>
                <div className="p-2 rounded-lg bg-secondary/50 text-center">
                  <p className="text-xs text-muted-foreground mb-1">p95</p>
                  <p className="text-sm font-bold text-foreground">
                    {data.p95 < 1 ? `${data.p95 * 1000}ms` : `${data.p95}s`}
                  </p>
                </div>
                <div className="p-2 rounded-lg bg-secondary/50 text-center">
                  <p className="text-xs text-muted-foreground mb-1">p99</p>
                  <p className="text-sm font-bold text-foreground">
                    {data.p99 < 1 ? `${data.p99 * 1000}ms` : `${data.p99}s`}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
