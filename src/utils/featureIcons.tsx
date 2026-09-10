import React from 'react';
import { 
  Shield, Bell, Wind, Armchair, Monitor, Gauge, Activity, 
  CloudRain, Lightbulb, Coffee, Radio, Video, Lock, 
  Circle, Bluetooth, Usb, Smartphone, Baby, CheckCircle2,
  Thermometer, Settings, Zap, Music
} from 'lucide-react';

export const getFeatureIcon = (feature: string) => {
  const f = feature.toLowerCase();
  if (f.includes('airbag')) return <Shield className="w-4 h-4 text-slate-400" />;
  if (f.includes('alarme')) return <Bell className="w-4 h-4 text-slate-400" />;
  if (f.includes('ar condicionado') || f.includes('ar quente')) return <Wind className="w-4 h-4 text-slate-400" />;
  if (f.includes('banco') || f.includes('encosto')) return <Armchair className="w-4 h-4 text-slate-400" />;
  if (f.includes('computador')) return <Monitor className="w-4 h-4 text-slate-400" />;
  if (f.includes('velocidade')) return <Gauge className="w-4 h-4 text-slate-400" />;
  if (f.includes('tração') || f.includes('estabilidade')) return <Activity className="w-4 h-4 text-slate-400" />;
  if (f.includes('desembaçador') || f.includes('limpador')) return <CloudRain className="w-4 h-4 text-slate-400" />;
  if (f.includes('farol') || f.includes('drl') || f.includes('led')) return <Lightbulb className="w-4 h-4 text-slate-400" />;
  if (f.includes('freio') || f.includes('abs')) return <Shield className="w-4 h-4 text-slate-400" />;
  if (f.includes('porta-copos')) return <Coffee className="w-4 h-4 text-slate-400" />;
  if (f.includes('rádio') || f.includes('som')) return <Radio className="w-4 h-4 text-slate-400" />;
  if (f.includes('sensor') || f.includes('câmera')) return <Video className="w-4 h-4 text-slate-400" />;
  if (f.includes('trava') || f.includes('vidro')) return <Lock className="w-4 h-4 text-slate-400" />;
  if (f.includes('volante') || f.includes('direção')) return <Circle className="w-4 h-4 text-slate-400" />;
  if (f.includes('bluetooth')) return <Bluetooth className="w-4 h-4 text-slate-400" />;
  if (f.includes('usb')) return <Usb className="w-4 h-4 text-slate-400" />;
  if (f.includes('multimídia') || f.includes('android') || f.includes('apple')) return <Smartphone className="w-4 h-4 text-slate-400" />;
  if (f.includes('isofix')) return <Baby className="w-4 h-4 text-slate-400" />;
  
  return <CheckCircle2 className="w-4 h-4 text-slate-400" />;
};
