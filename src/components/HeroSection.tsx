import { ArrowRight, Anchor, Map, Waves } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-ocean.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/90" />
      </div>

      {/* Animated Wave Pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-32 wave-pattern opacity-30" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 mb-8">
            <Anchor className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-primary-foreground">
              Pusat Data Hidrografi Indonesia
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold text-primary-foreground mb-6 leading-tight">
            Indonesian Hydrographic
            <br />
            <span className="text-accent">Data Center</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-10">
            Menyediakan data hidrografi yang akurat dan mutakhir untuk keselamatan 
            navigasi maritim, perlindungan lingkungan laut, dan pembangunan Indonesia.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg group"
            >
              Jelajahi Layanan
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-lg"
            >
              Tentang Kami
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { icon: Map, value: "500+", label: "Peta Laut" },
            { icon: Waves, value: "100+", label: "Station Pasut" },
            { icon: Anchor, value: "17.000+", label: "Pulau Terdaftar" },
            { icon: Map, value: "6.4 Jt", label: "km² Perairan" },
          ].map((stat, index) => (
            <div 
              key={index} 
              className="glass-card rounded-xl p-4 sm:p-6 text-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <stat.icon className="h-6 w-6 sm:h-8 sm:w-8 text-accent mx-auto mb-2" />
              <div className="text-2xl sm:text-3xl font-bold text-primary">{stat.value}</div>
              <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-accent animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
