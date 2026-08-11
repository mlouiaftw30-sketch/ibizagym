import React, { useState } from 'react';
import { MapPin, Phone, Clock, Instagram, Facebook, Send, CheckCircle2, ExternalLink } from 'lucide-react';

interface ContactSectionProps {
  onShowToast: (msg: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onShowToast }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    interest: 'Séance d\'essai gratuite',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || (!formData.email && !formData.phone)) {
      onShowToast('Veuillez renseigner votre nom ainsi que votre email ou téléphone.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      onShowToast(`Merci ${formData.fullName} ! Votre message a bien été envoyé.`);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-[#0F0F0F] relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00C2E0]/10 border border-[#00C2E0]/30 text-[#00C2E0] text-xs font-black uppercase tracking-widest mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Contact & Localisation</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black italic uppercase tracking-tighter text-white leading-none">
            Visitez <span className="text-[#00C2E0]">IbizaGym</span>
          </h2>
          <p className="text-sm text-white/60 mt-3">
            Situé à Nouvelle Médina, Ben Arous, Tunisie. Contactez-nous pour réserver une séance d'essai, vous informer sur nos abonnements ou réserver un cours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Contact Info Cards & Map (Col 6) */}
          <div className="lg:col-span-6 space-y-6">
            {/* Quick Details Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-3xl bg-[#1A1A1A] border border-white/10">
                <div className="w-10 h-10 rounded-2xl bg-[#00C2E0]/10 border border-[#00C2E0]/30 flex items-center justify-center text-[#00C2E0] mb-4">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#00C2E0] mb-1">
                  Adresse de la Salle
                </h3>
                <p className="text-sm font-bold text-white leading-snug">
                  Nouvelle Médina <br />
                  Ben Arous, Tunisie
                </p>
                <a
                  href="https://maps.google.com/?q=Nouvelle+Medina+Ben+Arous+Tunisia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 text-[11px] text-white/60 hover:text-[#00C2E0] font-bold uppercase tracking-wider inline-flex items-center gap-1"
                >
                  <span>Ouvrir dans Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="p-6 rounded-3xl bg-[#1A1A1A] border border-white/10">
                <div className="w-10 h-10 rounded-2xl bg-[#00C2E0]/10 border border-[#00C2E0]/30 flex items-center justify-center text-[#00C2E0] mb-4">
                  <Phone className="w-5 h-5" />
                </div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#00C2E0] mb-1">
                  Téléphone & WhatsApp
                </h3>
                <p className="text-sm font-bold text-white">
                  +216 29 000 000
                </p>
                <p className="text-[11px] text-white/50 mt-1">
                  Support & renseignements rapides
                </p>
              </div>
            </div>

            {/* Opening Hours & Social Links */}
            <div className="p-6 rounded-3xl bg-[#1A1A1A] border border-white/10 flex flex-col sm:flex-row justify-between gap-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#00C2E0] mb-3">
                  <Clock className="w-4 h-4" />
                  <span>Horaires d'Ouverture</span>
                </div>
                <ul className="space-y-1.5 text-xs text-white/80">
                  <li className="flex justify-between gap-4">
                    <span className="font-semibold text-white/60">Lundi - Samedi :</span>
                    <span className="font-mono font-bold text-white">06:00 - 22:30</span>
                  </li>
                  <li className="flex justify-between gap-4">
                    <span className="font-semibold text-white/60">Dimanche :</span>
                    <span className="font-mono font-bold text-white">08:00 - 18:00</span>
                  </li>
                </ul>
              </div>

              <div className="border-t sm:border-t-0 sm:border-l border-white/10 sm:pl-6 pt-4 sm:pt-0">
                <div className="text-xs font-bold uppercase tracking-widest text-[#00C2E0] mb-3">
                  Réseaux Sociaux
                </div>
                <div className="space-y-2">
                  <a
                    href="https://www.instagram.com/ibizagym/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs font-bold text-white hover:text-[#00C2E0] transition-colors p-2 rounded-xl bg-white/5 border border-white/5"
                  >
                    <Instagram className="w-4 h-4 text-[#00C2E0]" />
                    <span>@ibizagym</span>
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs font-bold text-white hover:text-[#00C2E0] transition-colors p-2 rounded-xl bg-white/5 border border-white/5"
                  >
                    <Facebook className="w-4 h-4 text-[#00C2E0]" />
                    <span>IbizaGym Nouvelle Médina</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Embedded Interactive Map Card */}
            <div className="rounded-3xl bg-[#1A1A1A] border border-white/10 overflow-hidden relative h-64 shadow-xl">
              <iframe
                title="IbizaGym Nouvelle Médina Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3196.2!2d10.228!3d36.756!2m3!1f0!2f0!3f0!2m3!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd352528731309%3A0x86134f5d2b78a9c!2sNouvelle+M%C3%A9dina%2C+Ben+Arous%2C+Tunisie!5e0!3m2!1sfr!2stn!4v1680000000000!5m2!1sfr!2stn"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(0.9) contrast(1.2) invert(0.9)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              {/* Pin Overlay Badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/90 backdrop-blur-md p-3 rounded-2xl border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-[#00C2E0] animate-ping"></div>
                  <div>
                    <div className="text-xs font-black uppercase text-white">
                      IbizaGym Nouvelle Médina
                    </div>
                    <div className="text-[10px] text-white/50">Ben Arous, Tunisie</div>
                  </div>
                </div>
                <a
                  href="https://maps.google.com/?q=Nouvelle+Medina+Ben+Arous+Tunisia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 bg-[#00C2E0] text-black font-black uppercase text-[10px] rounded-full"
                >
                  Itinéraire
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form (Col 6) */}
          <div className="lg:col-span-6 bg-[#1A1A1A] border border-white/10 rounded-3xl p-8 shadow-2xl flex flex-col justify-between">
            {isSubmitted ? (
              <div className="my-auto text-center py-12 animate-in fade-in">
                <div className="w-16 h-16 rounded-full bg-[#00C2E0]/20 text-[#00C2E0] border border-[#00C2E0] flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-black italic uppercase text-white mb-2">
                  Message Bien Reçu !
                </h3>
                <p className="text-sm text-white/70 max-w-sm mx-auto mb-6">
                  Notre équipe vous recontactera rapidement par téléphone ou sur <span className="text-[#00C2E0] font-bold">{formData.email || formData.phone}</span>.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ fullName: '', email: '', phone: '', interest: 'Séance d\'essai gratuite', message: '' });
                  }}
                  className="px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white font-bold uppercase text-xs rounded-full"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-[#00C2E0] mb-1">
                    Nous Contacter
                  </div>
                  <h3 className="text-3xl font-black italic uppercase text-white leading-none">
                    Envoyez-nous un message
                  </h3>
                  <p className="text-xs text-white/60 mt-2">
                    Remplissez le formulaire ci-dessous pour toute demande de renseignement, séance d'essai ou réservation.
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-wider text-white/70 block mb-1">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="ex: Mohamed Trabelsi"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 bg-neutral-900 border border-white/10 rounded-2xl text-sm text-white focus:outline-none focus:border-[#00C2E0] transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] font-bold uppercase tracking-wider text-white/70 block mb-1">
                        Adresse Email
                      </label>
                      <input
                        type="email"
                        placeholder="nom@exemple.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-neutral-900 border border-white/10 rounded-2xl text-sm text-white focus:outline-none focus:border-[#00C2E0] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-bold uppercase tracking-wider text-white/70 block mb-1">
                        Numéro Téléphone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        placeholder="+216 29 000 000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-neutral-900 border border-white/10 rounded-2xl text-sm text-white focus:outline-none focus:border-[#00C2E0] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-wider text-white/70 block mb-1">
                      Sujet de la demande
                    </label>
                    <select
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full px-4 py-3 bg-neutral-900 border border-white/10 rounded-2xl text-sm text-white focus:outline-none focus:border-[#00C2E0] transition-colors"
                    >
                      <option value="Séance d'essai gratuite">Séance d'essai gratuite</option>
                      <option value="Abonnement Mensuel">Abonnement Mensuel</option>
                      <option value="Forfait Trimestriel Pro">Forfait Trimestriel Pro</option>
                      <option value="Coaching Personnel">Coaching Personnel</option>
                      <option value="Renseignement Général">Renseignement Général</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-wider text-white/70 block mb-1">
                      Message / Notes
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Parlez-nous de vos objectifs sportifs..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-neutral-900 border border-white/10 rounded-2xl text-sm text-white focus:outline-none focus:border-[#00C2E0] transition-colors resize-none"
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#00C2E0] text-black font-black uppercase text-xs rounded-full hover:scale-105 transition-all shadow-lg shadow-[#00C2E0]/30 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Envoi en cours...</span>
                  ) : (
                    <>
                      <span>Envoyer le Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

