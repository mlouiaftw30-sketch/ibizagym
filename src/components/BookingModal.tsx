import React, { useState } from 'react';
import { GymClass, UserBooking } from '../data/gymData';
import { Sparkles, CheckCircle2, Clock, CreditCard, X } from 'lucide-react';
import { GymLogo } from './GymLogo';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  modalType: 'membership' | 'class' | 'offer';
  planName?: string;
  promoCode?: string;
  selectedClass?: GymClass | null;
  onSuccessToast: (msg: string) => void;
  onAddBooking?: (booking: UserBooking) => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  modalType,
  planName = 'Forfait Trimestriel Pro',
  promoCode = '',
  selectedClass,
  onSuccessToast,
  onAddBooking,
}) => {
  if (!isOpen) return null;

  const [step, setStep] = useState<'form' | 'success'>('form');
  const [enteredCode, setEnteredCode] = useState(promoCode);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [startDate, setStartDate] = useState(
    new Date().toISOString().split('T')[0]
  );
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'counter'>('counter');
  const [isProcessing, setIsProcessing] = useState(false);

  const discountPercent = enteredCode.toUpperCase().includes('IBIZA') ? 20 : 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || (!email && !phone)) {
      alert('Veuillez remplir votre nom ainsi que votre email ou numéro de téléphone');
      return;
    }

    setIsProcessing(true);

    const newBooking: UserBooking = {
      id: 'res-' + Math.floor(100000 + Math.random() * 900000),
      title: modalType === 'class' ? (selectedClass?.title || 'Cours Gym') : planName,
      type: modalType,
      date: modalType === 'class' ? (selectedClass?.day ? `${selectedClass.day}` : 'Cette semaine') : startDate,
      time: modalType === 'class' ? selectedClass?.time : undefined,
      fullName: fullName,
      email: email,
      phone: phone,
      classId: selectedClass?.id,
      createdAt: new Date().toISOString(),
    };

    setTimeout(() => {
      setIsProcessing(false);
      if (onAddBooking) {
        onAddBooking(newBooking);
      }
      setStep('success');
      onSuccessToast('Inscription enregistrée ! Bienvenue à IbizaGym.');
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-in fade-in">
      <div className="bg-[#1A1A1A] border border-white/20 rounded-3xl max-w-xl w-full p-6 sm:p-8 relative shadow-2xl text-white my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-8 h-8 rounded-full bg-white/10 hover:bg-[#00C2E0] hover:text-black transition-colors flex items-center justify-center font-bold text-sm cursor-pointer z-10"
        >
          <X className="w-4 h-4" />
        </button>

        {step === 'form' ? (
          <div>
            {/* Header Title */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00C2E0]/20 text-[#00C2E0] text-[11px] font-black uppercase mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>
                  {modalType === 'class'
                    ? 'Réservation de Cours'
                    : modalType === 'offer'
                    ? 'Offre Exclusive'
                    : 'Inscription IbizaGym'}
                </span>
              </div>

              <h3 className="text-3xl font-black italic uppercase text-white leading-tight">
                {modalType === 'class'
                  ? selectedClass?.title
                  : modalType === 'offer'
                  ? `Profiter de : ${planName}`
                  : `Abonnement : ${planName}`}
              </h3>

              {modalType === 'class' && selectedClass && (
                <div className="flex flex-wrap items-center gap-3 text-xs text-white/70 mt-2 font-mono">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#00C2E0]" />
                    {selectedClass.time} ({selectedClass.day})
                  </span>
                  <span>•</span>
                  <span>{selectedClass.location}</span>
                </div>
              )}
            </div>

            {/* Registration Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-3">
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-wider text-white/70 block mb-1">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="ex: Mohamed Trabelsi"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-4 py-2.5 bg-neutral-900 border border-white/10 rounded-2xl text-xs text-white focus:outline-none focus:border-[#00C2E0]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-wider text-white/70 block mb-1">
                      Adresse Email
                    </label>
                    <input
                      type="email"
                      placeholder="mohamed@exemple.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2.5 bg-neutral-900 border border-white/10 rounded-2xl text-xs text-white focus:outline-none focus:border-[#00C2E0]"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-wider text-white/70 block mb-1">
                      Numéro Téléphone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+216 29 000 000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-2.5 bg-neutral-900 border border-white/10 rounded-2xl text-xs text-white focus:outline-none focus:border-[#00C2E0]"
                    />
                  </div>
                </div>

                {modalType !== 'class' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-wider text-white/70 block mb-1">
                        Date de début souhaitée
                      </label>
                      <input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="w-full px-4 py-2.5 bg-neutral-900 border border-white/10 rounded-2xl text-xs text-white focus:outline-none focus:border-[#00C2E0]"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-wider text-white/70 block mb-1">
                        Code Promo
                      </label>
                      <input
                        type="text"
                        placeholder="ex: IBIZA20"
                        value={enteredCode}
                        onChange={(e) => setEnteredCode(e.target.value)}
                        className="w-full px-4 py-2.5 bg-neutral-900 border border-white/10 rounded-2xl text-xs text-white focus:outline-none focus:border-[#00C2E0]"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Payment Method Selector for Memberships */}
              {modalType !== 'class' && (
                <div className="pt-2">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-white/70 block mb-2">
                    Mode de Règlement
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('counter')}
                      className={`p-3 rounded-2xl border text-xs font-bold flex items-center justify-center gap-2 cursor-pointer ${
                        paymentMethod === 'counter'
                          ? 'border-[#00C2E0] bg-[#00C2E0]/10 text-white'
                          : 'border-white/10 bg-neutral-900 text-white/50'
                      }`}
                    >
                      <CreditCard className="w-4 h-4 text-[#00C2E0]" />
                      <span>Paiement à la Caisse</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('card')}
                      className={`p-3 rounded-2xl border text-xs font-bold flex items-center justify-center gap-2 cursor-pointer ${
                        paymentMethod === 'card'
                          ? 'border-[#00C2E0] bg-[#00C2E0]/10 text-white'
                          : 'border-white/10 bg-neutral-900 text-white/50'
                      }`}
                    >
                      <CreditCard className="w-4 h-4 text-[#00C2E0]" />
                      <span>Carte Bancaire / Chèque</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Order Summary Box */}
              <div className="p-4 rounded-2xl bg-neutral-900 border border-white/10 text-xs space-y-2">
                <div className="flex justify-between text-white/60">
                  <span>Formule sélectionnée :</span>
                  <span className="font-bold text-white">
                    {modalType === 'class' ? selectedClass?.title : planName}
                  </span>
                </div>
                {discountPercent > 0 && (
                  <div className="flex justify-between text-[#00C2E0] font-bold">
                    <span>Remise Code Promo :</span>
                    <span>-{discountPercent}%</span>
                  </div>
                )}
                <div className="flex justify-between text-sm font-black pt-2 border-t border-white/5 text-white">
                  <span>Validation :</span>
                  <span className="text-[#00C2E0]">
                    {modalType === 'class' ? 'Réservation Instantanée' : 'Paiement à l\'Accueil / Sur place'}
                  </span>
                </div>
              </div>

              <button
                type="submit"
                disabled={isProcessing}
                className="w-full py-4 bg-[#00C2E0] text-black font-black uppercase text-xs rounded-full hover:scale-105 transition-all shadow-lg shadow-[#00C2E0]/30 cursor-pointer"
              >
                {isProcessing ? (
                  <span>Validation en cours...</span>
                ) : (
                  <span>
                    {modalType === 'class'
                      ? 'Confirmer ma Place au Cours'
                      : 'Valider mon Inscription'}
                  </span>
                )}
              </button>
            </form>
          </div>
        ) : (
          /* Confirmation State */
          <div className="py-6 text-center space-y-6 animate-in fade-in">
            <div className="w-20 h-20 rounded-full bg-[#00C2E0]/20 text-[#00C2E0] border border-[#00C2E0] flex items-center justify-center mx-auto shadow-2xl">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#00C2E0]">
                Bienvenue à IbizaGym
              </span>
              <h3 className="text-3xl font-black italic uppercase text-white mt-1">
                Réservation Confirmée !
              </h3>
              <p className="text-xs text-white/70 max-w-sm mx-auto mt-2">
                Présentez ce pass virtuel lors de votre venue à l'accueil d'IbizaGym Nouvelle Médina.
              </p>
            </div>

            {/* Digital Ticket Card */}
            <div className="p-6 rounded-3xl bg-neutral-900 border border-[#00C2E0]/40 max-w-sm mx-auto text-left space-y-3 relative overflow-hidden shadow-2xl">
              <div className="flex justify-between items-center border-b border-white/10 pb-3">
                <GymLogo size="sm" />
                <span className="text-[10px] font-mono bg-[#00C2E0] text-black font-black px-2 py-0.5 rounded-full">
                  VALIDÉ
                </span>
              </div>

              <div className="space-y-1 text-xs">
                <div className="text-white/50 text-[10px] uppercase font-bold">Titulaire</div>
                <div className="text-white font-bold">{fullName}</div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <div className="text-white/50 text-[10px] uppercase font-bold">Formule / Cours</div>
                  <div className="text-white font-semibold truncate">
                    {modalType === 'class' ? selectedClass?.title : planName}
                  </div>
                </div>
                <div>
                  <div className="text-white/50 text-[10px] uppercase font-bold">Date / Heure</div>
                  <div className="text-[#00C2E0] font-mono font-bold">
                    {modalType === 'class' ? selectedClass?.time : startDate}
                  </div>
                </div>
              </div>

              {/* Barcode Simulation */}
              <div className="pt-3 border-t border-white/10 text-center">
                <div className="h-8 bg-white/20 rounded flex items-center justify-center tracking-widest font-mono text-[10px] text-white/80 font-bold">
                  ||||| | |||| ||| |||||| | ||||| | IBZ-TUN-2026
                </div>
                <div className="text-[9px] text-white/40 mt-1 uppercase">Nouvelle Médina, Ben Arous, Tunisie</div>
              </div>
            </div>

            <button
              onClick={onClose}
              className="px-8 py-3 bg-[#00C2E0] text-black font-black uppercase text-xs rounded-full hover:scale-105 transition-transform cursor-pointer"
            >
              Fermer
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

