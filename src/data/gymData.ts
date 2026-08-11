export interface Offer {
  id: string;
  title: string;
  subtitle: string;
  discount: string;
  description: string;
  tag: string;
  validUntil: string;
  code: string;
  bgGradient: string;
  badgeColor: string;
  highlights: string[];
}

export interface UserBooking {
  id: string;
  title: string;
  type: 'class' | 'membership' | 'offer';
  date: string;
  time?: string;
  fullName: string;
  email?: string;
  phone?: string;
  classId?: string;
  createdAt: string;
}

export interface MembershipPlan {
  id: string;
  name: string;
  subtitle: string;
  monthlyPrice: number;
  annualPricePerMonth: number;
  billingPeriod: string;
  popular?: boolean;
  features: string[];
  ctaText: string;
  color: string;
}

export interface GymClass {
  id: string;
  title: string;
  category: 'HIIT' | 'Yoga' | 'Boxing' | 'Spinning' | 'Strength';
  day: 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun';
  time: string;
  duration: string;
  trainer: string;
  trainerImage: string;
  location: string;
  intensity: number; // 1 to 5
  spotsTotal: number;
  spotsBooked: number;
}

export interface Trainer {
  id: string;
  name: string;
  role: string;
  specialty: string;
  bio: string;
  experience: string;
  instagram: string;
  image: string;
}

export interface Facility {
  id: string;
  title: string;
  description: string;
  iconName: string;
  image: string;
}

export const EXCLUSIVE_OFFERS: Offer[] = [
  {
    id: 'opening-30',
    title: 'OFFRE DE BIENVENUE',
    subtitle: 'Rejoins IbizaGym Nouvelle Médina avec 30% de Réduction',
    discount: '-30%',
    description: 'Bénéficiez de la meilleure expérience fitness à Ben Arous, Tunisie. Accès complet aux équipements Technogym, bilan physique offert et suivi coaching.',
    tag: 'OFFRE LIMITÉE',
    validUntil: 'Fin du Mois',
    code: 'IBIZATN30',
    bgGradient: 'from-[#0066FF] to-[#003399]',
    badgeColor: 'bg-black text-[#0066FF]',
    highlights: ['1 Séance Coaching Offerte', 'Accès Cardio & Musculation', 'Programme Personnalisé', 'Accès aux Cours Collectifs'],
  },
  {
    id: 'dj-night-hiit',
    title: 'SESSION HIIT & SOUNDS',
    subtitle: 'Chaque Vendredi soir à la salle',
    discount: 'GRATUIT MEMBRES',
    description: 'Une énergie maximale avec DJ set live, lumières immersives et entraînement cardio haute intensité guidé par nos coachs.',
    tag: 'POPULAIRE',
    validUntil: 'Chaque Vendredi',
    code: 'BEATFIT',
    bgGradient: 'from-neutral-900 via-neutral-950 to-black',
    badgeColor: 'bg-[#0066FF] text-white',
    highlights: ['Ambiance DJ Live & Lumières', 'Shake Protéiné au Bar', 'Coaching de Groupe Immersif', 'Tous Niveaux Acceptés'],
  },
  {
    id: 'pass-7-jours',
    title: 'PASS DÉCOUVERTE 7 JOURS',
    subtitle: 'Testez nos installations pendant une semaine',
    discount: '45 DT / SEMAINE',
    description: 'Accès illimité pendant 7 jours consécutifs à tout le plateau musculation, cardio et cours collectifs à Nouvelle Médina.',
    tag: 'SANS ENGAGEMENT',
    validUntil: 'Toute l\'année',
    code: 'PASS7TN',
    bgGradient: 'from-blue-900 to-black',
    badgeColor: 'bg-white text-black',
    highlights: ['Accès 7j/7 aux Plateau', 'Casier Sécurisé', 'Accès Cours Collectifs', 'Sans Engagement'],
  },
  {
    id: 'pack-coaching',
    title: 'PACK COACHING & SUIVI',
    subtitle: 'Bilan Corporel & Suivi Nutritionnel',
    discount: 'BONUS COACH',
    description: 'Optimisez vos résultats avec nos coachs diplômés. Analyse InBody, plan d\'entraînement sur-mesure et conseils nutritionnels.',
    tag: 'SPECIAL FIT',
    validUntil: 'Offre Spéciale',
    code: 'COACHINGPRO',
    bgGradient: 'from-neutral-800 to-neutral-900',
    badgeColor: 'bg-[#0066FF] text-white',
    highlights: ['Analyse de Composition Corporelle', 'Programme de Musculation', 'Suivi Hebdomadaire', 'Conseils Nutritionnels'],
  }
];

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    id: 'day-pass',
    name: 'Pass Journée',
    subtitle: 'Accès ponctuel à la journée',
    monthlyPrice: 15,
    annualPricePerMonth: 15,
    billingPeriod: 'par séance',
    features: [
      'Accès Plateau Musculation & Cardio',
      'Vestiaires & Douches Sécurisés',
      'Accès aux Cours du jour',
      'Wi-Fi Gratuit en Salle',
    ],
    ctaText: 'Tarif Séance',
    color: 'border-white/10 bg-neutral-900/80',
  },
  {
    id: 'monthly-basic',
    name: 'Abonnement Mensuel',
    subtitle: 'Formule souple et sans engagement long',
    monthlyPrice: 70,
    annualPricePerMonth: 60,
    billingPeriod: 'par mois',
    features: [
      'Accès Illimité IbizaGym Nouvelle Médina',
      'Plateau Lourd & Machines Technogym',
      'Espace Cardio Training',
      'Accès aux Cours Collectifs',
      'Sans Engagement Longue Durée',
    ],
    ctaText: 'Formule Mensuelle',
    color: 'border-white/10 bg-neutral-900/80',
  },
  {
    id: 'quarterly-pro',
    name: 'Trimestriel Pro',
    subtitle: 'Le Choix Le Plus Populaires à Nouvelle Médina',
    monthlyPrice: 180,
    annualPricePerMonth: 160,
    billingPeriod: 'par trimestre',
    popular: true,
    features: [
      'Tout le forfait Mensuel',
      'Bilan d\'Entrée avec un Coach',
      'Accès Prioritaire aux Cours de Groupe',
      '1 Invitation Ami Offerte / mois',
      'Remise au Bar Protéiné & Compléments',
    ],
    ctaText: 'Formule Trimestrielle',
    color: 'border-[#0066FF] bg-[#1A1A1A] blue-glow-sm',
  },
  {
    id: 'annual-vip',
    name: 'Abonnement Annuel VIP',
    subtitle: 'L\'Excellence Fitness sur 12 Mois',
    monthlyPrice: 650,
    annualPricePerMonth: 550,
    billingPeriod: 'par an',
    features: [
      'Tout le forfait Trimestriel Pro',
      '2 Séances Coaching Privé Offertes',
      'Suivi Personnalisé & Bilan Trimestriel',
      'T-shirt & Gourde IbizaGym Offerts',
      '2 Invitations Amis / mois',
      'Garantie Gel d\'Abonnement (Vacances)',
    ],
    ctaText: 'Formule Annuelle VIP',
    color: 'border-blue-500/50 bg-gradient-to-b from-neutral-900 to-black',
  }
];

