import React, { useState } from 'react';
import { ArrowDown, Play, ShieldCheck, Flame, Compass, Dumbbell, Instagram } from 'lucide-react';
import { GymLogo } from './GymLogo';

export const Hero: React.FC = () => {
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  return (
    <section className="relative min-h-screen pt-28 pb-16 flex flex-col justify-between overflow-hidden bg-[#0A0A0A]">
      {/* Background Atmosphere Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25 scale-105 transition-transform duration-10000"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2000&q=80')`,
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/70 to-black/60"></div>
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-[#00C2E0]/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-10 -left-20 w-80 h-80 bg-[#00C2E0]/15 rounded-full blur-[100px] pointer-events-none"></div>
      </div>

      {/* Background Decorative Large Watermark Typography */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 opacity-[0.03] select-none pointer-events-none w-full text-center">
        <span className="text-[18vw] font-black italic tracking-tighter leading-none block uppercase text-white">
          IBIZAGYM
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Content Left (Col 7) */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Tag eyebrow & Logo */}
            <div className="flex flex-wrap items-center gap-3">
              <GymLogo size="md" />
              <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-[#00C2E0] animate-ping"></span>
                <span className="text-[#00C2E0] font-black uppercase tracking-[0.2em] text-[11px]">
                  Nouvelle Médina • Ben Arous
                </span>
              </div>
            </div>

            {/* Display Headline */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black italic uppercase leading-[0.92] tracking-tighter text-white">
              Forge Ton <br />
              <span className="text-stroke-blue text-transparent">Physique</span> Élite
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-white/70 max-w-xl font-normal leading-relaxed">
              La destination fitness incontournable à Nouvelle Médina, Ben Arous. Équipements modernes de musculation, plateau cardio complet, cours collectifs stimulants et coaching personnalisé.
            </p>

            {/* Call To Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#memberships"
                className="px-8 py-4 bg-[#00C2E0] text-black font-black uppercase text-sm rounded-full hover:scale-105 transition-all shadow-xl shadow-[#00C2E0]/30 flex items-center gap-2"
              >
                <span>Voir les Tarifs</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="px-8 py-4 border border-white/20 text-white font-black uppercase text-sm rounded-full bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-white/40 transition-all flex items-center gap-2"
              >
                <span>Localisation & Contact</span>
              </a>

              <a
                href="https://www.instagram.com/ibizagym/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 border border-[#00C2E0]/40 text-[#00C2E0] hover:bg-[#00C2E0]/10 font-bold uppercase text-xs rounded-full flex items-center gap-2 transition-all"
              >
                <Instagram className="w-4 h-4" />
                <span>Page Instagram @ibizagym</span>
              </a>
            </div>

            {/* Quick Live Meter */}
            <div className="pt-4 flex items-center gap-4 text-xs font-semibold text-white/60">
              <div className="flex -space-x-2">
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-black object-cover"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
                  alt="Member"
                />
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-black object-cover"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
                  alt="Member"
                />
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-black object-cover"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80"
                  alt="Member"
                />
              </div>
              <div>
                <span className="text-white font-bold block">Salle Ouverte & Ambiance au Top</span>
                <span className="text-white/40 text-[11px]">Nouvelle Médina • Ben Arous</span>
              </div>
            </div>
          </div>

          {/* Hero Right Visual Card (Col 5) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl bg-neutral-900/90 border border-white/10 p-2 overflow-hidden shadow-2xl group">
              {/* Media Preview Box */}
              <div className="relative h-[380px] sm:h-[420px] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1000&q=80"
                  alt="IbizaGym Atmosphere"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

                {/* Floating Top Badge */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
                  <span className="px-3 py-1 bg-[#00C2E0] text-black font-black text-[10px] uppercase tracking-widest rounded-full">
                    IbizaGym Tunisia
                  </span>
                  <span className="px-3 py-1 bg-black/70 backdrop-blur-md text-white text-[10px] font-bold rounded-full border border-white/10">
                    Nouvelle Médina
                  </span>
                </div>

                {/* Video Play Trigger Modal / Simulated Action */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={() => setIsPlayingVideo(!isPlayingVideo)}
                    className="w-16 h-16 rounded-full bg-[#00C2E0] text-black flex items-center justify-center shadow-2xl hover:scale-110 transition-transform cursor-pointer group/btn"
                    title="Voir l'ambiance IbizaGym"
                  >
                    <Play className="w-7 h-7 fill-black ml-1 group-hover/btn:scale-110 transition-transform" />
                  </button>
                </div>

                {/* Video Playing Overlay Modal */}
                {isPlayingVideo && (
                  <div className="absolute inset-0 bg-black/95 z-20 flex flex-col items-center justify-center p-6 text-center animate-in fade-in">
                    <button
                      onClick={() => setIsPlayingVideo(false)}
                      className="absolute top-4 right-4 text-xs bg-white/10 text-white px-3 py-1 rounded-full hover:bg-[#00C2E0] hover:text-black transition-colors"
                    >
                      Fermer ✕
                    </button>
                    <Flame className="w-12 h-12 text-[#00C2E0] mb-3 animate-bounce" />
                    <h3 className="text-xl font-black italic uppercase text-white mb-2">
                      Ambiance IbizaGym
                    </h3>
                    <p className="text-xs text-white/70 max-w-xs mb-4">
                      Séances intensives, musique motivante et équipements complets à Nouvelle Médina, Ben Arous.
                    </p>
                    <a
                      href="https://www.instagram.com/ibizagym/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2.5 bg-[#00C2E0] text-black font-bold uppercase text-xs rounded-full inline-flex items-center gap-1.5"
                    >
                      <Instagram className="w-3.5 h-3.5" />
                      <span>Instagram @ibizagym</span>
                    </a>
                  </div>
                )}

                {/* Bottom Overlay Text */}
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#00C2E0] mb-1">
                    Club de Fitness
                  </p>
                  <h3 className="text-2xl font-black italic text-white leading-tight">
                    Plateau & Musculation
                  </h3>
                  <p className="text-xs text-white/70 mt-1">
                    Nouvelle Médina, Ben Arous • Tunisie
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Bottom Key Feature Metrics Cards Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-white/10">
          <div className="p-4 rounded-2xl bg-neutral-900/60 border border-white/5 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#00C2E0]/10 border border-[#00C2E0]/20 flex items-center justify-center text-[#00C2E0]">
              <Dumbbell className="w-5 h-5" />
            </div>
            <div>
              <div className="text-lg font-black italic text-white leading-none">Plateau Muscu</div>
              <div className="text-[11px] text-white/50 uppercase font-bold mt-1">Équipement Professionnel</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-neutral-900/60 border border-white/5 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#00C2E0]/10 border border-[#00C2E0]/20 flex items-center justify-center text-[#00C2E0]">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <div className="text-lg font-black italic text-white leading-none">Espace Cardio</div>
              <div className="text-[11px] text-white/50 uppercase font-bold mt-1">Tapis & Vélos Technogym</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-neutral-900/60 border border-white/5 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#00C2E0]/10 border border-[#00C2E0]/20 flex items-center justify-center text-[#00C2E0]">
              <Flame className="w-5 h-5" />
            </div>
            <div>
              <div className="text-lg font-black italic text-white leading-none">Cours Collectifs</div>
              <div className="text-[11px] text-white/50 uppercase font-bold mt-1">HIIT, Spinning & Boxing</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-neutral-900/60 border border-white/5 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#00C2E0]/10 border border-[#00C2E0]/20 flex items-center justify-center text-[#00C2E0]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-lg font-black italic text-white leading-none">Coaching Privé</div>
              <div className="text-[11px] text-white/50 uppercase font-bold mt-1">Suivi Sur Mesure</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
