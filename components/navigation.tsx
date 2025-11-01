"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { LayoutDashboard, Ticket, Bot, Database, Activity, Workflow, Settings } from "lucide-react"

const navItems = [
  { href: "/", label: "Overview", icon: LayoutDashboard },
  { href: "/tickets", label: "Tickets", icon: Ticket },
  { href: "/agents", label: "Agents", icon: Bot },
  { href: "/knowledge", label: "Knowledge Base", icon: Database },
  { href: "/monitoring", label: "Monitoring", icon: Activity },
  { href: "/workflows", label: "Workflows", icon: Workflow },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="flex h-16 items-center border-b border-border bg-card px-6">
      <div className="flex items-center gap-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <Bot className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-lg font-semibold text-foreground">AgentFlow</span>
        </Link>

        <div className="flex items-center gap-1">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-secondary text-foreground"
                    : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground",
                )}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </Link>
            )
          })}
        </div>
      </div>

      <div className="ml-auto flex items-center gap-4">
        <button className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-secondary/50 hover:text-foreground">
          <Settings className="h-4 w-4" />
          Settings
        </button>
      </div>
    </nav>
  )
}
