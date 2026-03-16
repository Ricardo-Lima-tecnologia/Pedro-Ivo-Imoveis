import { MessageCircle, Play } from "lucide-react";

const WHATSAPP_NUMBER = "5561854956363";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá Pedro Ivo! Vi seu vídeo e quero mais informações sobre como encontrar o imóvel ideal!"
);

export default function VideoVSL() {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

  return (
    <section id="video" className="py-16 sm:py-24 bg-gradient-to-b from-muted/50 to-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-4">
            <Play className="w-4 h-4 text-accent" />
            <span className="text-accent font-medium text-sm">Assista e descubra</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight mb-4">
            Encontre o <span className="text-accent">imóvel dos seus sonhos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubra como posso te ajudar a encontrar o lar perfeito para você e sua família
          </p>
        </div>

        {/* Video Container */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white mb-8 max-w-md mx-auto">
          <iframe
            src="https://www.instagram.com/reel/DUvaNq5iLsc/embed/"
            className="w-full border-0"
            style={{ minHeight: "680px" }}
            allowFullScreen
            scrolling="no"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          />
        </div>

        {/* Large CTA Button */}
        <div className="text-center">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-4 bg-green-500 hover:bg-green-600 text-white px-10 py-6 rounded-2xl font-display font-bold text-xl sm:text-2xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 group w-full sm:w-auto"
          >
            <MessageCircle className="w-8 h-8 group-hover:scale-110 transition-transform" />
            Quero Mais Informações
          </a>
          <p className="mt-4 text-muted-foreground text-sm">
            Resposta rápida pelo WhatsApp • Atendimento personalizado
          </p>
        </div>
      </div>
    </section>
  );
}
