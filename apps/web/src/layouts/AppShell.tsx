import type { PropsWithChildren } from 'react';
import { modules } from '../data/modules';

export function AppShell({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="flex min-h-screen flex-col md:flex-row">
        <aside className="w-full border-b border-slate-800 bg-slate-900 md:w-72 md:border-r md:border-b-0">
          <div className="border-b border-slate-800 p-4">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Segundo Cerebro</p>
            <h1 className="mt-2 text-lg font-semibold">Mentoría Empresarial IA</h1>
          </div>
          <nav className="grid grid-cols-2 gap-2 p-3 md:grid-cols-1">
            {modules.map((module) => (
              <button
                key={module.id}
                className="flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-left text-sm transition hover:border-violet-500"
              >
                <span>{module.icon}</span>
                <span className={module.color}>{module.label}</span>
              </button>
            ))}
          </nav>
        </aside>

        <main className="flex-1">
          <header className="flex items-center justify-between border-b border-slate-800 bg-slate-900/60 px-4 py-3 backdrop-blur">
            <div>
              <p className="text-sm text-slate-400">Jueves, plan de ejecución</p>
              <p className="text-sm">Modo mentor: <span className="font-semibold text-violet-300">Duro</span></p>
            </div>
            <div className="flex items-center gap-2 rounded-lg border border-slate-700 px-3 py-2 text-sm">
              <span>🔔</span>
              <span>3 alertas</span>
            </div>
          </header>
          <section className="p-4 md:p-6">{children}</section>
        </main>
      </div>
    </div>
  );
}
