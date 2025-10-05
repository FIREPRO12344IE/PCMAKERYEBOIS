import { useState } from "react";
import { Component } from "@/data/catalog";
import { ComponentCard } from "./ComponentCard";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

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
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h2 className="text-2xl font-bold">{categoryName}</h2>
          <span className="text-sm text-muted-foreground">
            {components.length} options
          </span>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? (
            <ChevronUp className="h-5 w-5" />
          ) : (
            <ChevronDown className="h-5 w-5" />
          )}
        </Button>
      </div>

      {isExpanded && (
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
      )}
    </div>
  );
};
