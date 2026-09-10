import { useEffect } from 'react';
import { openWhatsApp } from '../utils/whatsapp';

export default function WhatsAppModal() {
  useEffect(() => {
    const handleOpen = (e: any) => {
      const customMessage = e?.detail?.message;
      openWhatsApp(customMessage);
    };

    window.addEventListener('openWhatsAppModal', handleOpen);
    return () => window.removeEventListener('openWhatsAppModal', handleOpen);
  }, []);

  // No form/modal UI is rendered - clicks go straight to WhatsApp
  return null;
}
