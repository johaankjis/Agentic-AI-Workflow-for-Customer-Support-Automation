import { Navigation } from "@/components/navigation"
import { KnowledgeStats } from "@/components/knowledge-stats"
import { VectorSearch } from "@/components/vector-search"
import { DocumentLibrary } from "@/components/document-library"

export default function KnowledgePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Knowledge Base & RAG</h1>
          <p className="text-muted-foreground">FAISS vector search for retrieval-augmented generation</p>
        </div>

        <KnowledgeStats />
        <VectorSearch />
        <DocumentLibrary />
      </main>
    </div>
  )
}
