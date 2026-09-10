const fs = require('fs');

let content = fs.readFileSync('src/pages/VehicleDetail.tsx', 'utf-8');

// 1. Update imports
if (!content.includes('Calendar')) {
  content = content.replace(
    "import { ChevronLeft, CheckCircle2, ShieldCheck } from 'lucide-react';",
    "import { ChevronLeft, CheckCircle2, ShieldCheck, Calendar, Gauge, Phone, Mail } from 'lucide-react';"
  );
}

// 2. Update Title & Version section
const oldTitleSection = `            {/* Title & Version */}
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {vehicle.fullTitle}
              </h1>
              <p className="text-slate-500 font-medium text-sm sm:text-base mt-2">
                {vehicle.version}
              </p>
            </div>`;

const newTitleSection = `            {/* Title & Version */}
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0543C8] tracking-tight leading-tight">
                {vehicle.fullTitle}
              </h1>
              <p className="text-slate-900 font-medium text-sm sm:text-base mt-2 uppercase">
                {vehicle.version}
              </p>
              
              {/* Year & Mileage Specs Row */}
              <div className="flex items-center gap-6 text-slate-900 text-lg mt-4 pt-2">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-[#0543C8]" />
                  <span className="font-medium">{vehicle.year}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Gauge className="w-5 h-5 text-[#0543C8]" />
                  <span className="font-medium">{lazyKm === null ? 'Buscando...' : lazyKm === undefined ? 'Consulte' : lazyKm === 0 ? '0 KM' : \`\${lazyKm.toLocaleString('pt-BR')} KM\`}</span>
                </div>
              </div>
            </div>`;

content = content.replace(oldTitleSection, newTitleSection);

// 3. Add Bottom Bar at the end
const endStr = "      <TradeInModal isOpen={isTradeInModalOpen} onClose={() => setIsTradeInModalOpen(false)} />\n    </div>\n  );\n}";

const bottomBar = `      {/* Fixed Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#04163D] shadow-[0_-4px_10px_rgba(0,0,0,0.1)] z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            
            <a 
              href="tel:1937271000"
              className="flex-1 w-full bg-transparent border border-white/20 hover:bg-white/10 text-white font-medium py-2.5 px-4 rounded-lg transition-colors text-sm flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Ligue agora: (19) 3727-1000
            </a>

            <a 
              href="mailto:contato@unimaisveiculos.com.br"
              className="flex-1 w-full bg-transparent border border-white/20 hover:bg-white/10 text-white font-medium py-2.5 px-4 rounded-lg transition-colors text-sm flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4" />
              Atendimento por Email
            </a>

            <button 
              onClick={() => window.dispatchEvent(new CustomEvent('openWhatsAppModal'))}
              className="flex-1 w-full bg-transparent border border-white/20 hover:bg-white/10 text-white font-medium py-2.5 px-4 rounded-lg transition-colors text-sm flex items-center justify-center gap-2"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
              Atendimento via WhatsApp
            </button>

          </div>
        </div>
      </div>
      
      <TradeInModal isOpen={isTradeInModalOpen} onClose={() => setIsTradeInModalOpen(false)} />
      {/* Spacer so bottom bar doesnt cover content */}
      <div className="h-24"></div>
    </div>
  );
}`;

content = content.replace(endStr, bottomBar);

fs.writeFileSync('src/pages/VehicleDetail.tsx', content);
console.log('VehicleDetail Right Column Fixed! 2');
