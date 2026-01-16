import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, User, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const menuItems = [
  {
    name: "Voyage Planner",
    href: "#voyage-planner",
    description:
      "Untuk mendukung para pelaut dalam merencanakan pelayaran secara efisien, baik itu dengan membeli peta digital (ENC) maupun peta kertas.",
  },
  {
    name: "Tidal Stations",
    href: "#tidal-prediction",
    description:
      "Menyediakan informasi terkait fenomena pasang surut air laut di Indonesia dan Rob di Teluk Jakarta.",
  },
  {
    name: "Nautical Publication",
    href: "#nautical-publication",
    description: "Penjualan buku-buku nautika.",
  },
  {
    name: "E-Navigation",
    href: "#e-navigation",
    description:
      "Menyediakan informasi mengenai peta laut elektronik yang berfungsi untuk meningkatkan navigasi maritim.",
  },
  {
    name: "Maritime Safety",
    href: "#maritime-safety",
    description:
      "Menyajikan informasi penting mengenai keselamatan navigasi yang harus diperhatikan.",
  },
  {
    name: "3D Bathymetry",
    href: "#3d-bathymetry",
    description: "Berisi tentang tampilan tiga dimensi dasar perairan Indonesia.",
  },
  {
    name: "Undersea Features",
    href: "#undersea-features",
    description:
      "Konten ini mencakup daftar fitur bawah laut yang terdaftar di Indonesia.",
  },
  {
    name: "Expedition Jalacitra",
    href: "#expedition",
    description:
      "Konten ini menyajikan informasi mengenai Story Map yang dihasilkan dari ekspedisi.",
  },
  {
    name: "Hydrographic Education",
    href: "#education",
    description:
      "Konten ini menyajikan informasi penting mengenai pendidikan hidrografi.",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar */}
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="IHDC Logo" className="w-10 h-10 object-contain" />
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-primary font-sans">IHDC</h1>
              <p className="text-xs text-muted-foreground -mt-1">
                Indonesian Hydrographic Data Center
              </p>
            </div>
          </div>

          {/* Desktop Search & Actions */}
          <div className="hidden md:flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Cari layanan..."
                className="pl-10 w-64 bg-secondary/50 border-border focus:bg-background"
              />
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="text-primary hover:bg-primary hover:text-white transition-all duration-300"
              asChild
            >
              <Link to="/auth">
                <User className="h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-primary"
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary"
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center justify-center gap-1 py-2 border-t border-border/50">
          <TooltipProvider>
            {menuItems.map((item) => (
              <Tooltip key={item.name} delayDuration={0}>
                <TooltipTrigger asChild>
                  <a
                    href={item.href}
                    className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-primary/5 rounded-md transition-colors"
                  >
                    {item.name}
                  </a>
                </TooltipTrigger>
                <TooltipContent
                  side="bottom"
                  className="max-w-xs bg-slate-900 text-white border-slate-800"
                >
                  <p>{item.description}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
        </div>

        {/* Mobile Search */}
        {isSearchOpen && (
          <div className="md:hidden py-3 border-t border-border/50 animate-fade-in">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Cari layanan..."
                className="pl-10 w-full bg-secondary/50"
              />
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-border/50 bg-background/98 animate-fade-in">
          <div className="px-4 py-3 space-y-1">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-4 py-3 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-primary/5 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-3 border-t border-border/50">
              <Button variant="outline" className="w-full justify-start gap-2" asChild>
                <Link to="/auth">
                  <User className="h-4 w-4" />
                  Masuk / Daftar
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
