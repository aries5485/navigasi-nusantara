import {
  Compass,
  Waves,
  BookOpen,
  Navigation,
  ShieldCheck,
  Box,
  Anchor,
  MapPin,
  GraduationCap,
} from "lucide-react";

const services = [
  {
    icon: Compass,
    title: "Voyage Planner",
    description:
      "Mendukung para pelaut dalam merencanakan pelayaran secara efisien dengan peta digital (ENC) maupun peta kertas.",
    color: "bg-wave/10 text-wave",
  },
  {
    icon: Waves,
    title: "Tidal Prediction",
    description:
      "Menyediakan informasi fenomena pasang surut air laut di Indonesia dan Rob di Teluk Jakarta.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: BookOpen,
    title: "Nautical Publication",
    description:
      "Katalog penjualan buku-buku nautika untuk keperluan navigasi dan pelayaran.",
    color: "bg-gold/10 text-gold",
  },
  {
    icon: Navigation,
    title: "E-Navigation",
    description:
      "Informasi peta laut elektronik untuk meningkatkan navigasi maritim yang lebih aman.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: ShieldCheck,
    title: "Maritime Safety Info",
    description:
      "Informasi penting mengenai keselamatan navigasi yang harus diperhatikan oleh pelaut.",
    color: "bg-destructive/10 text-destructive",
  },
  {
    icon: Box,
    title: "3D Bathymetry",
    description:
      "Tampilan tiga dimensi dasar perairan Indonesia untuk visualisasi kedalaman laut.",
    color: "bg-navy-light/10 text-navy-light",
  },
  {
    icon: Anchor,
    title: "Undersea Feature Names",
    description:
      "Daftar fitur bawah laut yang terdaftar di perairan Indonesia sesuai standar internasional.",
    color: "bg-wave/10 text-wave",
  },
  {
    icon: MapPin,
    title: "Expedition Jalacitra",
    description:
      "Story Map yang dihasilkan dari ekspedisi hidrografi di berbagai wilayah Indonesia.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: GraduationCap,
    title: "Hydrographic Education",
    description:
      "Informasi pendidikan hidrografi untuk pengembangan SDM maritim Indonesia.",
    color: "bg-gold/10 text-gold",
  },
];

const ServicesGrid = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Layanan Lengkap
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Layanan IHDC
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Berbagai layanan untuk mendukung keselamatan maritim dan pembangunan Indonesia
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <a
              key={index}
              href="#"
              className="group p-6 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-medium transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <service.icon className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {service.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
