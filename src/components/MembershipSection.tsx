import React, { useState } from 'react';
import { MEMBERSHIP_PLANS, UserBooking } from '../data/gymData';
import { Check, Calculator, Zap, ShieldCheck, ArrowRight, CheckCircle2, Trash2 } from 'lucide-react';

interface MembershipSectionProps {
  onOpenJoinModal: (planName: string) => void;
  userBookings?: UserBooking[];
  onCancelBooking?: (bookingId: string) => void;
}

export const MembershipSection: React.FC<MembershipSectionProps> = ({
  onOpenJoinModal,
  userBookings = [],
  onCancelBooking,
}) => {
  const [isAnnual, setIsAnnual] = useState(true);
  const [showCalculator, setShowCalculator] = useState(false);

  // Calculator State
  const [daysPerWeek, setDaysPerWeek] = useState<number>(4);
  const [needsCoaching, setNeedsCoaching] = useState<boolean>(true);
  const [needsSpa, setNeedsSpa] = useState<boolean>(true);

  // Recommendation engine
  const getRecommendedPlan = () => {
    if (daysPerWeek <= 2 && !needsCoaching && !needsSpa) {
      return MEMBERSHIP_PLANS.find((p) => p.id === 'day-pass') || MEMBERSHIP_PLANS[0];
    }
    if (needsSpa || (daysPerWeek >= 5 && needsCoaching)) {
      return MEMBERSHIP_PLANS.find((p) => p.id === 'annual-vip') || MEMBERSHIP_PLANS[3];
    }
    return MEMBERSHIP_PLANS.find((p) => p.id === 'quarterly-pro') || MEMBERSHIP_PLANS[2];
  };

  const recommended = getRecommendedPlan();

  return (
    <section id="memberships" className="py-24 bg-[#0A0A0A] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-96 bg-radial-gradient pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00C2E0]/10 border border-[#00C2E0]/30 text-[#00C2E0] text-xs font-black uppercase tracking-widest mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>Formules & Abonnements</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black italic uppercase tracking-tighter text-white leading-none">
            Tarifs <span className="text-[#00C2E0]">Abonnements</span>
          </h2>
          <p className="text-sm sm:text-base text-white/60 mt-4 leading-relaxed">
            Choisissez la formule qui correspond à vos objectifs sportifs. Chaque abonnement donne accès au plateau complet de musculation et cardio à Nouvelle Médina.
          </p>

          {/* Billing Toggle Switch */}
          <div className="mt-8 inline-flex items-center gap-3 p-1.5 rounded-full bg-neutral-900 border border-white/10 shadow-lg">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-5 py-2 rounded-full text-xs font-black uppercase tracking-wider transition-all ${
                !isAnnual
                  ? 'bg-[#00C2E0] text-black shadow-md'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              Paiement Mensuel
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-5 py-2 rounded-full text-xs font-black uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                isAnnual
                  ? 'bg-[#00C2E0] text-black shadow-md'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              <span>Engagements & Longue Durée</span>
              <span className="text-[10px] bg-black text-[#00C2E0] px-2 py-0.5 rounded-full font-bold">
                ÉCONOMISEZ
              </span>
            </button>
          </div>

          {/* Calculator Trigger Button */}
          <div className="mt-4">
            <button
              onClick={() => setShowCalculator(!showCalculator)}
              className="text-xs text-[#00C2E0] hover:text-white font-bold uppercase tracking-wider inline-flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Calculator className="w-4 h-4" />
              <span>{showCalculator ? 'Masquer le simulateur' : 'Pas sûr ? Simulez votre formule idéale →'}</span>
            </button>
          </div>
        </div>

        {/* Interactive Plan Calculator / Estimator Drawer */}
        {showCalculator && (
          <div className="mb-12 p-8 rounded-3xl bg-[#141414] border border-[#00C2E0]/30 shadow-2xl max-w-2xl mx-auto animate-in fade-in slide-in-from-top-4">
            <div className="flex items-center gap-2 mb-4 text-[#00C2E0] text-xs font-black uppercase tracking-widest">
              <Calculator className="w-4 h-4" />
              <span>Recommandation Personnalisée</span>
            </div>

            <h3 className="text-2xl font-black italic uppercase text-white mb-6">
              Trouvez votre formule IbizaGym
            </h3>

            <div className="space-y-6">
              {/* Question 1: Days per week */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-white/70 block mb-2">
                  1. Combien de jours par semaine prévoyez-vous de vous entraîner ? ({daysPerWeek} jours)
                </label>
                <input
                  type="range"
                  min="1"
                  max="7"
                  value={daysPerWeek}
                  onChange={(e) => setDaysPerWeek(parseInt(e.target.value))}
                  className="w-full accent-[#00C2E0] h-2 bg-neutral-800 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-white/40 mt-1 font-bold">
                  <span>1 Jour (Occasionnel)</span>
                  <span>4 Jours (Régulier)</span>
                  <span>7 Jours (Intensif)</span>
                </div>
              </div>

              {/* Question 2: Personal Coaching */}
              <div className="flex items-center justify-between border-t border-white/5 pt-4">
                <div>
                  <div className="text-xs font-bold text-white uppercase">2. Inclure Bilan Physique & Coaching ?</div>
                  <div className="text-[11px] text-white/50">Programme sur-mesure & suivi personnalisé</div>
                </div>
                <button
                  onClick={() => setNeedsCoaching(!needsCoaching)}
                  className={`w-12 h-6 rounded-full transition-colors relative p-1 ${
                    needsCoaching ? 'bg-[#00C2E0]' : 'bg-neutral-800'
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded-full bg-white transition-transform ${
                      needsCoaching ? 'translate-x-6' : 'translate-x-0'
                    }`}
                  ></div>
                </button>
              </div>

              {/* Question 3: Ice Bath & Spa Recovery */}
              <div className="flex items-center justify-between border-t border-white/5 pt-4">
                <div>
                  <div className="text-xs font-bold text-white uppercase">3. Accès aux Cours Collectifs Intensifs ?</div>
                  <div className="text-[11px] text-white/50">HIIT, Spinning, Cross-Training & Boxing</div>
                </div>
                <button
                  onClick={() => setNeedsSpa(!needsSpa)}
                  className={`w-12 h-6 rounded-full transition-colors relative p-1 ${
                    needsSpa ? 'bg-[#00C2E0]' : 'bg-neutral-800'
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded-full bg-white transition-transform ${
                      needsSpa ? 'translate-x-6' : 'translate-x-0'
                    }`}
                  ></div>
                </button>
              </div>

              {/* Result Recommendation Box */}
              <div className="p-4 rounded-2xl bg-[#00C2E0]/10 border border-[#00C2E0] flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
                <div>
                  <span className="text-[10px] bg-[#00C2E0] text-black font-black uppercase px-2 py-0.5 rounded-full">
                    MEILLEUR CHOIX
                  </span>
                  <h4 className="text-xl font-black italic uppercase text-white mt-1">
                    {recommended.name}
                  </h4>
                  <p className="text-xs text-white/70">{recommended.subtitle}</p>
                </div>
                <button
                  onClick={() => onOpenJoinModal(recommended.name)}
                  className="px-6 py-2.5 bg-[#00C2E0] text-black font-black uppercase text-xs rounded-full hover:scale-105 transition-transform flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
                >
                  <span>S'inscrire en {recommended.name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Membership Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {MEMBERSHIP_PLANS.map((plan) => {
            const price = isAnnual ? plan.annualPricePerMonth : plan.monthlyPrice;

            return (
              <div
                key={plan.id}
                className={`rounded-3xl border p-8 flex flex-col justify-between relative transition-all duration-300 hover:-translate-y-2 ${plan.color}`}
              >
                {/* Popular Tag */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#00C2E0] text-black font-black uppercase text-[10px] tracking-widest rounded-full shadow-lg">
                    ★ PLUS POPULAIRE
                  </div>
                )}

                <div>
                  <h3 className="text-2xl font-black italic uppercase text-white mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-white/60 mb-6 h-8">{plan.subtitle}</p>

                  {/* Price Block */}
                  <div className="mb-8">
                    <div className="flex items-baseline gap-1">
                      <span className="text-5xl font-black italic tracking-tighter text-white">
                        {price} DT
                      </span>
                      <span className="text-xs font-bold text-white/50 uppercase">
                        /{plan.id === 'day-pass' ? 'séance' : plan.id === 'annual-vip' ? 'an' : plan.id === 'quarterly-pro' ? 'trimestre' : 'mois'}
                      </span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-2">
                      Points Forts :
                    </div>
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-white/80">
                        <div className="w-4 h-4 rounded-full bg-[#00C2E0]/20 flex items-center justify-center text-[#00C2E0] flex-shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span className="leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct Join / Active Subscription Button */}
                {(() => {
                  const activeMembership = userBookings.find(
                    (b) => b.type === 'membership' && b.title === plan.name
                  );

                  if (activeMembership && onCancelBooking) {
                    return (
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-xs font-bold text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-3 py-1.5 rounded-xl">
                          <span className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            Inscription Active
                          </span>
                          <span className="text-[10px] text-emerald-300 font-mono">Validée</span>
                        </div>
                        <button
                          onClick={() => onCancelBooking(activeMembership.id)}
                          className="w-full py-3 rounded-full font-black uppercase text-xs tracking-wider transition-all cursor-pointer bg-red-500/10 hover:bg-red-600 text-red-400 hover:text-white border border-red-500/30 flex items-center justify-center gap-2"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                          <span>Annuler l'inscription</span>
                        </button>
                      </div>
                    );
                  }

                  return (
                    <button
                      onClick={() => onOpenJoinModal(plan.name)}
                      className={`w-full py-4 rounded-full font-black uppercase text-xs tracking-wider transition-all shadow-lg cursor-pointer ${
                        plan.popular
                          ? 'bg-[#00C2E0] text-black hover:scale-105 shadow-[#00C2E0]/30'
                          : 'bg-white/10 hover:bg-[#00C2E0] hover:text-black text-white border border-white/20'
                      }`}
                    >
                      {plan.ctaText}
                    </button>
                  );
                })()}
              </div>
            );
          })}
        </div>

        {/* Satisfaction Guarantee Notice */}
        <div className="mt-16 p-6 rounded-2xl bg-neutral-900/60 border border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#00C2E0]/10 border border-[#00C2E0]/30 flex items-center justify-center text-[#00C2E0] flex-shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white uppercase italic">
                S'inscrire ou nous visiter directement
              </h4>
              <p className="text-xs text-white/60">
                Retrouvez-nous à Nouvelle Médina, Ben Arous. Pas de frais cachés de dossier.
              </p>
            </div>
          </div>

          <button
            onClick={() => onOpenJoinModal('Séance d\'essai gratuite')}
            className="px-6 py-3 bg-[#00C2E0] hover:bg-[#00A0C0] border border-white/20 text-black font-bold uppercase text-xs rounded-full whitespace-nowrap cursor-pointer"
          >
            Séance d'Essai Gratuite
          </button>
        </div>
      </div>
    </section>
  );
};

