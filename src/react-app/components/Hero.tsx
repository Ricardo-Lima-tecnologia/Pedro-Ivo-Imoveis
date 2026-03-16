import { MessageCircle, Home, Shield, ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

const WHATSAPP_NUMBER = "5561854956363";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá Pedro Ivo! Encontrei seu site e gostaria de saber mais sobre imóveis disponíveis."
);
const WHATSAPP_VISIT_MESSAGE = encodeURIComponent(
  "Olá Pedro Ivo! Gostaria de agendar uma visita a um imóvel."
);

const LOGO_URL = "https://019cd430-5519-76e9-adf5-785194e342b6.mochausercontent.com/Gemini_Generated_Image_7curgq7curgq7cur.png";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre Pedro Ivo", href: "#sobre" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;
  const whatsappVisitLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_VISIT_MESSAGE}`;

  const scrollToForm = () => {
    const formSection = document.getElementById("contato");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToSection = (href: string) => {
    setMobileMenuOpen(false);
    if (href === "#inicio") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const section = document.getElementById(href.replace("#", ""));
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=80')`,
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-dark/95 via-navy-dark/80 to-navy/70" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-navy-light/15 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-navy/25 rounded-full blur-3xl" />
      </div>

      {/* Header/Nav - Fixed at top */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${mobileMenuOpen ? 'bg-navy-dark' : 'bg-navy-dark/80 backdrop-blur-md'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img 
                src={LOGO_URL} 
                alt="Pedro Ivo Imóveis" 
                className="h-10 sm:h-14 w-auto object-contain"
              />
              <div>
                <h1 className="text-white font-display font-bold text-base sm:text-lg">Pedro Ivo</h1>
                <p className="text-white/70 text-xs">Corretor de Imóveis</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-white/80 hover:text-white text-sm font-medium transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
              <a
                href={whatsappVisitLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Agendar Visita
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-3 text-white"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="lg:hidden mt-4 pb-6 border-t border-white/20 pt-6">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className="text-white hover:text-navy-light text-left py-3 text-lg font-semibold transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                ))}
                <a
                  href={whatsappVisitLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-full font-semibold text-lg transition-all duration-300 mt-4"
                >
                  <MessageCircle className="w-5 h-5" />
                  Agendar Visita
                </a>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 sm:pt-36 sm:pb-24">
        <div className="max-w-3xl">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-6 sm:mb-8 border border-white/20">
            <Shield className="w-4 h-4 text-navy-light" />
            <span className="text-white/90 text-sm font-medium">Corretor Autônomo • CRECI-DF</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-4 sm:mb-6 text-balance">
            Encontre o imóvel dos seus{" "}
            <span className="text-navy-light">sonhos</span> com segurança e{" "}
            <span className="text-navy-light">confiança</span>
          </h2>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-white/80 mb-8 sm:mb-10 leading-relaxed max-w-2xl">
            Apartamentos e casas selecionados em regiões valorizadas de Brasília. 
            Atendimento personalizado do início ao fim da sua jornada imobiliária.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white px-6 sm:px-8 py-4 rounded-xl font-display font-semibold text-base sm:text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 group"
            >
              <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
              Fale com Pedro Ivo no WhatsApp
            </a>
            <button
              onClick={scrollToForm}
              className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-6 sm:px-8 py-4 rounded-xl font-display font-semibold text-base sm:text-lg transition-all duration-300 border border-white/30 hover:border-white/50"
            >
              <Home className="w-5 h-5 sm:w-6 sm:h-6" />
              Quero encontrar meu imóvel
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-12 sm:mt-16 pt-8 sm:pt-12 border-t border-white/10">
            <div>
              <p className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white">100+</p>
              <p className="text-white/60 text-xs sm:text-sm mt-1">Clientes atendidos</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white">50+</p>
              <p className="text-white/60 text-xs sm:text-sm mt-1">Imóveis vendidos</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white">5★</p>
              <p className="text-white/60 text-xs sm:text-sm mt-1">Avaliação média</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/50" />
      </div>
    </section>
  );
}
