import { Navigation } from "@/components/navigation"
import { TicketList } from "@/components/ticket-list"
import { TicketStats } from "@/components/ticket-stats"
import { NewTicketDialog } from "@/components/new-ticket-dialog"

export default function TicketsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto p-6">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Ticket Management</h1>
            <p className="text-muted-foreground">AI-powered triage and automated routing system</p>
          </div>
          <NewTicketDialog />
        </div>

        <TicketStats />
        <TicketList />
      </main>
    </div>
  )
}
