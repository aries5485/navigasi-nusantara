import { MapPin, Phone, Mail, Globe } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Voyage Planner", href: "#" },
    { name: "Tidal Prediction", href: "#" },
    { name: "Nautical Publication", href: "#" },
    { name: "E-Navigation", href: "#" },
    { name: "Maritime Safety Info", href: "#" },
  ];

  const resources = [
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
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-xl">I</span>
              </div>
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
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded bg-primary-foreground/10 flex items-center justify-center text-xs font-bold">
                TNI-AL
              </div>
              <div className="w-10 h-10 rounded bg-primary-foreground/10 flex items-center justify-center text-xs font-bold">
                IHO
              </div>
              <div className="w-10 h-10 rounded bg-primary-foreground/10 flex items-center justify-center text-xs font-bold">
                RI
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Layanan Utama</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
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

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Sumber Daya</h4>
            <ul className="space-y-3">
              {resources.map((link, index) => (
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
                  Jl. Pantai Kuta V No.1, Ancol Timur,<br />
                  Jakarta Utara 14430, Indonesia
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-sm text-primary-foreground/80">
                  +62 21 6403101
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-sm text-primary-foreground/80">
                  info@ihdc.id
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-sm text-primary-foreground/80">
                  www.pushidrosal.id
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
