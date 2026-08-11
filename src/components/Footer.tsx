import React, { useState } from 'react';
import { Instagram, Phone, MapPin, ArrowRight, Check } from 'lucide-react';
import { GymLogo } from './GymLogo';

interface FooterProps {
  onShowToast: (msg: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onShowToast }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
    onShowToast(`Abonnement réussi pour ${newsletterEmail} !`);
    setTimeout(() => {
      setNewsletterEmail('');
      setSubscribed(false);
    }, 4000);
  };

  return (
    <footer className="bg-black text-white pt-20 pb-12 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Newsletter Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#1A1A1A] border border-white/10 mb-16 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#00C2E0]/10 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="max-w-lg">
            <span className="text-[10px] bg-[#00C2E0] text-black font-black uppercase px-2.5 py-1 rounded-full tracking-widest">
              OFFRES & ACTUALITÉS IBIZAGYM
            </span>
            <h3 className="text-3xl font-black italic uppercase text-white mt-2 leading-tight">
              Rejoignez La Communauté <span className="text-[#00C2E0]">IbizaGym</span>
            </h3>
            <p className="text-xs text-white/60 mt-2">
              Inscrivez-vous pour recevoir nos promotions exclusives, le planning des évènements et les offres membres.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="w-full lg:w-auto flex flex-col sm:flex-row gap-3">
            {subscribed ? (
              <div className="px-6 py-3.5 bg-[#00C2E0]/20 text-[#00C2E0] border border-[#00C2E0] rounded-full text-xs font-bold flex items-center gap-2">
                <Check className="w-4 h-4" />
                <span>Inscrit ! Merci pour votre confiance.</span>
              </div>
            ) : (
              <>
                <input
                  type="email"
                  required
                  placeholder="Entrez votre email..."
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="px-5 py-3.5 bg-neutral-900 border border-white/10 rounded-full text-xs text-white focus:outline-none focus:border-[#00C2E0] w-full sm:w-72"
                />
                <button
                  type="submit"
                  className="px-8 py-3.5 bg-[#00C2E0] text-black font-black uppercase text-xs rounded-full hover:scale-105 transition-all shadow-lg shadow-[#00C2E0]/20 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>S'inscrire</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </>
            )}
          </form>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <GymLogo size="lg" />
            <p className="text-xs text-white/60 max-w-sm leading-relaxed">
              Transformez votre corps et votre esprit à IbizaGym Nouvelle Médina. Équipements de pointe, cours collectifs, espaces musculation et cardio.
            </p>
            <div className="pt-2 text-xs text-white/40 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#00C2E0]" />
              <span>Nouvelle Médina, Ben Arous, Tunisie</span>
            </div>
          </div>

          {/* Quick Nav Col */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-[#00C2E0] mb-4">
              Explorer
            </h4>
            <ul className="space-y-2.5 text-xs text-white/70 font-semibold">
              <li>
                <a href="#training" className="hover:text-[#00C2E0] transition-colors">
                  Espaces d'Entraînement
                </a>
              </li>
              <li>
                <a href="#memberships" className="hover:text-[#00C2E0] transition-colors">
                  Tarifs & Abonnements
                </a>
              </li>
              <li>
                <a href="#offers" className="hover:text-[#00C2E0] transition-colors">
                  Promotions
                </a>
              </li>
              <li>
                <a href="#schedule" className="hover:text-[#00C2E0] transition-colors">
                  Planning des Cours
                </a>
              </li>
              <li>
                <a href="#trainers" className="hover:text-[#00C2E0] transition-colors">
                  Nos Coachs
                </a>
              </li>
            </ul>
          </div>

          {/* Facilities Col */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-[#00C2E0] mb-4">
              Nos Équipements
            </h4>
            <ul className="space-y-2.5 text-xs text-white/70 font-semibold">
              <li>Zone Musculation Lourde</li>
              <li>Cardio-Training Moderne</li>
              <li>Ring de Boxe & Sacs de Frappe</li>
              <li>Salle Cours Collectifs (HIIT, Spin)</li>
              <li>Espace Cross-Training & Stretch</li>
            </ul>
          </div>

          {/* Connect & Hours */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-[#00C2E0] mb-4">
              Contact
            </h4>
            <div className="space-y-3 text-xs text-white/80">
              <a
                href="https://www.instagram.com/ibizagym/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#00C2E0] transition-colors"
              >
                <Instagram className="w-4 h-4 text-[#00C2E0]" />
                <span>Instagram : @ibizagym</span>
              </a>
              <a
                href="tel:+21629000000"
                className="flex items-center gap-2 hover:text-[#00C2E0] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#00C2E0]" />
                <span>+216 29 000 000</span>
              </a>
              <div className="pt-2 text-[11px] text-white/40">
                Horaires : <br />
                Lun-Sam : 06:00 - 22:30 <br />
                Dim : 08:00 - 18:00
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40 font-medium">
          <div>
            © {new Date().getFullYear()} IbizaGym Nouvelle Médina. Tous Droits Réservés. Ben Arous, Tunisie.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Politique de Confidentialité
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Règlement Intérieur
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

