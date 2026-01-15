import { Play, Shield, Anchor, Globe, Award } from "lucide-react";
import { useState } from "react";

const AboutSection = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const values = [
    { icon: Shield, label: "Safety", desc: "Keselamatan Navigasi" },
    { icon: Anchor, label: "Security", desc: "Keamanan Maritim" },
    { icon: Globe, label: "Prosperity", desc: "Kemakmuran Bangsa" },
    { icon: Award, label: "Sovereignty", desc: "Kedaulatan NKRI" },
  ];

  return (
    <section className="py-24 relative overflow-hidden" id="tentang-kami">
      {/* Background */}
      <div className="absolute inset-0 gradient-navy opacity-[0.03]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video Section */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-strong group">
              {!isVideoPlaying ? (
                <>
                  <div className="aspect-video bg-primary/10 flex items-center justify-center relative">
                    <img 
                      src="https://img.youtube.com/vi/qGLGuUvKcTg/maxresdefault.jpg"
                      alt="IHDC Profile Video"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/30 transition-colors" />
                    <button
                      onClick={() => setIsVideoPlaying(true)}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center shadow-strong group-hover:scale-110 transition-transform">
                        <Play className="h-8 w-8 text-accent-foreground ml-1" />
                      </div>
                    </button>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 glass-card rounded-lg p-3">
                    <div className="w-10 h-10 rounded-full gradient-navy flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-foreground font-bold">▶</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">Video Profil IHDC</p>
                      <p className="text-xs text-muted-foreground">Pusat Data Hidrografi Indonesia</p>
                    </div>
                  </div>
                </>
              ) : (
                <div className="aspect-video">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/qGLGuUvKcTg?autoplay=1"
                    title="IHDC Profile Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/20 rounded-xl -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary/10 rounded-xl -z-10" />
          </div>

          {/* Content */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
              Tentang Kami
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-2">
              Safety, Security,
            </h2>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-accent mb-6">
              Prosperity & Sovereignty
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Indonesia Hydrographic Data Centre (IHDC) Pushidrosal hadir dan dikembangkan 
              untuk memberikan kemudahan dan meningkatkan layanan penggunaan data hidrografi 
              yang akurat dan mutakhir untuk berbagai kepentingan dan pengambilan keputusan.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              Tidak hanya untuk kebutuhan keselamatan navigasi, namun juga perlindungan 
              lingkungan laut dan pesisir, permodelan efek tsunami, prediksi pergerakan 
              polusi di laut, operasi penyelamatan, identifikasi daerah energi laut 
              terbarukan, pencarian sumber daya alam, delimitasi batas maritim, 
              infrastruktur pelabuhan, operasi militer, dan lain sebagainya.
            </p>

            {/* Values */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {values.map((value, index) => (
                <div key={index} className="text-center p-4 rounded-xl bg-secondary/50 border border-border">
                  <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-2">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <p className="font-semibold text-foreground text-sm">{value.label}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{value.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-sm text-muted-foreground mt-6 italic">
              Sesuai dengan standar dan praktek terbaik yang telah diterapkan oleh IHO dan 
              lembaga hidrografi di seluruh dunia dalam rangka mendukung berbagai kepentingan 
              pembangunan maritim Indonesia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
