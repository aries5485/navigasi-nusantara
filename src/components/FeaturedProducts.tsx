import { ArrowRight, Map, Navigation, Waves, Book } from "lucide-react";
import { Button } from "@/components/ui/button";
import productEnc from "@/assets/product-enc.jpg";
import productPaperChart from "@/assets/product-paper-chart.jpg";
import productTidal from "@/assets/product-tidal.jpg";
import productCatalog from "@/assets/hero-ocean.jpg";

const products = [
  {
    icon: Navigation,
    title: "Electronic Navigational Chart (ENC)",
    description:
      "Peta digital navigasi elektronik standar internasional (S-57/S-101) untuk sistem ECDIS kapal modern. Mencakup seluruh perairan Indonesia dengan update berkala.",
    image: productEnc,
    features: ["Format S-57/S-101", "Update Berkala", "Lisensi Resmi"],
    link: "#voyage-planner",
    accent: "from-wave to-ocean-end",
  },
  {
    icon: Map,
    title: "Peta Laut Indonesia",
    description:
      "Peta kertas navigasi resmi yang diterbitkan oleh Pushidrosal untuk keperluan navigasi konvensional. Tersedia dalam berbagai skala sesuai kebutuhan pelayaran.",
    image: productPaperChart,
    features: ["Skala Lengkap", "Standar IHO", "Cetak Berkualitas"],
    link: "#voyage-planner",
    accent: "from-gold to-accent",
  },
  {
    icon: Waves,
    title: "Data Pasang Surut",
    description:
      "Informasi prediksi pasang surut dari seluruh stasiun pengamatan di Indonesia. Data akurat untuk perencanaan pelayaran dan aktivitas maritim lainnya.",
    image: productTidal,
    features: ["100+ Stasiun", "Prediksi Akurat", "Data Real-time"],
    link: "#tidal-prediction",
    accent: "from-primary to-navy-light",
  },
  {
    icon: Book,
    title: "Nautical Publication Catalog",
    description:
      "Katalog publikasi nautika komprehensif yang berisi informasi penting untuk keselamatan navigasi, termasuk buku panduan dan tabel teknis.",
    image: productCatalog,
    features: ["Regulasi Maritim", "Panduan Teknis", "Standar Internasional"],
    link: "#publication-catalog",
    accent: "from-primary to-accent",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
            Produk Unggulan
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Solusi Data Hidrografi Terpercaya
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Produk-produk unggulan kami mendukung keselamatan navigasi maritim dan
            pembangunan Indonesia
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl overflow-hidden shadow-soft card-hover border border-border"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${product.accent} opacity-30`} />
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 rounded-xl bg-card/90 backdrop-blur-sm flex items-center justify-center">
                    <product.icon className="h-6 w-6 text-accent" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {product.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {product.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <Button
                  variant="outline"
                  className="w-full group/btn border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  asChild
                >
                  <a href={product.link}>
                    Lihat Detail
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