export const SCHEDULE_CLASSES: GymClass[] = [
  {
    id: 'class-1',
    title: 'HIIT & Cross Training',
    category: 'HIIT',
    day: 'Mon',
    time: '09:00 - 10:00',
    duration: '60 min',
    trainer: 'Coach Mohamed Ali',
    trainerImage: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=400&q=80',
    location: 'Zone Cross Training',
    intensity: 5,
    spotsTotal: 16,
    spotsBooked: 12,
  },
  {
    id: 'class-2',
    title: 'Cardio Boxing & Sacs',
    category: 'Boxing',
    day: 'Mon',
    time: '18:30 - 19:30',
    duration: '60 min',
    trainer: 'Coach Amine',
    trainerImage: 'https://images.unsplash.com/photo-1549476464-37392f717541?auto=format&fit=crop&w=400&q=80',
    location: 'Espace Combat & Ring',
    intensity: 5,
    spotsTotal: 14,
    spotsBooked: 11,
  },
  {
    id: 'class-3',
    title: 'Cuisses Fessiers & Abdos',
    category: 'Strength',
    day: 'Tue',
    time: '10:00 - 11:00',
    duration: '60 min',
    trainer: 'Coach Sarra',
    trainerImage: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=400&q=80',
    location: 'Studio Fitness Main',
    intensity: 4,
    spotsTotal: 20,
    spotsBooked: 15,
  },
  {
    id: 'class-4',
    title: 'RPM & Indoor Cycling',
    category: 'Spinning',
    day: 'Tue',
    time: '18:00 - 19:00',
    duration: '60 min',
    trainer: 'Coach Yassine',
    trainerImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    location: 'Studio Spinning',
    intensity: 4,
    spotsTotal: 18,
    spotsBooked: 14,
  },
  {
    id: 'class-5',
    title: 'Body Sculpt & Musculation',
    category: 'Strength',
    day: 'Wed',
    time: '09:30 - 10:30',
    duration: '60 min',
    trainer: 'Coach Mohamed Ali',
    trainerImage: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=400&q=80',
    location: 'Plateau Halteres',
    intensity: 4,
    spotsTotal: 15,
    spotsBooked: 10,
  },
  {
    id: 'class-6',
    title: 'Cross-Fit Athletic Session',
    category: 'HIIT',
    day: 'Wed',
    time: '18:30 - 19:30',
    duration: '60 min',
    trainer: 'Coach Amine',
    trainerImage: 'https://images.unsplash.com/photo-1549476464-37392f717541?auto=format&fit=crop&w=400&q=80',
    location: 'Zone Functional',
    intensity: 5,
    spotsTotal: 16,
    spotsBooked: 13,
  },
  {
    id: 'class-7',
    title: 'Yoga & Étirements Mobility',
    category: 'Yoga',
    day: 'Thu',
    time: '10:00 - 11:00',
    duration: '60 min',
    trainer: 'Coach Sarra',
    trainerImage: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=400&q=80',
    location: 'Zen Studio',
    intensity: 2,
    spotsTotal: 15,
    spotsBooked: 9,
  },
  {
    id: 'class-8',
    title: 'Vendredi Night DJ Workout',
    category: 'HIIT',
    day: 'Fri',
    time: '18:30 - 20:00',
    duration: '90 min',
    trainer: 'Coach Mohamed & DJ Live',
    trainerImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    location: 'Plateau Principal',
    intensity: 5,
    spotsTotal: 30,
    spotsBooked: 24,
  },
  {
    id: 'class-9',
    title: 'Bootcamp Samedi Intense',
    category: 'Strength',
    day: 'Sat',
    time: '10:00 - 11:15',
    duration: '75 min',
    trainer: 'Coach Yassine',
    trainerImage: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=400&q=80',
    location: 'Espace Functional',
    intensity: 5,
    spotsTotal: 20,
    spotsBooked: 16,
  },
  {
    id: 'class-10',
    title: 'Dimanche Recovery & Core',
    category: 'Yoga',
    day: 'Sun',
    time: '10:30 - 11:30',
    duration: '60 min',
    trainer: 'Coach Sarra',
    trainerImage: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=400&q=80',
    location: 'Studio Fitness',
    intensity: 2,
    spotsTotal: 15,
    spotsBooked: 8,
  }
];

