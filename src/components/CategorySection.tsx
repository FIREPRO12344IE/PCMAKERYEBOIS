import { useState } from "react";
import { Component } from "@/data/catalog";
import { ComponentCard } from "./ComponentCard";
import { ChevronDown, Check } from "lucide-react";
import { Card } from "@/components/ui/card";

interface CategorySectionProps {
  category: string;
  categoryName: string;
  components: Component[];
  selectedPart?: Component;
  onSelectPart: (part: Component) => void;
}

export const CategorySection = ({
  category,
  categoryName,
  components,
  selectedPart,
  onSelectPart,
}: CategorySectionProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="overflow-hidden bg-card border-border">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-6 flex items-center justify-between hover:bg-muted/50 transition-colors"
      >
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold">{categoryName}</h2>
            {selectedPart && (
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-success/20 text-success">
                <Check className="h-4 w-4" />
                <span className="text-sm font-medium">Selected</span>
              </div>
            )}
          </div>
          <span className="text-sm text-muted-foreground">
            {components.length} options
          </span>
        </div>
        <ChevronDown
          className={`h-6 w-6 text-muted-foreground transition-transform duration-200 ${
            isExpanded ? "rotate-180" : ""
          }`}
        />
      </button>

      {isExpanded && (
        <div className="p-6 pt-0 bg-muted/20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {components.map((component) => (
              <ComponentCard
                key={component.id}
                component={component}
                isSelected={selectedPart?.id === component.id}
                onSelect={() => onSelectPart(component)}
              />
            ))}
          </div>
        </div>
      )}
    </Card>
  );
};
