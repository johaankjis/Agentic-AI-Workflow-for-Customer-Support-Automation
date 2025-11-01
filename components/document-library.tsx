"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FileText, Upload, RefreshCw } from "lucide-react"

interface Document {
  id: string
  title: string
  type: string
  category: string
  embeddings: number
  lastUpdated: string
  status: "indexed" | "processing" | "pending"
}

const documents: Document[] = [
  {
    id: "1",
    title: "Product Documentation v2.4",
    type: "PDF",
    category: "Technical",
    embeddings: 1247,
    lastUpdated: "2 hours ago",
    status: "indexed",
  },
  {
    id: "2",
    title: "Customer Support FAQ Database",
    type: "JSON",
    category: "Support",
    embeddings: 3891,
    lastUpdated: "5 hours ago",
    status: "indexed",
  },
  {
    id: "3",
    title: "Historical Ticket Archive Q4 2024",
    type: "CSV",
    category: "Historical",
    embeddings: 8234,
    lastUpdated: "1 day ago",
    status: "indexed",
  },
  {
    id: "4",
    title: "Billing & Payment Policies",
    type: "Markdown",
    category: "Billing",
    embeddings: 456,
    lastUpdated: "3 days ago",
    status: "indexed",
  },
  {
    id: "5",
    title: "API Integration Guide",
    type: "PDF",
    category: "Technical",
    embeddings: 892,
    lastUpdated: "1 week ago",
    status: "processing",
  },
]

const statusColors = {
  indexed: "bg-success/10 text-success border-success/20",
  processing: "bg-primary/10 text-primary border-primary/20",
  pending: "bg-muted text-muted-foreground border-border",
}

export function DocumentLibrary() {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
            <FileText className="h-5 w-5 text-accent" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-foreground">Document Library</h2>
            <p className="text-sm text-muted-foreground">Indexed knowledge sources</p>
          </div>
        </div>

        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <RefreshCw className="h-4 w-4 mr-2" />
            Reindex
          </Button>
          <Button size="sm">
            <Upload className="h-4 w-4 mr-2" />
            Upload
          </Button>
        </div>
      </div>

      <div className="space-y-3">
        {documents.map((doc) => (
          <div
            key={doc.id}
            className="flex items-center justify-between p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors"
          >
            <div className="flex items-center gap-4 flex-1">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 shrink-0">
                <FileText className="h-5 w-5 text-primary" />
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold text-foreground mb-1">{doc.title}</h3>
                <div className="flex items-center gap-2 flex-wrap">
                  <Badge variant="outline" className="text-xs">
                    {doc.type}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {doc.category}
                  </Badge>
                  <Badge variant="outline" className={`text-xs ${statusColors[doc.status]}`}>
                    {doc.status}
                  </Badge>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6 shrink-0">
              <div className="text-right">
                <p className="text-xs text-muted-foreground mb-1">Embeddings</p>
                <p className="text-sm font-bold text-foreground">{doc.embeddings.toLocaleString()}</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-muted-foreground mb-1">Updated</p>
                <p className="text-sm text-foreground">{doc.lastUpdated}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
