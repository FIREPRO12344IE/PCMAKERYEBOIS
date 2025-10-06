import { useState } from "react";
import { catalog, categoryNames, Component } from "@/data/catalog";
import { BuildSummary } from "@/components/BuildSummary";
import { CategorySection } from "@/components/CategorySection";
import { Hero } from "@/components/Hero";
import { Chatbot } from "@/components/Chatbot";
import { Cpu } from "lucide-react";

const Index = () => {
  const [selectedParts, setSelectedParts] = useState<Record<string, Component>>({});

  const handleSelectPart = (part: Component) => {
    setSelectedParts((prev) => ({
      ...prev,
      [part.category]: part,
    }));
  };

  const handleRemovePart = (category: string) => {
    setSelectedParts((prev) => {
      const newParts = { ...prev };
      delete newParts[category];
      return newParts;
    });
  };

  const categories = Object.keys(categoryNames);

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center animate-pulse-glow">
                <Cpu className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold gradient-text">yebois32 PC Builder</h1>
                <p className="text-xs md:text-sm text-muted-foreground">
                  Professional PC Building • UAE
                </p>
              </div>
            </div>
            <a 
              href="tel:+971508044624"
              className="hidden md:flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
            >
              <Cpu className="h-4 w-4" />
              +971 50 804 4624
            </a>
          </div>
        </div>
      </header>

      <Hero />

      <main id="builder-section" className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {categories.map((category) => {
              const categoryComponents = catalog.filter((c) => c.category === category);
              if (categoryComponents.length === 0) return null;

              return (
                <CategorySection
                  key={category}
                  category={category}
                  categoryName={categoryNames[category]}
                  components={categoryComponents}
                  selectedPart={selectedParts[category]}
                  onSelectPart={handleSelectPart}
                />
              );
            })}
          </div>

          <div className="lg:col-span-1">
            <BuildSummary
              selectedParts={selectedParts}
              onRemovePart={handleRemovePart}
            />
          </div>
        </div>
      </main>

      <Chatbot />
    </div>
  );
};

export default Index;
