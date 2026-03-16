import { Star, Heart, Users } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Roberto Mendes",
    location: "Samambaia, DF",
    testimonial: "Excelente atendimento! Pedro Ivo entendeu exatamente o que eu precisava e encontrou o apartamento perfeito para minha família.",
  },
  {
    id: 2,
    name: "Carla Ferreira",
    location: "Samambaia, DF",
    testimonial: "Profissional dedicado e transparente. Recomendo de olhos fechados para quem busca um corretor de confiança em Brasília.",
  },
  {
    id: 3,
    name: "Marcos Albuquerque",
    location: "Samambaia, DF",
    testimonial: "Comprei minha casa com a ajuda do Pedro Ivo. Processo tranquilo do início ao fim. Muito obrigado!",
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-16 sm:py-24 bg-muted/30 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-6">
            <Heart className="w-4 h-4 text-accent fill-accent" />
            <span className="text-accent font-medium text-sm">Clientes satisfeitos</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Nossos <span className="text-primary">Clientes</span>
          </h2>
          
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Mais de 100 famílias realizaram o sonho do imóvel próprio com a ajuda de Pedro Ivo. 
            Confira alguns momentos especiais!
          </p>
        </div>

        {/* Stats Bar */}
        <div className="flex flex-wrap justify-center gap-8 mb-12 p-6 bg-white rounded-2xl shadow-lg max-w-3xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 mb-1">
              <span className="font-display font-bold text-3xl text-foreground">5.0</span>
              <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            </div>
            <p className="text-muted-foreground text-sm">Nota média</p>
          </div>
          <div className="w-px bg-border hidden sm:block" />
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 mb-1">
              <Users className="w-6 h-6 text-primary" />
              <span className="font-display font-bold text-3xl text-foreground">100+</span>
            </div>
            <p className="text-muted-foreground text-sm">Famílias atendidas</p>
          </div>
          <div className="w-px bg-border hidden sm:block" />
          <div className="text-center">
            <p className="font-display font-bold text-3xl text-foreground">98%</p>
            <p className="text-muted-foreground text-sm">Recomendariam</p>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((item) => (
            <div 
              key={item.id} 
              className="group relative overflow-hidden rounded-2xl shadow-xl bg-white p-6"
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              {/* Testimonial */}
              <p className="text-muted-foreground text-base mb-6 italic leading-relaxed">
                "{item.testimonial}"
              </p>
              
              {/* Client Info */}
              <div className="border-t border-border pt-4">
                <p className="text-foreground font-display font-semibold text-lg">
                  {item.name}
                </p>
                <p className="text-muted-foreground text-sm">
                  {item.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 text-muted-foreground text-sm bg-white px-6 py-3 rounded-full shadow-md">
            <Heart className="w-4 h-4 text-accent fill-accent" />
            <span>Momentos reais de clientes que confiaram no trabalho de Pedro Ivo</span>
          </div>
        </div>
      </div>
    </section>
  );
}
