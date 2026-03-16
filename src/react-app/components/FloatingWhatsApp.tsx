import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";

const WHATSAPP_NUMBER = "5561854956363";

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [isPulsing, setIsPulsing] = useState(true);

  useEffect(() => {
    // Show button after a short delay
    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    // Show tooltip after 3 seconds
    const tooltipTimer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);

    // Stop pulsing after 10 seconds
    const pulseTimer = setTimeout(() => {
      setIsPulsing(false);
    }, 10000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(tooltipTimer);
      clearTimeout(pulseTimer);
    };
  }, []);

  const handleClick = () => {
    const message = encodeURIComponent(
      "Olá Pedro Ivo! Vi seu site e gostaria de mais informações sobre imóveis."
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  const closeTooltip = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowTooltip(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3">
      {/* Tooltip */}
      {showTooltip && (
        <div className="animate-in slide-in-from-right-5 fade-in duration-300 bg-white rounded-2xl shadow-2xl p-4 max-w-[280px] border border-border relative">
          {/* Close button */}
          <button
            onClick={closeTooltip}
            className="absolute -top-2 -right-2 w-6 h-6 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
          >
            <X className="w-3 h-3 text-gray-500" />
          </button>
          
          {/* Header */}
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="font-display font-semibold text-foreground text-sm">Pedro Ivo</p>
              <p className="text-green-600 text-xs flex items-center gap-1">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Online agora
              </p>
            </div>
          </div>
          
          {/* Message */}
          <div className="bg-muted/50 rounded-xl p-3 mb-3">
            <p className="text-muted-foreground text-sm">
              👋 Olá! Posso ajudar você a encontrar o imóvel ideal. Clique para conversar!
            </p>
          </div>
          
          {/* CTA */}
          <button
            onClick={handleClick}
            className="w-full bg-green-500 hover:bg-green-600 text-white py-2.5 px-4 rounded-xl font-medium text-sm transition-colors flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            Iniciar conversa
          </button>
          
          {/* Arrow */}
          <div className="absolute -right-2 bottom-8 w-4 h-4 bg-white border-r border-b border-border transform rotate-[-45deg]" />
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={handleClick}
        className={`group relative w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 ${
          isPulsing ? "animate-bounce" : ""
        }`}
        aria-label="Fale conosco no WhatsApp"
      >
        {/* Pulse rings */}
        {isPulsing && (
          <>
            <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-25" />
            <span className="absolute inset-0 rounded-full bg-green-400 animate-pulse opacity-40" />
          </>
        )}
        
        {/* Icon */}
        <MessageCircle className="w-7 h-7 text-white relative z-10 group-hover:scale-110 transition-transform" />
        
        {/* Notification badge */}
        <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg">
          1
        </span>
      </button>
    </div>
  );
}
