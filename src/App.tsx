import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { OffersSection } from './components/OffersSection';
import { MembershipSection } from './components/MembershipSection';
import { ScheduleSection } from './components/ScheduleSection';
import { TrainersSection } from './components/TrainersSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { MyBookingsModal } from './components/MyBookingsModal';
import { NotificationToast } from './components/NotificationToast';
import { GymClass, UserBooking } from './data/gymData';

const INITIAL_DEMO_BOOKINGS: UserBooking[] = [
  {
    id: 'res-101',
    title: 'HIIT & Cross Training',
    type: 'class',
    date: 'Lundi',
    time: '09:00 - 10:00',
    fullName: 'Adhérent IbizaGym',
    phone: '+216 29 000 000',
    classId: 'class-1',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'res-102',
    title: 'Abonnement Trimestriel Pro',
    type: 'membership',
    date: '12/08/2026',
    fullName: 'Adhérent IbizaGym',
    phone: '+216 29 000 000',
    createdAt: new Date().toISOString(),
  },
];

export default function App() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // User Bookings State synced with localStorage
  const [userBookings, setUserBookings] = useState<UserBooking[]>(() => {
    try {
      const saved = localStorage.getItem('ibizagym_user_bookings');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error(e);
    }
    return INITIAL_DEMO_BOOKINGS;
  });

  useEffect(() => {
    try {
      localStorage.setItem('ibizagym_user_bookings', JSON.stringify(userBookings));
    } catch (e) {
      console.error(e);
    }
  }, [userBookings]);

  // Modal State
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [myBookingsOpen, setMyBookingsOpen] = useState(false);
  const [modalType, setModalType] = useState<'membership' | 'class' | 'offer'>('membership');
  const [selectedPlanName, setSelectedPlanName] = useState('Abonnement Trimestriel Pro');
  const [selectedPromoCode, setSelectedPromoCode] = useState('');
  const [selectedClass, setSelectedClass] = useState<GymClass | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
  };

  const handleOpenJoinModal = (planName = 'Abonnement Trimestriel Pro', promoCode = '') => {
    setModalType(promoCode ? 'offer' : 'membership');
    setSelectedPlanName(planName);
    setSelectedPromoCode(promoCode);
    setSelectedClass(null);
    setBookingModalOpen(true);
  };

  const handleOpenClassBookingModal = (classItem: GymClass) => {
    setModalType('class');
    setSelectedClass(classItem);
    setSelectedPlanName(classItem.title);
    setBookingModalOpen(true);
  };

  const handleAddBooking = (newBooking: UserBooking) => {
    setUserBookings((prev) => [newBooking, ...prev]);
  };

  const handleCancelBooking = (bookingId: string) => {
    const target = userBookings.find((b) => b.id === bookingId);
    const title = target ? target.title : 'Réservation';
    setUserBookings((prev) => prev.filter((b) => b.id !== bookingId));
    showToast(`Réservation "${title}" annulée avec succès.`);
  };

  const handleCancelAllBookings = () => {
    setUserBookings([]);
    showToast('Toutes les réservations ont été annulées avec succès.');
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5F5F5] font-sans selection:bg-[#00C2E0] selection:text-black">
      {/* Fixed Navigation Header */}
      <Header
        onOpenMyBookings={() => setMyBookingsOpen(true)}
        bookingsCount={userBookings.length}
      />

      {/* Main Page Content */}
      <main>
        {/* Hero Header Section */}
        <Hero onOpenJoinModal={handleOpenJoinModal} />

        {/* Exclusive Offers & Promos Poster Grid */}
        <OffersSection
          onOpenJoinModal={handleOpenJoinModal}
          onShowToast={showToast}
        />

        {/* Membership Plans (Les Abonnements) & Cost Estimator */}
        <MembershipSection
          onOpenJoinModal={handleOpenJoinModal}
          userBookings={userBookings}
          onCancelBooking={handleCancelBooking}
        />

        {/* Upcoming Events & Filterable Classes Schedule */}
        <ScheduleSection
          onOpenBookingModal={handleOpenClassBookingModal}
          userBookings={userBookings}
          onCancelBooking={handleCancelBooking}
        />

        {/* Master Coaches & Facility Showcase */}
        <TrainersSection />

        {/* Contact Details, Map & Inquiry Form */}
        <ContactSection onShowToast={showToast} />
      </main>

      {/* Footer */}
      <Footer onShowToast={showToast} />

      {/* Reusable Booking & Membership Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        modalType={modalType}
        planName={selectedPlanName}
        promoCode={selectedPromoCode}
        selectedClass={selectedClass}
        onSuccessToast={showToast}
        onAddBooking={handleAddBooking}
      />

      {/* My Bookings & Cancel Modal */}
      <MyBookingsModal
        isOpen={myBookingsOpen}
        onClose={() => setMyBookingsOpen(false)}
        bookings={userBookings}
        onCancelBooking={handleCancelBooking}
        onCancelAllBookings={handleCancelAllBookings}
        onOpenSchedule={() => {
          const scheduleElem = document.getElementById('schedule');
          if (scheduleElem) {
            scheduleElem.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      />

      {/* Floating Alert Toast */}
      <NotificationToast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />
    </div>
  );
}

