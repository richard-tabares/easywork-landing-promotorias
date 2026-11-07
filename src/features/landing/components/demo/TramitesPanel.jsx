import { DemoHeader } from './DemoChrome'

const kpis = [
  { label: 'Total de trámites', value: '14', percent: '100%', border: 'border-brand' },
  { label: 'Completados', value: '9', percent: '64%', border: 'border-success-strong' },
  { label: 'Pendientes', value: '5', percent: '36%', border: 'border-warning-strong' },
  { label: 'Vencidos', value: '3', percent: '21%', border: 'border-danger-strong' },
]

const responsables = [
  ['[Agente 1]', '144 h', '168 h'],
  ['[Agente 2]', '42 h', '109 h'],
  ['[Agente 3]', '38 h', '100 h'],
  ['[Agente 4]', '18 h', '24 h'],
]

const origins = [
  ['Correo', 'w-5/6', '5'],
  ['WhatsApp', 'w-full', '6'],
  ['Otro', 'w-1/2', '3'],
]

const states = [
  ['Completado', 'bg-success-bg text-success', '9'],
  ['Pendiente', 'bg-warning-bg text-warning', '5'],
  ['Atrasado', 'bg-danger-bg text-danger', '3'],
]

export default function TramitesPanel() {
  return (
    <div className="flex w-full flex-col gap-10">
      <div className="flex max-w-205 flex-col gap-4.5">
        <h3 className="font-heading text-2xl font-extrabold text-brand">Semáforo de trámites</h3>
        <p className="text-base leading-relaxed text-ink">
          Mide la carga de trabajo de tu equipo: cuántos trámites se completaron, cuáles siguen
          pendientes o vencidos y cuánto tarda cada responsable en atenderlos.
        </p>
        <ul className="flex list-none flex-col gap-3 p-0 text-sm">
          <li className="flex items-center gap-3">
            <span aria-hidden="true" className="h-2.5 w-2.5 flex-none rounded-full bg-brand" />
            Completados, pendientes y vencidos de un vistazo
          </li>
          <li className="flex items-center gap-3">
            <span aria-hidden="true" className="h-2.5 w-2.5 flex-none rounded-full bg-ink" />
            Jornada activa y tiempo de atención por responsable
          </li>
          <li className="flex items-center gap-3">
            <span aria-hidden="true" className="h-2.5 w-2.5 flex-none rounded-full bg-lilac-400" />
            Trámites por origen, prioridad y estado
          </li>
        </ul>
      </div>

      <div className="w-full min-w-0 overflow-hidden rounded-2xl bg-surface shadow-2xl">
        <DemoHeader title="Carga de trabajo" subtitle="Últimos 30 días" />

        <div className="flex flex-col gap-3.5 p-4">
          <div className="grid grid-cols-2 gap-2.5 lg:grid-cols-4">
            {kpis.map((kpi) => (
              <div
                key={kpi.label}
                className={`flex flex-col gap-1 rounded-xl border-t-4 bg-white px-3.5 py-3.5 ${kpi.border}`}
              >
                <span className="text-xs">{kpi.label}</span>
                <div className="flex items-baseline justify-between gap-2">
                  <strong className="font-montserrat text-2xl font-extrabold text-brand">
                    {kpi.value}
                  </strong>
                  <span className="text-xs font-semibold text-brand">{kpi.percent}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="grid gap-2.5 lg:grid-cols-3">
            <div className="flex min-w-0 flex-col gap-2.5 rounded-xl bg-white px-3.5 py-3.5">
              <strong className="text-xs font-semibold text-brand">
                Indicadores por responsable
              </strong>
              <div className="flex justify-end gap-6 text-xs font-semibold tracking-wide">
                <span className="w-17.5 text-right">JORNADA</span>
                <span className="w-17.5 text-right">ATENCIÓN</span>
              </div>
              {responsables.map(([name, jornada, atencion]) => (
                <div
                  key={name}
                  className="flex justify-between gap-3 border-b border-line py-2.5 text-xs last:border-b-0"
                >
                  <span className="font-medium text-brand">{name}</span>
                  <span className="flex gap-6">
                    <span className="w-17.5 text-right">{jornada}</span>
                    <span className="w-17.5 text-right">{atencion}</span>
                  </span>
                </div>
              ))}
            </div>

            <div className="flex min-w-0 flex-col gap-2.5 rounded-xl bg-white px-3.5 py-3.5">
              <strong className="text-xs font-semibold text-brand">Trámites según origen</strong>
              {origins.map(([label, width, value]) => (
                <div key={label} className="flex items-center gap-2.5 text-xs">
                  <span className="w-22.5 flex-none">{label}</span>
                  <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-lilac-100">
                    <span className={`block h-full rounded-full bg-brand ${width}`} />
                  </span>
                  <span className="w-5 flex-none text-right font-semibold text-brand">
                    {value}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex min-w-0 flex-col gap-2.5 rounded-xl bg-white px-3.5 py-3.5">
              <strong className="text-xs font-semibold text-brand">Trámites por estado</strong>
              {states.map(([label, tone, value]) => (
                <div key={label} className="flex items-center justify-between gap-2.5 text-xs">
                  <span className={`rounded-md px-2.5 py-0.5 font-semibold ${tone}`}>{label}</span>
                  <span className="font-semibold text-brand">{value}</span>
                </div>
              ))}
            </div>
          </div>

          <span className="text-xs">Datos de ejemplo</span>
        </div>
      </div>
    </div>
  )
}
