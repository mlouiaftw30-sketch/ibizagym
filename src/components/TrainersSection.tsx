import React, { useState } from 'react';
import { TRAINERS, FACILITIES } from '../data/gymData';
import { Instagram, Award, Sparkles } from 'lucide-react';

export const TrainersSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'coaches' | 'facilities'>('coaches');

  return (
    <section id="trainers" className="py-24 bg-[#0A0A0A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00C2E0]/10 border border-[#00C2E0]/30 text-[#00C2E0] text-xs font-black uppercase tracking-widest mb-3">
              <Award className="w-3.5 h-3.5" />
              <span>L'Équipe & Nos Installations</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black italic uppercase tracking-tighter text-white leading-none">
              Nos <span className="text-[#00C2E0]">Coachs</span> & Équipements
            </h2>
            <p className="text-sm text-white/60 max-w-lg mt-3">
              Rencontrez nos coachs certifiés et découvrez nos espaces d'entraînement équipés pour votre performance.
            </p>
          </div>

          {/* Toggle Switch */}
          <div className="inline-flex p-1.5 rounded-full bg-neutral-900 border border-white/10">
            <button
              onClick={() => setActiveTab('coaches')}
              className={`px-5 py-2 rounded-full text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'coaches'
                  ? 'bg-[#00C2E0] text-black shadow-md'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              Coachs Diplômés
            </button>
            <button
              onClick={() => setActiveTab('facilities')}
              className={`px-5 py-2 rounded-full text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'facilities'
                  ? 'bg-[#00C2E0] text-black shadow-md'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              Espaces & Équipements
            </button>
          </div>
        </div>

        {/* Content View 1: Master Coaches */}
        {activeTab === 'coaches' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in">
            {TRAINERS.map((trainer) => (
              <div
                key={trainer.id}
                className="bg-[#1A1A1A] border border-white/10 rounded-3xl overflow-hidden group hover:border-[#00C2E0]/50 transition-all duration-300 flex flex-col justify-between shadow-xl"
              >
                <div>
                  {/* Photo Container */}
                  <div className="relative h-72 overflow-hidden bg-neutral-900">
                    <img
                      src={trainer.image}
                      alt={trainer.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent"></div>

                    {/* Experience Badge */}
                    <span className="absolute top-4 right-4 px-3 py-1 bg-black/80 backdrop-blur-md text-[#00C2E0] font-mono font-bold text-[10px] uppercase rounded-full border border-white/10">
                      {trainer.experience}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-black italic uppercase text-white mb-1">
                      {trainer.name}
                    </h3>
                    <p className="text-xs font-bold text-[#00C2E0] uppercase mb-3">
                      {trainer.role}
                    </p>
                    <p className="text-xs text-white/70 leading-relaxed mb-4">
                      {trainer.bio}
                    </p>
                  </div>
                </div>

                {/* Footer Social */}
                <div className="px-6 pb-6 pt-2 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] uppercase font-bold text-white/40">
                    {trainer.specialty.split(',')[0]}
                  </span>
                  <a
                    href="https://www.instagram.com/ibizagym/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-white/80 hover:text-[#00C2E0] font-bold transition-colors"
                  >
                    <Instagram className="w-3.5 h-3.5 text-[#00C2E0]" />
                    <span>@ibizagym</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Content View 2: Facilities */}
        {activeTab === 'facilities' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in">
            {FACILITIES.map((facility) => (
              <div
                key={facility.id}
                className="bg-[#1A1A1A] border border-white/10 rounded-3xl overflow-hidden group hover:border-[#00C2E0]/50 transition-all duration-300 relative flex flex-col justify-end min-h-[320px] p-8 shadow-xl"
              >
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-40 group-hover:opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/80 to-transparent"></div>

                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-2xl bg-[#00C2E0] text-black flex items-center justify-center font-bold mb-4 shadow-lg">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h3 className="text-2xl font-black italic uppercase text-white mb-2">
                    {facility.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/80 max-w-lg leading-relaxed">
                    {facility.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

