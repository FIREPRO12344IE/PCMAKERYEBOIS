import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Zap } from "lucide-react";

interface SampleBuildsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const SampleBuildsDialog = ({ open, onOpenChange }: SampleBuildsDialogProps) => {
  const highEndBuild = [
    { component: "CPU", model: "Intel Core i7-14700K (20 cores, 28 threads, LGA1700)", price: 1699 },
    { component: "Cooler", model: "Corsair iCUE H100i RGB Elite 240 mm AIO", price: 420 },
    { component: "Motherboard", model: "ASUS TUF Gaming Z790-PLUS WiFi DDR5", price: 850 },
    { component: "GPU", model: "NVIDIA GeForce RTX 4070 Ti 12 GB GDDR6X", price: 3500 },
    { component: "RAM", model: "Corsair Vengeance DDR5 32 GB (2×16 5600 MHz)", price: 600 },
    { component: "Storage 1", model: "Samsung 990 Pro 1 TB NVMe Gen 4", price: 595 },
    { component: "Storage 2", model: "WD Blue 2 TB HDD", price: 200 },
    { component: "PSU", model: "Corsair RM850x 850 W Gold Modular", price: 550 },
    { component: "Case", model: "Lian Li O11 Dynamic Evo (White)", price: 700 },
    { component: "Fans / RGB", model: "Lian Li Uni Fan SL120 ×3 Pack", price: 420 },
    { component: "Mouse", model: "Logitech G Pro X Superlight", price: 420 },
    { component: "Keyboard", model: "Keychron K2 V2 RGB Brown Switches", price: 220 },
    { component: "Headset", model: "HyperX Cloud II Wireless", price: 450 },
  ];

  const midRangeBuild = [
    { component: "CPU", model: "AMD Ryzen 5 7600 (6 cores / 12 threads, AM5)", price: 770 },
    { component: "Cooler", model: "Cooler Master Hyper 212 Black Edition", price: 120 },
    { component: "Motherboard", model: "MSI B650M PRO WiFi", price: 580 },
    { component: "GPU", model: "NVIDIA RTX 4060 Ti 8 GB", price: 2200 },
    { component: "RAM", model: "Kingston Fury Beast DDR5 32 GB (2×16 5600 MHz)", price: 650 },
    { component: "Storage", model: "WD SN850X 1 TB NVMe Gen 4", price: 480 },
    { component: "PSU", model: "Thermaltake GF1 850 W Gold", price: 480 },
    { component: "Case", model: "NZXT H510 Matte Black", price: 380 },
    { component: "Monitor", model: "LG 24GN600 144 Hz 24″", price: 530 },
  ];

  const highEndTotal = highEndBuild.reduce((sum, item) => sum + item.price, 0);
  const midRangeTotal = midRangeBuild.reduce((sum, item) => sum + item.price, 0);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl gradient-text flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-primary" />
            Sample PC Builds
          </DialogTitle>
          <DialogDescription>
            Expert-curated builds for different budgets and use cases
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="high-end" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="high-end" className="gap-2">
              <Sparkles className="h-4 w-4" />
              High-End Premium
            </TabsTrigger>
            <TabsTrigger value="mid-range" className="gap-2">
              <Zap className="h-4 w-4" />
              Mid-Range Value
            </TabsTrigger>
          </TabsList>

          <TabsContent value="high-end" className="space-y-4 animate-fade-in">
            <div className="rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 p-4 border border-primary/20">
              <h3 className="font-semibold text-lg mb-2">High-End Premium Build</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Beautiful white & black contrast theme with soft RGB glow. Handles 4K gaming, 
                video editing, AI modeling with ease. DDR5 + PCIe 4.0 storage for lightning speed.
              </p>
              <div className="flex gap-2">
                <Badge variant="secondary">4K Gaming</Badge>
                <Badge variant="secondary">Content Creation</Badge>
                <Badge variant="secondary">RGB</Badge>
              </div>
            </div>

            <div className="rounded-lg border border-border overflow-hidden">
              <table className="w-full">
                <thead className="bg-muted">
                  <tr>
                    <th className="text-left p-3 font-semibold">Component</th>
                    <th className="text-left p-3 font-semibold">Model / Details</th>
                    <th className="text-right p-3 font-semibold">Price (AED)</th>
                  </tr>
                </thead>
                <tbody>
                  {highEndBuild.map((item, index) => (
                    <tr key={index} className="border-t border-border hover:bg-muted/50 transition-colors">
                      <td className="p-3 font-medium">{item.component}</td>
                      <td className="p-3 text-sm text-muted-foreground">{item.model}</td>
                      <td className="p-3 text-right font-semibold">{item.price.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot className="bg-primary/10 border-t-2 border-primary">
                  <tr>
                    <td colSpan={2} className="p-3 font-bold text-lg">Total</td>
                    <td className="p-3 text-right font-bold text-lg text-primary">
                      AED {highEndTotal.toLocaleString()}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </TabsContent>

          <TabsContent value="mid-range" className="space-y-4 animate-fade-in">
            <div className="rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 p-4 border border-primary/20">
              <h3 className="font-semibold text-lg mb-2">Mid-Range Value Build</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Perfect balance of performance and value. Great for 1080p/1440p gaming and video editing 
                without breaking the bank.
              </p>
              <div className="flex gap-2">
                <Badge variant="secondary">1440p Gaming</Badge>
                <Badge variant="secondary">Editing</Badge>
                <Badge variant="secondary">Best Value</Badge>
              </div>
            </div>

            <div className="rounded-lg border border-border overflow-hidden">
              <table className="w-full">
                <thead className="bg-muted">
                  <tr>
                    <th className="text-left p-3 font-semibold">Component</th>
                    <th className="text-left p-3 font-semibold">Model / Details</th>
                    <th className="text-right p-3 font-semibold">Price (AED)</th>
                  </tr>
                </thead>
                <tbody>
                  {midRangeBuild.map((item, index) => (
                    <tr key={index} className="border-t border-border hover:bg-muted/50 transition-colors">
                      <td className="p-3 font-medium">{item.component}</td>
                      <td className="p-3 text-sm text-muted-foreground">{item.model}</td>
                      <td className="p-3 text-right font-semibold">{item.price.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot className="bg-primary/10 border-t-2 border-primary">
                  <tr>
                    <td colSpan={2} className="p-3 font-bold text-lg">Total</td>
                    <td className="p-3 text-right font-bold text-lg text-primary">
                      AED {midRangeTotal.toLocaleString()}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};
