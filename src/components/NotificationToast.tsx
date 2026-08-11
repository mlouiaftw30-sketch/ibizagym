import React from 'react';
import { CheckCircle2, X } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const NotificationToast: React.FC<ToastProps> = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#0066FF] text-white font-bold px-5 py-3.5 rounded-2xl shadow-2xl animate-bounce border border-white/20 text-sm">
      <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-white" />
      <span>{message}</span>
      <button
        onClick={onClose}
        className="ml-2 hover:bg-white/10 p-1 rounded-full transition-colors cursor-pointer"
        aria-label="Fermer la notification"
      >
        <X className="w-4 h-4 text-white" />
      </button>
    </div>
  );
};

