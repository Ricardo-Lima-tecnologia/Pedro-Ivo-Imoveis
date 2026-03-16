import { Award, Users, MapPin, ShieldCheck, MessageCircle } from "lucide-react";
const WHATSAPP_NUMBER = "5561854956363";
const WHATSAPP_MESSAGE = encodeURIComponent("Olá Pedro Ivo! Gostaria de conhecer mais sobre seu trabalho como corretor.");
export default function About() {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;
  return <section id="sobre" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Column */}
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              {/* Main Photo Container */}
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary/20 to-accent/20">
                <img src="https://019cd430-5519-76e9-adf5-785194e342b6.mochausercontent.com/WhatsApp-Image-2026-03-13-at-10.30.51.jpeg" alt="Pedro Ivo - Corretor de Imóveis em Brasília" className="w-full h-auto" />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent/10 rounded-2xl -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />

              {/* Stats Card */}
              <div className="absolute -right-4 sm:-right-8 top-4 bg-white rounded-xl shadow-xl p-4 z-20 border border-border/50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-lg text-foreground">100+</p>
                    <p className="text-muted-foreground text-xs">Famílias atendidas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="order-1 lg:order-2">
            {/* Section Label */}
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <Award className="w-4 h-4 text-primary" />
              <span className="text-primary font-medium text-sm">Conheça seu corretor</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight mb-6">
              Conectando <span className="text-accent">pessoas</span> e{" "}
              <span className="text-primary">sonhos</span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">Olá! Sou Pedro Ivo, corretor de imóveis 
atuando em Brasília e região. 
Minha missão é transformar o sonho da casa própria em realidade, oferecendo um 
atendimento próximo, transparente e totalmente focado nas suas necessidades.</p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              Acredito que comprar ou vender um imóvel vai muito além de uma transação comercial — 
              é entregar as chaves de um novo futuro. Por isso, dedico atenção especial a cada 
              cliente, garantindo segurança em todas as etapas e encontrando o imóvel ideal para 
              você e sua família.
            </p>

            {/* Key Points */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-xl">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-display font-semibold text-foreground">Segurança Total</p>
                  <p className="text-sm text-muted-foreground">Documentação verificada e processos transparentes</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-xl">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-display font-semibold text-foreground">Imóveis Selecionados</p>
                  <p className="text-sm text-muted-foreground">Regiões valorizadas com boa liquidez</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-xl font-display font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 group">
              <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Converse com Pedro Ivo
            </a>
          </div>
        </div>
      </div>
    </section>;
}