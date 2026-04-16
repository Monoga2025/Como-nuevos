import { MetricCard } from '../components/MetricCard';

const metrics = [
  { title: 'Tareas críticas hoy', value: '5', description: '2 de 5 completadas. Prioridad alta en ventas.' },
  { title: 'Progreso semanal', value: '68%', description: 'Subiste +11% frente a la semana anterior.' },
  { title: 'Estado mental', value: '7/10', description: 'Enfoque estable. Recomendación: 20 min journaling.' },
  { title: 'Racha actual', value: '12 días', description: 'Mantén check-in mañana y noche para no romperla.' }
];

export function DashboardPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-xl border border-violet-500/40 bg-gradient-to-br from-violet-900/30 to-slate-900 p-5">
        <p className="text-xs uppercase tracking-[0.25em] text-violet-300">Mentor IA · Mensaje contextual</p>
        <h2 className="mt-2 text-2xl font-semibold">Hoy no optimizas: ejecutas.</h2>
        <p className="mt-2 max-w-3xl text-sm text-slate-300">
          Tu mayor cuello de botella no es estrategia, es consistencia. Cierra primero la tarea que más evitas.
          Después, bloque de enfoque de 90 minutos sin interrupciones.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => (
          <MetricCard key={metric.title} {...metric} />
        ))}
      </section>

      <section className="grid gap-4 xl:grid-cols-3">
        <article className="rounded-xl border border-slate-800 bg-slate-900 p-4 xl:col-span-2">
          <h3 className="text-lg font-semibold">Visión 360° del día</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            <li>✅ Revisar pipeline comercial y seguimiento de leads clave.</li>
            <li>🕒 Bloque de creación de contenido de marca personal (17:00 - 18:00).</li>
            <li>🏋️ Entrenamiento fuerza tren superior (19:00).</li>
            <li>📒 Revisión nocturna: aprendizajes + ajuste de objetivos.</li>
          </ul>
        </article>

        <article className="rounded-xl border border-slate-800 bg-slate-900 p-4">
          <h3 className="text-lg font-semibold">Check-in IA</h3>
          <p className="mt-2 text-sm text-slate-300">¿Cuál fue el pensamiento que más te frenó hoy?</p>
          <textarea
            className="mt-3 min-h-28 w-full rounded-lg border border-slate-700 bg-slate-950 p-2 text-sm outline-none ring-violet-400 transition focus:ring"
            placeholder="Escribe aquí para que tu mentor te responda..."
          />
          <button className="mt-3 w-full rounded-lg bg-violet-500 px-3 py-2 text-sm font-semibold text-slate-950 hover:bg-violet-400">
            Enviar al mentor
          </button>
        </article>
      </section>
    </div>
  );
}
