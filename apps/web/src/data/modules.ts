export type ModuleItem = {
  id: string;
  label: string;
  icon: string;
  color: string;
};

export const modules: ModuleItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: '📊', color: 'text-violet-400' },
  { id: 'goals', label: 'Objetivos', icon: '🎯', color: 'text-cyan-400' },
  { id: 'mentor', label: 'Mentor IA', icon: '🧠', color: 'text-fuchsia-400' },
  { id: 'time', label: 'Tiempo', icon: '⏱️', color: 'text-emerald-400' },
  { id: 'fitness', label: 'Gimnasio', icon: '🏋️', color: 'text-orange-400' },
  { id: 'nutrition', label: 'Alimentación', icon: '🥗', color: 'text-lime-400' },
  { id: 'growth', label: 'Crecimiento', icon: '🌱', color: 'text-rose-400' },
  { id: 'university', label: 'Universidad', icon: '🎓', color: 'text-sky-400' },
  { id: 'finance', label: 'Finanzas', icon: '💼', color: 'text-amber-400' }
];
