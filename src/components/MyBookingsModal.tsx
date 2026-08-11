import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, Trash2, X, Ticket, Sparkles, CheckCircle2, AlertCircle } from 'lucide-react';
import { UserBooking } from '../data/gymData';

interface MyBookingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookings: UserBooking[];
  onCancelBooking: (bookingId: string) => void;
  onCancelAllBookings?: () => void;
  onOpenSchedule?: () => void;
}

export const MyBookingsModal: React.FC<MyBookingsModalProps> = ({
  isOpen,
  onClose,
  bookings,
  onCancelBooking,
  onCancelAllBookings,
  onOpenSchedule,
}) => {
  const [confirmingId, setConfirmingId] = useState<string | null>(null);
  const [confirmingAll, setConfirmingAll] = useState(false);

  if (!isOpen) return null;

  const handleConfirmCancel = (id: string) => {
    onCancelBooking(id);
    setConfirmingId(null);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-in fade-in">
      <div className="bg-[#1A1A1A] border border-white/20 rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl text-white my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-8 h-8 rounded-full bg-white/10 hover:bg-[#00C2E0] hover:text-black transition-colors flex items-center justify-center font-bold text-sm cursor-pointer z-10"
          aria-label="Fermer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00C2E0]/20 text-[#00C2E0] text-[11px] font-black uppercase mb-2">
              <Ticket className="w-3.5 h-3.5" />
              <span>Gestion des Réservations</span>
            </div>

            <h3 className="text-3xl font-black italic uppercase text-white leading-tight">
              Mes <span className="text-[#00C2E0]">Réservations</span> & Passes
            </h3>
            <p className="text-xs text-white/60 mt-1">
              Consultez ou annulez vos cours et abonnements réservés à IbizaGym Nouvelle Médina.
            </p>
          </div>

          {bookings.length > 0 && onCancelAllBookings && (
            <div>
              {confirmingAll ? (
                <div className="p-2 bg-red-950/60 border border-red-500/50 rounded-2xl space-y-1 text-center animate-in fade-in">
                  <p className="text-[10px] font-bold text-red-300">Tout annuler ({bookings.length}) ?</p>
                  <div className="flex items-center justify-center gap-2">
                    <button
                      onClick={() => {
                        onCancelAllBookings();
                        setConfirmingAll(false);
                      }}
                      className="px-2.5 py-1 bg-red-600 hover:bg-red-700 text-white font-bold text-[10px] rounded-lg transition-colors cursor-pointer"
                    >
                      Oui, tout annuler
                    </button>
                    <button
                      onClick={() => setConfirmingAll(false)}
                      className="px-2.5 py-1 bg-white/10 hover:bg-white/20 text-white font-bold text-[10px] rounded-lg transition-colors cursor-pointer"
                    >
                      Non
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => setConfirmingAll(true)}
                  className="px-3.5 py-2 bg-red-500/10 hover:bg-red-500 text-red-400 hover:text-white border border-red-500/30 text-[11px] font-bold uppercase rounded-xl transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Tout annuler</span>
                </button>
              )}
            </div>
          )}
        </div>

        {/* Bookings List */}
        {bookings.length > 0 ? (
          <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-1 no-scrollbar">
            {bookings.map((item) => {
              const isConfirmingThis = confirmingId === item.id;

              return (
                <div
                  key={item.id}
                  className={`p-5 rounded-2xl border transition-all ${
                    isConfirmingThis
                      ? 'bg-red-950/40 border-red-500/50'
                      : 'bg-neutral-900 border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    {/* Left Details */}
                    <div className="space-y-2 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-full bg-[#00C2E0]/20 text-[#00C2E0] font-black text-[10px] uppercase tracking-wider">
                          {item.type === 'class'
                            ? 'Cours Collectif'
                            : item.type === 'membership'
                            ? 'Abonnement'
                            : 'Offre Spéciale'}
                        </span>
                        <span className="text-[10px] font-mono text-white/40">
                          ID: {item.id}
                        </span>
                      </div>

                      <h4 className="text-lg font-black italic uppercase text-white leading-snug">
                        {item.title}
                      </h4>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-xs text-white/70">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-[#00C2E0]" />
                          <span>{item.date}</span>
                        </div>

                        {item.time && (
                          <div className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5 text-[#00C2E0]" />
                            <span>{item.time}</span>
                          </div>
                        )}

                        <div className="flex items-center gap-1.5">
                          <User className="w-3.5 h-3.5 text-white/40" />
                          <span>{item.fullName}</span>
                        </div>

                        {item.phone && (
                          <div className="flex items-center gap-1.5">
                            <Phone className="w-3.5 h-3.5 text-white/40" />
                            <span>{item.phone}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Right Action: Cancellation */}
                    <div className="sm:border-l sm:border-white/10 sm:pl-4 flex flex-col justify-center">
                      {isConfirmingThis ? (
                        <div className="space-y-2 text-center sm:text-right animate-in fade-in">
                          <p className="text-[11px] font-bold text-red-400 flex items-center justify-center sm:justify-end gap-1">
                            <AlertCircle className="w-3.5 h-3.5" />
                            {item.type === 'class' ? 'Annuler ce cours ?' : 'Annuler cette inscription ?'}
                          </p>
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => handleConfirmCancel(item.id)}
                              className="px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs rounded-xl transition-colors cursor-pointer"
                            >
                              Oui, Annuler
                            </button>
                            <button
                              onClick={() => setConfirmingId(null)}
                              className="px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs rounded-xl transition-colors cursor-pointer"
                            >
                              Non
                            </button>
                          </div>
                        </div>
                      ) : (
                        <button
                          onClick={() => setConfirmingId(item.id)}
                          className="px-4 py-2.5 bg-red-500/10 hover:bg-red-500 text-red-400 hover:text-white border border-red-500/30 font-bold uppercase text-[11px] tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                          <span>
                            {item.type === 'class'
                              ? 'Annuler la réservation'
                              : 'Annuler l\'inscription'}
                          </span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-12 bg-neutral-900/60 rounded-3xl border border-white/10 p-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto text-white/40">
              <Ticket className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-lg font-bold uppercase text-white">
                Aucune réservation active
              </h4>
              <p className="text-xs text-white/60 max-w-sm mx-auto mt-1">
                Vous n'avez pas de séance ou d'abonnement réservé pour le moment.
              </p>
            </div>
            {onOpenSchedule && (
              <button
                onClick={() => {
                  onClose();
                  onOpenSchedule();
                }}
                className="px-6 py-2.5 bg-[#00C2E0] text-black font-bold uppercase text-xs rounded-full hover:scale-105 transition-all shadow-lg shadow-[#00C2E0]/20 inline-flex items-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Réserver un cours maintenant</span>
              </button>
            )}
          </div>
        )}

        {/* Footer Note */}
        <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-white/40">
          <span>IbizaGym Nouvelle Médina • Annulation Sans Frais</span>
          <button
            onClick={onClose}
            className="text-white hover:text-[#00C2E0] font-bold cursor-pointer"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};
