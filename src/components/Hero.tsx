import { useState } from "react";
import { Cpu, Zap, Shield, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SampleBuildsDialog } from "./SampleBuildsDialog";

export const Hero = () => {
  const [showSampleBuilds, setShowSampleBuilds] = useState(false);
  
  const scrollToBuilder = () => {
    document.getElementById("builder-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-background via-card to-background border-b border-border">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(195_100%_50%/0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(240_60%_60%/0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-4 py-20 relative">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 animate-pulse-glow">
            <Zap className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">UAE's Premier PC Building Platform</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold gradient-text leading-tight">
            Build Your Dream Gaming PC
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional-grade PC configurations with real-time AED pricing, instant compatibility checks, 
            and expert-curated components. From budget builds to ultimate gaming rigs.
          </p>

          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Button 
              size="lg" 
              onClick={scrollToBuilder}
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-semibold px-8 shadow-lg hover:shadow-xl transition-all"
            >
              Start Building
              <Cpu className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary/30 hover:bg-primary/10"
              onClick={() => setShowSampleBuilds(true)}
            >
              View Sample Builds
            </Button>
          </div>

          <SampleBuildsDialog 
            open={showSampleBuilds} 
            onOpenChange={setShowSampleBuilds} 
          />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
            <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border card-glow">
              <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 mx-auto animate-float">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Compatibility Guaranteed</h3>
              <p className="text-sm text-muted-foreground">
                Smart validation ensures all parts work together perfectly
              </p>
            </div>

            <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border card-glow">
              <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 mx-auto animate-float" style={{ animationDelay: "0.2s" }}>
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Real-Time Pricing</h3>
              <p className="text-sm text-muted-foreground">
                Live AED prices from verified UAE retailers
              </p>
            </div>

            <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border card-glow">
              <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 mx-auto animate-float" style={{ animationDelay: "0.4s" }}>
                <Cpu className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">140+ Components</h3>
              <p className="text-sm text-muted-foreground">
                Premium selection from top brands like NVIDIA, AMD, Intel
              </p>
            </div>
        </div>
      </div>
    </div>
  );
};
