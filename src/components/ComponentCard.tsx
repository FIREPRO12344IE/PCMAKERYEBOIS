import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Component } from "@/data/catalog";
import { Plus, Check } from "lucide-react";

interface ComponentCardProps {
  component: Component;
  isSelected: boolean;
  onSelect: () => void;
}

export const ComponentCard = ({ component, isSelected, onSelect }: ComponentCardProps) => {
  return (
    <Card className="p-4 card-glow bg-card border-border hover:border-primary/50 transition-all">
      <div className="space-y-3">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <div className="text-xs text-muted-foreground uppercase mb-1">
              {component.brand}
            </div>
            <h3 className="font-semibold text-lg mb-2 line-clamp-2">
              {component.model}
            </h3>
          </div>
        </div>

        <div className="space-y-1.5">
          {Object.entries(component.specs).map(([key, value]) => {
            if (Array.isArray(value)) return null;
            return (
              <div key={key} className="flex justify-between text-sm">
                <span className="text-muted-foreground capitalize">
                  {key.replace(/_/g, " ")}:
                </span>
                <span className="font-medium text-foreground">
                  {typeof value === "boolean" ? (value ? "Yes" : "No") : value}
                </span>
              </div>
            );
          })}
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-border">
          <div className="text-2xl font-bold text-primary">
            AED {component.price_aed.toLocaleString()}
          </div>
          <Button
            onClick={onSelect}
            variant={isSelected ? "secondary" : "default"}
            size="sm"
            className={isSelected ? "bg-success hover:bg-success/90" : ""}
          >
            {isSelected ? (
              <>
                <Check className="h-4 w-4 mr-1" />
                Selected
              </>
            ) : (
              <>
                <Plus className="h-4 w-4 mr-1" />
                Add
              </>
            )}
          </Button>
        </div>
      </div>
    </Card>
  );
};
