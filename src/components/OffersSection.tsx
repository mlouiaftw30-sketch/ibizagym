import React, { useState } from 'react';
import { EXCLUSIVE_OFFERS, Offer } from '../data/gymData';
import { Tag, Sparkles, Copy, Check, ArrowUpRight } from 'lucide-react';

interface OffersSectionProps {
  onOpenJoinModal: (planName?: string, promoCode?: string) => void;
  onShowToast: (msg: string) => void;
}

export const OffersSection: React.FC<OffersSectionProps> = ({ onOpenJoinModal, onShowToast }) => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [activeOfferModal, setActiveOfferModal] = useState<Offer | null>(null);

  const handleCopyCode = (code: string, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    onShowToast(`Code promo "${code}" copié dans le presse-papier !`);
    setTimeout(() => setCopiedCode(null), 3000);
  };

  return (
    <section id="offers" className="py-24 bg-[#0F0F0F] relative overflow-hidden border-t border-white/10">
      {/* Background radial glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#00C2E0]/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00C2E0]/10 border border-[#00C2E0]/30 text-[#00C2E0] text-xs font-black uppercase tracking-widest mb-3">
              <Tag className="w-3.5 h-3.5" />
              <span>Offres & Promotions</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black italic uppercase tracking-tighter text-white leading-none">
              Promos Exclusives <span className="text-[#00C2E0]">IbizaGym</span>
            </h2>
            <p className="text-sm text-white/60 max-w-lg mt-3">
              Découvrez nos offres spéciales, remises d'ouverture et avantages réservés aux nouveaux membres à Nouvelle Médina.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-white/50 font-bold uppercase tracking-wider">
              Offres Spéciales
            </span>
            <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-[#00C2E0] font-mono font-bold">
              MIS À JOUR
            </div>
          </div>
        </div>

        {/* Poster Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {EXCLUSIVE_OFFERS.map((offer, idx) => (
            <div
              key={offer.id}
              onClick={() => setActiveOfferModal(offer)}
              className={`group relative rounded-3xl overflow-hidden border border-white/10 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 cursor-pointer shadow-xl ${
                idx === 0
                  ? 'bg-[#00C2E0] text-black blue-glow'
                  : 'bg-[#1A1A1A] hover:bg-neutral-900 text-white'
              }`}
            >
              {/* Background Poster Watermark */}
              <div
                className={`absolute -bottom-10 -right-8 text-[120px] font-black italic tracking-tighter select-none pointer-events-none opacity-10 leading-none ${
                  idx === 0 ? 'text-black' : 'text-white'
                }`}
              >
                {offer.discount}
              </div>

              {/* Top Row: Badge & Discount Tag */}
              <div>
                <div className="flex items-start justify-between gap-2 mb-6">
                  <span
                    className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider shadow-sm ${
                      idx === 0
                        ? 'bg-black text-[#00C2E0]'
                        : 'bg-[#00C2E0] text-black'
                    }`}
                  >
                    {offer.tag}
                  </span>
                  <span
                    className={`text-3xl font-black italic tracking-tighter leading-none ${
                      idx === 0 ? 'text-black' : 'text-[#00C2E0]'
                    }`}
                  >
                    {offer.discount}
                  </span>
                </div>

                <h3
                  className={`text-2xl font-black italic uppercase leading-none mb-2 ${
                    idx === 0 ? 'text-black' : 'text-white'
                  }`}
                >
                  {offer.title}
                </h3>

                <p
                  className={`text-xs font-bold leading-relaxed mb-4 ${
                    idx === 0 ? 'text-black/80' : 'text-white/70'
                  }`}
                >
                  {offer.subtitle}
                </p>
              </div>

              {/* Highlights & Action */}
              <div className="mt-6 pt-4 border-t border-current/15">
                <ul className="space-y-1.5 text-xs font-medium mb-6">
                  {offer.highlights.slice(0, 3).map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                      <span className="line-clamp-1">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between gap-2">
                  <button
                    onClick={(e) => handleCopyCode(offer.code, e)}
                    className={`px-3 py-1.5 rounded-xl text-[11px] font-mono font-bold flex items-center gap-1.5 transition-colors ${
                      idx === 0
                        ? 'bg-black/20 hover:bg-black/30 text-black'
                        : 'bg-white/5 hover:bg-white/10 text-white/80'
                    }`}
                  >
                    {copiedCode === offer.code ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span>COPIÉ</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>{offer.code}</span>
                      </>
                    )}
                  </button>

                  <span
                    className={`p-2 rounded-full flex items-center justify-center transition-transform group-hover:translate-x-1 ${
                      idx === 0
                        ? 'bg-black text-[#00C2E0]'
                        : 'bg-[#00C2E0] text-black'
                    }`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Offer Details Modal */}
        {activeOfferModal && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in">
            <div className="bg-[#1A1A1A] border border-white/20 rounded-3xl max-w-lg w-full p-8 relative shadow-2xl text-white">
              <button
                onClick={() => setActiveOfferModal(null)}
                className="absolute top-6 right-6 w-8 h-8 rounded-full bg-white/10 hover:bg-[#00C2E0] hover:text-black transition-colors flex items-center justify-center font-bold text-sm cursor-pointer"
              >
                ✕
              </button>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00C2E0]/20 text-[#00C2E0] text-xs font-black uppercase mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{activeOfferModal.tag}</span>
              </div>

              <h3 className="text-3xl font-black italic uppercase leading-tight mb-1">
                {activeOfferModal.title}
              </h3>
              <p className="text-xl font-black text-[#00C2E0] mb-4">
                {activeOfferModal.discount}
              </p>

              <p className="text-sm text-white/80 leading-relaxed mb-6">
                {activeOfferModal.description}
              </p>

              <div className="bg-neutral-900 rounded-2xl p-4 border border-white/10 mb-6 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-white/50">
                  Inclus dans cette offre :
                </div>
                <ul className="space-y-2 text-xs">
                  {activeOfferModal.highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#00C2E0]"></span>
                      <span className="text-white/90 font-medium">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {
                    const code = activeOfferModal.code;
                    setActiveOfferModal(null);
                    onOpenJoinModal('Offre Exclusive', code);
                  }}
                  className="flex-1 py-3.5 bg-[#00C2E0] text-black font-black uppercase text-xs rounded-full hover:scale-105 transition-transform shadow-lg shadow-[#00C2E0]/30 cursor-pointer"
                >
                  Profiter de l'Offre
                </button>
                <button
                  onClick={(e) => handleCopyCode(activeOfferModal.code, e)}
                  className="px-6 py-3.5 border border-white/20 text-white font-bold uppercase text-xs rounded-full hover:bg-white/10 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Copy className="w-4 h-4" />
                  <span>Code : {activeOfferModal.code}</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

