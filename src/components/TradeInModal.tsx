import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { maskPhone, maskCPF, maskYear, maskKM } from '../utils/masks';

interface TradeInModalProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function TradeInModal({ isOpen: propsIsOpen, onClose: propsOnClose }: TradeInModalProps = {}) {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const isOpen = propsIsOpen !== undefined ? propsIsOpen : internalIsOpen;
  const onClose = () => {
    if (propsOnClose) propsOnClose();
    setInternalIsOpen(false);
  };
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [cpf, setCpf] = useState('');
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [km, setKm] = useState('');


  useEffect(() => {
    const handleOpen = () => setInternalIsOpen(true);
    window.addEventListener('openTradeInModal', handleOpen);
    return () => window.removeEventListener('openTradeInModal', handleOpen);
  }, []);
  // Handle escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Avaliação solicitada com sucesso! Entraremos em contato em breve.');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-3xl bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-slate-100">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-1">Avalie seu carro na troca</h2>
            <div className="w-16 h-0.5 bg-blue-600"></div>
          </div>
          <button 
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 p-2 rounded-full hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 md:p-8 overflow-y-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  required
                  placeholder="Nome"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-sm text-slate-900 placeholder-slate-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>
              <div>
                <input
                  type="email"
                  required
                  placeholder="E-mail"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-sm text-slate-900 placeholder-slate-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>
              <div>
                <input
                  type="text"
                  required
                  placeholder="CPF"
                  value={cpf}
                  onChange={e => setCpf(maskCPF(e.target.value))}
                  className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-sm text-slate-900 placeholder-slate-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              
              <div>
                <input
                  type="tel"
                  required
                  placeholder="Telefone"
                  value={phone}
                  onChange={e => setPhone(maskPhone(e.target.value))}
                  className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-sm text-slate-900 placeholder-slate-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>
              <div>
                <input
                  type="text"
                  required
                  placeholder="Marca do veículo"
                  value={brand}
                  onChange={e => setBrand(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-sm text-slate-900 placeholder-slate-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              <div>
                <input
                  type="text"
                  required
                  placeholder="modelo"
                  value={model}
                  onChange={e => setModel(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-sm text-slate-900 placeholder-slate-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Ano"
                    value={year}
                    onChange={e => setYear(maskYear(e.target.value))}
                    className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-sm text-slate-900 placeholder-slate-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    required
                    placeholder="KM"
                    value={km}
                    onChange={e => setKm(maskKM(e.target.value))}
                    className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-sm text-slate-900 placeholder-slate-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>
            </div>

            <div>
              <p className="text-xs text-slate-500 mb-6 font-medium">* Todos os campos são obrigatórios</p>
              
              <button
                type="submit"
                className="bg-[#0543C8] hover:bg-blue-800 text-white font-bold py-3.5 px-12 rounded-lg transition-colors text-sm"
              >
                AVALIAR
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
