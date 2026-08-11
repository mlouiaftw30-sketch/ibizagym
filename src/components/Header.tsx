import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Instagram, MapPin, Sparkles, Ticket } from 'lucide-react';
import { GymLogo } from './GymLogo';

interface HeaderProps {
  onOpenMyBookings: () => void;
  bookingsCount: number;
}

export const Header: React.FC<HeaderProps> = ({ onOpenMyBookings, bookingsCount }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-b border-white/10 py-3 shadow-xl'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center group">
          <GymLogo size="md" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-white/70">
          <a href="#training" className="hover:text-[#00C2E0] transition-colors">
            Équipements
          </a>
          <a href="#memberships" className="hover:text-[#00C2E0] transition-colors">
            Abonnements & Tarifs
          </a>
          <a href="#offers" className="hover:text-[#00C2E0] transition-colors flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#00C2E0] animate-pulse"></span>
            Promos
          </a>
          <a href="#schedule" className="hover:text-[#00C2E0] transition-colors">
            Planning Cours
          </a>
          <a href="#trainers" className="hover:text-[#00C2E0] transition-colors">
            Coachs
          </a>
          <a href="#contact" className="hover:text-[#00C2E0] transition-colors">
            Contact
          </a>
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={onOpenMyBookings}
            className="px-4 py-2 bg-neutral-900 hover:bg-neutral-800 border border-white/20 text-white font-bold uppercase text-xs rounded-full transition-all flex items-center gap-2 cursor-pointer relative"
          >
            <Ticket className="w-3.5 h-3.5 text-[#00C2E0]" />
            <span>Mes Réservations</span>
            {bookingsCount > 0 && (
              <span className="bg-[#00C2E0] text-black text-[10px] font-black px-1.5 py-0.2 rounded-full font-mono">
                {bookingsCount}
              </span>
            )}
          </button>

          <a
            href="https://www.instagram.com/ibizagym/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-[#00C2E0] hover:border-[#00C2E0] transition-all"
            title="Suivre IbizaGym sur Instagram"
          >
            <Instagram className="w-4 h-4" />
          </a>

          <a
            href="#contact"
            className="px-5 py-2.5 bg-[#00C2E0] text-black font-black uppercase text-xs rounded-full hover:scale-105 transition-all shadow-lg shadow-[#00C2E0]/30 flex items-center gap-1.5 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Nous Contacter</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenMyBookings}
            className="px-3 py-1.5 bg-neutral-900 border border-white/20 text-white font-bold uppercase text-[10px] rounded-full flex items-center gap-1 cursor-pointer"
          >
            <Ticket className="w-3 h-3 text-[#00C2E0]" />
            <span>Réservations ({bookingsCount})</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white/80 hover:text-white"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A0A0A] border-b border-white/10 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-4 text-sm font-bold uppercase tracking-wider">
            <a
              href="#training"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white/80 hover:text-[#00C2E0] py-1 border-b border-white/5"
            >
              Équipements & Plateau
            </a>
            <a
              href="#memberships"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white/80 hover:text-[#00C2E0] py-1 border-b border-white/5"
            >
              Abonnements & Tarifs
            </a>
            <a
              href="#offers"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#00C2E0] flex items-center justify-between py-1 border-b border-white/5"
            >
              <span>Promotions Exclusives</span>
              <span className="text-[10px] bg-[#00C2E0]/20 text-[#00C2E0] px-2 py-0.5 rounded-full font-bold">
                -30% OFF
              </span>
            </a>
            <a
              href="#schedule"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white/80 hover:text-[#00C2E0] py-1 border-b border-white/5"
            >
              Planning des Cours
            </a>
            <a
              href="#trainers"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white/80 hover:text-[#00C2E0] py-1 border-b border-white/5"
            >
              Coachs & Équipe
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white/80 hover:text-[#00C2E0] py-1 border-b border-white/5"
            >
              Contact & Localisation
            </a>
          </div>

          <div className="pt-2 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs text-white/50">
              <MapPin className="w-3.5 h-3.5 text-[#00C2E0]" />
              <span>Nouvelle Médina, Ben Arous</span>
            </div>
            <a
              href="tel:+21629000000"
              className="text-xs text-[#00C2E0] font-bold flex items-center gap-1"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>+216 29 000 000</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
