import { Button } from "@/components/ui/button";
import { Phone, Clock, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background (use existing olive tokens) */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,_hsl(var(--olive)),_hsl(var(--olive-dark)))]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_hsl(var(--olive-dark)/0.5)_100%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <p className="text-cream/70 font-body text-sm tracking-[0.3em] uppercase mb-4">
              Reservations
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-cream mb-6">
              Book Your Table
            </h2>
            <p className="text-cream/80 text-lg md:text-xl max-w-2xl mx-auto mb-12">
              To guarantee you the best experience, we recommend booking in advance. 
              Contact us by phone or visit our restaurant.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="flex flex-col items-center gap-3">
              <div className="w-14 h-14 rounded-full bg-cream/10 flex items-center justify-center">
                <Phone className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-display text-xl text-cream">Phone</h3>
              <p className="text-cream/70">+40 728 847 910</p>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="w-14 h-14 rounded-full bg-cream/10 flex items-center justify-center">
                <Clock className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-display text-xl text-cream">Hours</h3>
              <p className="text-cream/70">Mon-Sun: 12:00-22:30</p>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="w-14 h-14 rounded-full bg-cream/10 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-display text-xl text-cream">Address</h3>
              <p className="text-cream/70">Strada Vasile Alecsandri 3, Timișoara</p>
            </div>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button variant="hero" size="xl" asChild>
              <a href="https://smart-menu.ro/dei-frati-tm?m=book-a-table&r=&d=&t=" target="_blank" rel="noopener noreferrer">
              Book a table online
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;