export const TRAINERS: Trainer[] = [
  {
    id: 'trainer-mohamed',
    name: 'Coach Mohamed Ali',
    role: 'Head Coach Musculation & Force',
    specialty: 'Hypertrophie, Prise de Masse & Préparation Athlétique',
    bio: 'Plus de 10 ans d\'expérience dans le coaching personnalisé en Tunisie. Spécialiste de la transformation physique et de la force.',
    experience: '10+ Ans Exp',
    instagram: '@ibizagym',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'trainer-sarra',
    name: 'Coach Sarra Trabelsi',
    role: 'Instructrice Fitness & Pilates',
    specialty: 'Renforcement Musculaire, Perte de Poids & Fitness Féminin',
    bio: 'Experte en cours collectifs et amincissement. Elle dynamise vos entraînements avec professionnalisme et énergie positive.',
    experience: '7 Ans Exp',
    instagram: '@ibizagym',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'trainer-amine',
    name: 'Coach Amine Karray',
    role: 'Coach Cross Training & Boxe',
    specialty: 'Conditionnement Physique, Sacs de Frappe & HIIT',
    bio: 'Ancien compétiteur, il vous repousse dans vos retranchements avec des circuits de cross-training stimulants et sécurisés.',
    experience: '8 Ans Exp',
    instagram: '@ibizagym',
    image: 'https://images.unsplash.com/photo-1549476464-37392f717541?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'trainer-yassine',
    name: 'Coach Yassine Ben Ammar',
    role: 'Coach Cardio & Spinning',
    specialty: 'Cardio Endurance, RPM & Sèche Musculaire',
    bio: 'Passionné de vitesse et de musique, Yassine anime des cours de spinning à haute intensité pour brûler un maximum de calories.',
    experience: '6 Ans Exp',
    instagram: '@ibizagym',
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=600&q=80',
  }
];

export const FACILITIES: Facility[] = [
  {
    id: 'fac-1',
    title: 'Plateau Musculation & Charges Lourdes',
    description: 'Machines de musculation modernes, bancs de développé, bancs inclinés, haltères jusqu\'à 50kg et cages à squat.',
    iconName: 'Dumbbell',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'fac-2',
    title: 'Espace Cardio Technogym',
    description: 'Tapis de course professionnels, vélos, elliptiques et steppers équipés d\'écrans tactiles.',
    iconName: 'Sun',
    image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'fac-3',
    title: 'Zone Cross Training & Combat',
    description: 'Gazon synthétique, cages fonctionnelles, sacs de frappe de boxe, kettlebells et battle ropes.',
    iconName: 'Sparkles',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'fac-4',
    title: 'Bar Protéiné & Compléments',
    description: 'Shakes protéinés, acides aminés, boissons énergisantes et conseils en compléments alimentaires.',
    iconName: 'Coffee',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',
  }
];

export const REVIEWS = [
  {
    id: 'rev-1',
    name: 'Sami B.',
    location: 'Nouvelle Médina, Ben Arous',
    rating: 5,
    comment: 'Excellente salle de sport à Nouvelle Médina ! Les machines sont récentes et l\'ambiance avec la musique est au top. Coach Mohamed est très professionnel.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
  },
  {
    id: 'rev-2',
    name: 'Cyrine K.',
    location: 'Ben Arous',
    rating: 5,
    comment: 'Les cours collectifs avec Coach Sarra sont motivants ! La salle est propre, bien aérée et le personnel est très accueillant.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
  },
  {
    id: 'rev-3',
    name: 'Youssef M.',
    location: 'Tunis',
    rating: 5,
    comment: 'Le meilleur rapport qualité-prix du coin. Bon matériel de musculation, très bonne ambiance entre adhérents !',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
  }
];
