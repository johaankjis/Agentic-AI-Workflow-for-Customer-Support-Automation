"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, Sparkles } from "lucide-react"

interface SearchResult {
  id: string
  title: string
  content: string
  similarity: number
  source: string
  category: string
}

const mockResults: SearchResult[] = [
  {
    id: "doc-1",
    title: "Authentication Troubleshooting Guide",
    content:
      "If users are experiencing login issues, first verify that their credentials are correct. Check for any account lockouts or password expiration...",
    similarity: 0.94,
    source: "Support Documentation",
    category: "Technical",
  },
  {
    id: "doc-2",
    title: "Common Login Error Messages",
    content:
      "Error 401: Invalid credentials - This typically indicates incorrect username or password. Error 403: Account locked - User has exceeded maximum login attempts...",
    similarity: 0.89,
    source: "FAQ Database",
    category: "Technical",
  },
  {
    id: "doc-3",
    title: "Password Reset Procedures",
    content:
      "To reset a user's password, navigate to the admin panel and select the user account. Click 'Reset Password' and follow the email verification steps...",
    similarity: 0.85,
    source: "Internal Wiki",
    category: "Account Management",
  },
]

export function VectorSearch() {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchResult[]>([])
  const [isSearching, setIsSearching] = useState(false)

  const handleSearch = async () => {
    if (!query.trim()) return

    setIsSearching(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 800))
    setResults(mockResults)
    setIsSearching(false)
  }

  return (
    <div className="space-y-4 mb-6">
      <Card className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
            <Sparkles className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-foreground">Semantic Vector Search</h2>
            <p className="text-sm text-muted-foreground">Query the FAISS knowledge base</p>
          </div>
        </div>

        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search knowledge base using semantic similarity..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              className="pl-9"
            />
          </div>
          <Button onClick={handleSearch} disabled={isSearching}>
            {isSearching ? "Searching..." : "Search"}
          </Button>
        </div>

        {results.length > 0 && (
          <div className="mt-4 text-sm text-muted-foreground">Found {results.length} relevant documents in 87ms</div>
        )}
      </Card>

      {results.length > 0 && (
        <div className="space-y-3">
          {results.map((result) => (
            <Card key={result.id} className="p-5 hover:bg-secondary/30 transition-colors">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-foreground mb-1 text-pretty">{result.title}</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className="text-xs">
                      {result.source}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {result.category}
                    </Badge>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-xs text-muted-foreground mb-1">Similarity</div>
                  <div className="text-lg font-bold text-primary">{(result.similarity * 100).toFixed(0)}%</div>
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed text-pretty">{result.content}</p>

              <div className="mt-3 pt-3 border-t border-border">
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-1.5 rounded-full bg-secondary overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: `${result.similarity * 100}%` }} />
                  </div>
                  <span className="text-xs text-muted-foreground font-mono">{result.similarity.toFixed(3)}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
