import { MapPin, Phone, Mail, Printer, Smartphone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "Voyage Planner", href: "https://ihdc.pushidrosal.id/sailing/" },
    { name: "Tidal Stations", href: "#" },
    { name: "Nautical Publication", href: "#" },
    { name: "E-Navigation", href: "#" },
    { name: "Maritime Safety Info", href: "#" },
    { name: "3D Bathymetry", href: "#" },
    { name: "Undersea Features", href: "#" },
    { name: "Expedition Jalacitra", href: "#" },
    { name: "Hydrographic Education", href: "#" },
    { name: "FAQ", href: "#" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img src="/logo.png" alt="IHDC Logo" className="w-12 h-12 object-contain bg-white rounded-full p-1" />
              <div>
                <h3 className="text-lg font-bold">IHDC</h3>
                <p className="text-xs text-primary-foreground/70">Indonesian Hydrographic Data Center</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed mb-6">
              Pusat Data Hidrografi Indonesia di bawah Pusat Hidrografi dan
              Oseanografi TNI Angkatan Laut (Pushidrosal).
            </p>

            {/* Government Logos */}
            <div className="flex flex-wrap items-center gap-3">
              {[
                { src: "/partners/tni-al.png", alt: "TNI AL" },
                { src: "/partners/esdm.png", alt: "ESDM" },
                { src: "/partners/bmkg.png", alt: "BMKG" },
                { src: "/partners/big.png", alt: "BIG" },
                { src: "/partners/bakamla.png", alt: "Bakamla" },
              ].map((partner) => (
                <div
                  key={partner.alt}
                  className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-colors"
                >
                  <img
                    src={partner.src}
                    alt={partner.alt}
                    className="h-8 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-lg mb-4">Layanan Kami</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8">
              {services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Kontak</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm text-primary-foreground/80">
                  Jl. Pantai Kuta V No.1 Ancol Timur,<br />
                  Jakarta Utara Indonesia 14430
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-sm text-primary-foreground/80">
                  pusdalops@pushidrosal.id
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-sm text-primary-foreground/80">
                  +6221-64714810 (Setum)
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Printer className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-sm text-primary-foreground/80">
                  +6221-64714819 (Setum)
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Smartphone className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-sm text-primary-foreground/80">
                  +6252-9000-3537 (Pusdalops Jaga)
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-primary-foreground/60">
              © {currentYear} Indonesian Hydrographic Data Center (IHDC). All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">
                Kebijakan Privasi
              </a>
              <a href="#" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">
                Syarat & Ketentuan
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
