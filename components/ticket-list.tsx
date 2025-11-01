"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, ArrowUpRight, Bot } from "lucide-react"

type TicketStatus = "open" | "in-progress" | "resolved" | "escalated"
type TicketPriority = "low" | "medium" | "high" | "critical"
type TicketCategory = "technical" | "billing" | "account" | "feature-request" | "bug"

interface Ticket {
  id: string
  title: string
  description: string
  status: TicketStatus
  priority: TicketPriority
  category: TicketCategory
  assignedAgent: string
  createdAt: string
  confidence: number
}

const mockTickets: Ticket[] = [
  {
    id: "TKT-1001",
    title: "Unable to login to account",
    description: "User reports authentication error when trying to access dashboard",
    status: "in-progress",
    priority: "high",
    category: "technical",
    assignedAgent: "Triage Agent",
    createdAt: "2 min ago",
    confidence: 94,
  },
  {
    id: "TKT-1002",
    title: "Billing discrepancy on invoice",
    description: "Customer noticed incorrect charges on monthly invoice",
    status: "open",
    priority: "medium",
    category: "billing",
    assignedAgent: "Response Agent",
    createdAt: "5 min ago",
    confidence: 91,
  },
  {
    id: "TKT-1003",
    title: "Feature request: Dark mode",
    description: "User requesting dark mode support for mobile app",
    status: "open",
    priority: "low",
    category: "feature-request",
    assignedAgent: "Triage Agent",
    createdAt: "12 min ago",
    confidence: 88,
  },
  {
    id: "TKT-1004",
    title: "Critical: Payment processing failure",
    description: "Multiple users unable to complete checkout process",
    status: "escalated",
    priority: "critical",
    category: "technical",
    assignedAgent: "Escalation Agent",
    createdAt: "18 min ago",
    confidence: 96,
  },
  {
    id: "TKT-1005",
    title: "Account deletion request",
    description: "User wants to permanently delete their account and data",
    status: "in-progress",
    priority: "medium",
    category: "account",
    assignedAgent: "Response Agent",
    createdAt: "25 min ago",
    confidence: 89,
  },
  {
    id: "TKT-1006",
    title: "Bug: Dashboard not loading",
    description: "Dashboard shows blank screen after recent update",
    status: "resolved",
    priority: "high",
    category: "bug",
    assignedAgent: "Response Agent",
    createdAt: "1 hour ago",
    confidence: 92,
  },
]

const statusColors: Record<TicketStatus, string> = {
  open: "bg-chart-4/10 text-chart-4 border-chart-4/20",
  "in-progress": "bg-primary/10 text-primary border-primary/20",
  resolved: "bg-success/10 text-success border-success/20",
  escalated: "bg-destructive/10 text-destructive border-destructive/20",
}

const priorityColors: Record<TicketPriority, string> = {
  low: "bg-muted text-muted-foreground border-border",
  medium: "bg-chart-4/10 text-chart-4 border-chart-4/20",
  high: "bg-chart-5/10 text-chart-5 border-chart-5/20",
  critical: "bg-destructive/10 text-destructive border-destructive/20",
}

export function TicketList() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedStatus, setSelectedStatus] = useState<TicketStatus | "all">("all")

  const filteredTickets = mockTickets.filter((ticket) => {
    const matchesSearch =
      ticket.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticket.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = selectedStatus === "all" || ticket.status === selectedStatus
    return matchesSearch && matchesStatus
  })

  return (
    <div className="space-y-4">
      <Card className="p-4">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search tickets..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
            />
          </div>

          <div className="flex gap-2">
            {(["all", "open", "in-progress", "resolved", "escalated"] as const).map((status) => (
              <Button
                key={status}
                variant={selectedStatus === status ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedStatus(status)}
                className="capitalize"
              >
                {status === "all" ? "All" : status.replace("-", " ")}
              </Button>
            ))}
          </div>
        </div>
      </Card>

      <div className="space-y-3">
        {filteredTickets.map((ticket) => (
          <Card key={ticket.id} className="p-5 hover:bg-secondary/30 transition-colors cursor-pointer">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 shrink-0">
                    <Bot className="h-5 w-5 text-primary" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-mono text-muted-foreground">{ticket.id}</span>
                      <Badge variant="outline" className={statusColors[ticket.status]}>
                        {ticket.status.replace("-", " ")}
                      </Badge>
                      <Badge variant="outline" className={priorityColors[ticket.priority]}>
                        {ticket.priority}
                      </Badge>
                    </div>

                    <h3 className="text-base font-semibold text-foreground mb-1 text-pretty">{ticket.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed text-pretty">{ticket.description}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-xs text-muted-foreground pl-[52px]">
                  <span className="flex items-center gap-1">
                    <Bot className="h-3 w-3" />
                    {ticket.assignedAgent}
                  </span>
                  <span>•</span>
                  <span>Confidence: {ticket.confidence}%</span>
                  <span>•</span>
                  <span>{ticket.createdAt}</span>
                  <span>•</span>
                  <span className="capitalize">{ticket.category.replace("-", " ")}</span>
                </div>
              </div>

              <Button variant="ghost" size="sm" className="shrink-0">
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {filteredTickets.length === 0 && (
        <Card className="p-12">
          <div className="text-center">
            <p className="text-muted-foreground">No tickets found matching your criteria</p>
          </div>
        </Card>
      )}
    </div>
  )
}
