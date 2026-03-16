import { MapPin, Phone, Mail, Instagram, MessageCircle, Building2 } from "lucide-react";

const WHATSAPP_NUMBER = "5561854956363";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Olá Pedro Ivo! Vi seu site e gostaria de mais informações."
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <footer className="bg-foreground text-white relative overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-lg">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl">Pedro Ivo</h3>
                <p className="text-white/60 text-sm">Corretor de Imóveis</p>
              </div>
            </div>
            
            <p className="text-white/70 mb-6 max-w-md leading-relaxed">
              Conectando pessoas e sonhos. Corretor autônomo especializado em imóveis na região de Brasília/DF, 
              com atendimento personalizado para compra, venda e financiamento.
            </p>

            {/* Credential Badge */}
            <div className="inline-flex items-center gap-3 bg-white/10 px-4 py-3 rounded-xl">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white font-medium text-sm">Corretor Autônomo</p>
                <p className="text-white/60 text-xs">CRECI-DF Ativo</p>
              </div>
            </div>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Contato</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${WHATSAPP_NUMBER}`}
                  className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 bg-white/10 group-hover:bg-primary/50 rounded-lg flex items-center justify-center transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span>(61) 8549-5636</span>
                </a>
              </li>
              <li>
                <button
                  onClick={handleWhatsAppClick}
                  className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group w-full text-left"
                >
                  <div className="w-10 h-10 bg-white/10 group-hover:bg-green-500/50 rounded-lg flex items-center justify-center transition-colors">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <span>WhatsApp</span>
                </button>
              </li>
              <li>
                <a
                  href="mailto:contato@pedroivoimoveis.com.br"
                  className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 bg-white/10 group-hover:bg-primary/50 rounded-lg flex items-center justify-center transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span>E-mail</span>
                </a>
              </li>
              <li>
                <div className="flex items-center gap-3 text-white/70">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span>Brasília/DF</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Navegação</h4>
            <ul className="space-y-3">
              <li>
                <a href="#sobre" className="text-white/70 hover:text-white transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#imoveis" className="text-white/70 hover:text-white transition-colors">
                  Imóveis
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="text-white/70 hover:text-white transition-colors">
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="#contato" className="text-white/70 hover:text-white transition-colors">
                  Contato
                </a>
              </li>
            </ul>

            {/* Social */}
            <div className="mt-8">
              <h4 className="font-display font-semibold text-lg mb-4">Redes Sociais</h4>
              <div className="flex gap-3">
                <a
                  href="https://instagram.com/pedroivoimoveis61"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 rounded-lg flex items-center justify-center transition-all"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <button
                  onClick={handleWhatsAppClick}
                  className="w-10 h-10 bg-white/10 hover:bg-green-500 rounded-lg flex items-center justify-center transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-white/50 text-sm">
            <p>© {currentYear} Pedro Ivo Imóveis. Todos os direitos reservados.</p>
            <p className="flex items-center gap-2">
              Desenvolvido com
              <span className="text-accent">♥</span>
              para você
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
