export const WHATSAPP_PHONE = '5519999206746'; // +55 19 99920-6746

export function getWhatsAppUrl(customMessage?: string): string {
  let message = customMessage;

  if (!message) {
    if (typeof window !== 'undefined') {
      const pathname = window.location.pathname;

      if (pathname.startsWith('/veiculo/')) {
        const titleEl = document.querySelector('h1');
        const vehicleName = titleEl ? titleEl.innerText.trim() : 'este veículo';
        message = `Olá! Vi o anúncio do *${vehicleName}* no site de vocês e gostaria de mais informações.`;
      } else if (pathname === '/financiamento') {
        message = 'Olá! Gostaria de fazer uma simulação de financiamento na Unimais Castelo.';
      } else if (pathname === '/venda-unimais' || pathname === '/vender') {
        message = 'Olá! Gostaria de saber mais sobre como vender meu veículo na Unimais Castelo.';
      } else if (pathname === '/encontrar-veiculo') {
        message = 'Olá! Gostaria de ajuda para encontrar um veículo específico no estoque.';
      } else {
        message = 'Olá! Vi o site da Unimais Castelo e gostaria de mais informações.';
      }
    } else {
      message = 'Olá! Vi o site da Unimais Castelo e gostaria de mais informações.';
    }
  }

  return `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(message)}`;
}

export function openWhatsApp(customMessage?: string): void {
  const url = getWhatsAppUrl(customMessage);
  if (typeof window !== 'undefined') {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}
