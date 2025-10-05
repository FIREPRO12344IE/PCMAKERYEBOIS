import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Component } from "@/data/catalog";
import { X } from "lucide-react";

interface BuildSummaryProps {
  selectedParts: Record<string, Component>;
  onRemovePart: (category: string) => void;
}

export const BuildSummary = ({ selectedParts, onRemovePart }: BuildSummaryProps) => {
  const total = Object.values(selectedParts).reduce((sum, part) => sum + part.price_aed, 0);
  const partCount = Object.keys(selectedParts).length;

  return (
    <Card className="sticky top-4 p-6 card-glow bg-card border-border">
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-border pb-4">
          <h2 className="text-2xl font-bold gradient-text">Your Build</h2>
          <div className="text-sm text-muted-foreground">{partCount} components</div>
        </div>

        <div className="space-y-3 max-h-[400px] overflow-y-auto">
          {Object.entries(selectedParts).length === 0 ? (
            <p className="text-center text-muted-foreground py-8">
              No components selected yet
            </p>
          ) : (
            Object.entries(selectedParts).map(([category, part]) => (
              <div
                key={category}
                className="flex items-start justify-between gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
              >
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-muted-foreground uppercase mb-1">
                    {category}
                  </div>
                  <div className="font-medium text-sm truncate">
                    {part.brand} {part.model}
                  </div>
                  <div className="text-primary font-semibold text-sm mt-1">
                    AED {part.price_aed.toLocaleString()}
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onRemovePart(category)}
                  className="h-8 w-8 p-0 text-muted-foreground hover:text-destructive"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))
          )}
        </div>

        <div className="border-t border-border pt-4 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold">Estimated Total</span>
            <span className="text-2xl font-bold gradient-text">
              AED {total.toLocaleString()}
            </span>
          </div>
          
          <Button 
            className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
            disabled={partCount === 0}
          >
            Save Build
          </Button>
        </div>
      </div>
    </Card>
  );
};
