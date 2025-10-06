import { useState } from "react";
import { Cpu, Zap, Shield, TrendingUp, Phone, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SampleBuildsDialog } from "./SampleBuildsDialog";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogFooter,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";

export const Hero = () => {
  const [showSampleBuilds, setShowSampleBuilds] = useState(false);
  const [showContactInfo, setShowContactInfo] = useState(false);
  
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

          <Button
            size="lg"
            variant="outline"
            onClick={() => setShowContactInfo(true)}
            className="border-primary/30 hover:bg-primary/10 font-semibold"
          >
            <Info className="mr-2 h-5 w-5" />
            More Info
          </Button>

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

          <div className="flex items-center justify-center gap-2 pt-6">
            <Phone className="h-5 w-5 text-primary" />
            <a 
              href="tel:+971508044624" 
              className="text-lg font-semibold text-foreground hover:text-primary transition-colors"
            >
              +971 50 804 4624
            </a>
          </div>

          <SampleBuildsDialog 
            open={showSampleBuilds} 
            onOpenChange={setShowSampleBuilds} 
          />

          <AlertDialog open={showContactInfo} onOpenChange={setShowContactInfo}>
            <AlertDialogContent className="max-w-md">
              <AlertDialogHeader>
                <AlertDialogTitle className="text-2xl gradient-text flex items-center gap-2">
                  <Cpu className="h-6 w-6" />
                  Professional PC Building Service
                </AlertDialogTitle>
                <AlertDialogDescription className="space-y-4 text-left pt-4">
                  <p className="text-base text-foreground">
                    Welcome! I'm <span className="font-semibold text-primary">yebois32</span>, and I specialize in building custom gaming PCs in the UAE.
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">
                      ✓ Expert PC assembly and cable management
                    </p>
                    <p className="text-sm text-muted-foreground">
                      ✓ Quality testing and optimization
                    </p>
                    <p className="text-sm text-muted-foreground">
                      ✓ Compatibility guaranteed
                    </p>
                    <p className="text-sm text-muted-foreground">
                      ✓ Competitive pricing in AED
                    </p>
                  </div>
                  <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 space-y-2">
                    <p className="text-sm font-medium text-foreground">
                      Ready to build your dream PC?
                    </p>
                    <a 
                      href="tel:+971508044624"
                      className="flex items-center justify-center gap-2 text-primary hover:text-primary/80 transition-colors font-semibold"
                    >
                      <Phone className="h-4 w-4" />
                      +971 50 804 4624
                    </a>
                  </div>
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Close</AlertDialogCancel>
                <Button 
                  onClick={() => {
                    setShowContactInfo(false);
                    scrollToBuilder();
                  }}
                  className="bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                >
                  Start Building
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
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
