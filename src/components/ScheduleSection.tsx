import React, { useState } from 'react';
import { SCHEDULE_CLASSES, GymClass, UserBooking } from '../data/gymData';
import { Calendar, Clock, MapPin, Flame, Filter, CheckCircle2, Trash2 } from 'lucide-react';

interface ScheduleSectionProps {
  onOpenBookingModal: (classItem: GymClass) => void;
  userBookings?: UserBooking[];
  onCancelBooking?: (bookingId: string) => void;
}

export const ScheduleSection: React.FC<ScheduleSectionProps> = ({
  onOpenBookingModal,
  userBookings = [],
  onCancelBooking,
}) => {
  const [selectedDay, setSelectedDay] = useState<string>('Mon');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const dayNamesFr: Record<string, string> = {
    Mon: 'Lundi',
    Tue: 'Mardi',
    Wed: 'Mercredi',
    Thu: 'Jeudi',
    Fri: 'Vendredi',
    Sat: 'Samedi',
    Sun: 'Dimanche',
  };

  const categories = ['All', 'HIIT', 'Yoga', 'Boxing', 'Spinning', 'Strength'];

  const filteredClasses = SCHEDULE_CLASSES.filter((c) => {
    const matchesDay = selectedDay === 'All' || c.day === selectedDay;
    const matchesCategory = selectedCategory === 'All' || c.category === selectedCategory;
    return matchesDay && matchesCategory;
  });

  return (
    <section id="schedule" className="py-24 bg-[#0F0F0F] relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00C2E0]/10 border border-[#00C2E0]/30 text-[#00C2E0] text-xs font-black uppercase tracking-widest mb-3">
              <Calendar className="w-3.5 h-3.5" />
              <span>Planning des Cours Collectifs</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black italic uppercase tracking-tighter text-white leading-none">
              Planning <span className="text-[#00C2E0]">Semaine</span>
            </h2>
            <p className="text-sm text-white/60 max-w-lg mt-3">
              Réservez votre place pour nos cours de HIIT, Boxing, Spinning, Musculation ou Cardio à Nouvelle Médina.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-neutral-900 border border-white/10 p-1.5 rounded-full self-start md:self-auto">
            <Filter className="w-4 h-4 text-[#00C2E0] ml-2" />
            <div className="flex overflow-x-auto no-scrollbar gap-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase transition-colors whitespace-nowrap cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#00C2E0] text-black font-black'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  {cat === 'All' ? 'Tous' : cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Day of the Week Tab Bar */}
        <div className="flex overflow-x-auto no-scrollbar gap-2 pb-4 mb-8 border-b border-white/10">
          {days.map((day) => {
            const isSelected = selectedDay === day;
            const countForDay = SCHEDULE_CLASSES.filter((c) => c.day === day).length;

            return (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`flex-1 min-w-[100px] py-3 px-4 rounded-2xl border text-center transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#00C2E0] text-black font-black border-[#00C2E0] shadow-lg shadow-[#00C2E0]/20 scale-105'
                    : 'bg-neutral-900/80 text-white/70 border-white/5 hover:border-white/20'
                }`}
              >
                <div className="text-xs font-bold uppercase tracking-wider">{dayNamesFr[day] || day}</div>
                <div className={`text-[10px] font-mono mt-0.5 ${isSelected ? 'text-black/80 font-bold' : 'text-white/40'}`}>
                  {countForDay} {countForDay === 1 ? 'Cours' : 'Cours'}
                </div>
              </button>
            );
          })}
        </div>

        {/* Class Cards Grid */}
        {filteredClasses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredClasses.map((item) => {
              const spotsLeft = item.spotsTotal - item.spotsBooked;
              const isAlmostFull = spotsLeft <= 3;

              return (
                <div
                  key={item.id}
                  className="bg-[#1A1A1A] border border-white/10 rounded-3xl p-6 flex flex-col justify-between hover:border-[#00C2E0]/50 transition-all duration-300 hover:-translate-y-1 group shadow-xl"
                >
                  <div>
                    {/* Top Meta Bar */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#00C2E0] font-black text-[10px] uppercase tracking-widest">
                        {item.category}
                      </span>
                      <div className="flex items-center gap-1.5 text-xs text-white/70 font-mono font-bold">
                        <Clock className="w-3.5 h-3.5 text-[#00C2E0]" />
                        <span>{item.time}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-black italic uppercase text-white mb-2 group-hover:text-[#00C2E0] transition-colors leading-tight">
                      {item.title}
                    </h3>

                    {/* Location */}
                    <div className="flex items-center gap-1.5 text-xs text-white/60 mb-6">
                      <MapPin className="w-3.5 h-3.5 text-[#00C2E0]" />
                      <span>{item.location}</span>
                    </div>

                    {/* Trainer Box */}
                    <div className="p-3 rounded-2xl bg-black/40 border border-white/5 flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <img
                          src={item.trainerImage}
                          alt={item.trainer}
                          className="w-10 h-10 rounded-full object-cover ring-1 ring-[#00C2E0]"
                        />
                        <div>
                          <div className="text-xs font-bold text-white leading-tight">
                            {item.trainer}
                          </div>
                          <div className="text-[10px] text-white/40 uppercase font-medium">
                            Coach Principal
                          </div>
                        </div>
                      </div>

                      {/* Intensity Stars / Flames */}
                      <div className="flex items-center gap-0.5" title={`Intensité ${item.intensity}/5`}>
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Flame
                            key={i}
                            className={`w-3.5 h-3.5 ${
                              i < item.intensity ? 'text-[#00C2E0] fill-[#00C2E0]' : 'text-neutral-700'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Spots Bar & Booking CTA */}
                  <div>
                    <div className="mb-4">
                      <div className="flex justify-between text-[11px] font-bold mb-1.5">
                        <span className="text-white/60">Places réservées</span>
                        <span className={isAlmostFull ? 'text-[#00C2E0] font-mono' : 'text-white font-mono'}>
                          {item.spotsBooked} / {item.spotsTotal} ({spotsLeft} restantes)
                        </span>
                      </div>
                      <div className="w-full h-1.5 bg-neutral-800 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-500 ${
                            isAlmostFull ? 'bg-[#00C2E0]' : 'bg-white/40'
                          }`}
                          style={{ width: `${(item.spotsBooked / item.spotsTotal) * 100}%` }}
                        ></div>
                      </div>
                    </div>

                    {(() => {
                      const existingBooking = userBookings.find(
                        (b) => b.classId === item.id || (b.type === 'class' && b.title === item.title)
                      );

                      if (existingBooking && onCancelBooking) {
                        return (
                          <div className="space-y-2">
                            <div className="flex items-center justify-between text-xs font-bold text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-3 py-1.5 rounded-xl">
                              <span className="flex items-center gap-1.5">
                                <CheckCircle2 className="w-3.5 h-3.5" />
                                Place Réservée
                              </span>
                              <span className="text-[10px] text-emerald-300 font-mono">Confirmé</span>
                            </div>
                            <button
                              onClick={() => onCancelBooking(existingBooking.id)}
                              className="w-full py-2.5 bg-red-500/10 hover:bg-red-600 text-red-400 hover:text-white border border-red-500/30 rounded-full font-black uppercase text-xs tracking-wider transition-all cursor-pointer flex items-center justify-center gap-2"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                              <span>Annuler ma réservation</span>
                            </button>
                          </div>
                        );
                      }

                      return (
                        <button
                          onClick={() => onOpenBookingModal(item)}
                          disabled={spotsLeft === 0}
                          className={`w-full py-3 rounded-full font-black uppercase text-xs tracking-wider transition-all cursor-pointer ${
                            spotsLeft === 0
                              ? 'bg-neutral-800 text-white/30 cursor-not-allowed'
                              : 'bg-[#00C2E0] text-black hover:scale-105 shadow-lg shadow-[#00C2E0]/20'
                          }`}
                        >
                          {spotsLeft === 0 ? 'Complet' : 'Réserver ce cours'}
                        </button>
                      );
                    })()}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16 bg-[#1A1A1A] rounded-3xl border border-white/10">
            <Calendar className="w-12 h-12 text-[#00C2E0] mx-auto mb-3" />
            <h3 className="text-xl font-bold uppercase text-white">Aucun cours trouvé</h3>
            <p className="text-xs text-white/60 mt-1">
              Essayez de changer de jour ou de filtre de catégorie ci-dessus.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

