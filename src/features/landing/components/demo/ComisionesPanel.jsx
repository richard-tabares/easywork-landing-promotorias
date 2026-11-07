import { ChevronRight } from 'lucide-react'
import { DemoHeader, StagePills } from './DemoChrome'

const stages = [
  'Semana 1',
  'Semana 2',
  'Semana 3',
  'Semana 4',
  'Mes 2',
  'Mes 3',
  'Por contactar',
  'En proceso de contratación',
  'Definir estado',
]

const rows = [
  ['03/11', '5', '2', '1', '1', '0', '18'],
  ['04/11', '4', '3', '2', '1', '1', '26'],
  ['05/11', '6', '2', '1', '0', '0', '15'],
]

const headers = [
  'Fecha',
  'Prospectos calificados',
  'Citas concretadas',
  'Entrevistas primera vez',
  'Solicitudes',
  'Pagos',
  'Total puntos',
]

export default function ComisionesPanel() {
  return (
    <div className="flex w-full flex-col gap-10">
      <div className="flex max-w-205 flex-col gap-4.5">
        <h3 className="font-heading text-2xl font-extrabold text-brand">
          Ayuda a tus agentes a estimar incentivos por comisión más fácil
        </h3>
        <p className="text-base leading-relaxed text-ink">
          Cada agente en formación registra su actividad diaria y suma puntos. Tú ves su avance
          semana a semana y estiman juntos los incentivos por comisión de sus nuevos negocios.
        </p>
        <ul className="flex list-none flex-col gap-3 p-0 text-sm">
          <li className="flex items-center gap-3">
            <span aria-hidden="true" className="h-2.5 w-2.5 flex-none rounded-full bg-brand" />
            Etapas de formación de la semana 1 al mes 3
          </li>
          <li className="flex items-center gap-3">
            <span aria-hidden="true" className="h-2.5 w-2.5 flex-none rounded-full bg-ink" />
            Bitácora diaria con puntos por actividad
          </li>
          <li className="flex items-center gap-3">
            <span aria-hidden="true" className="h-2.5 w-2.5 flex-none rounded-full bg-lilac-400" />
            Prospectos y entrevistados de cada semana
          </li>
        </ul>
      </div>

      <div className="w-full min-w-0 overflow-hidden rounded-2xl bg-surface shadow-2xl">
        <DemoHeader title="[Nombre del agente]" subtitle="Progreso: 40%" />

        <div className="flex flex-col gap-3.5 p-4">
          <StagePills stages={stages} itemClassName="min-w-245 grid-cols-9" />

          <div className="flex flex-wrap gap-2 rounded-xl bg-white p-2.5 text-xs font-medium">
            <span className="px-3 py-1.5 text-ink">Conexiones</span>
            <span className="rounded-lg bg-lilac-50 px-3 py-1.5 font-semibold text-brand">
              Bitácora
            </span>
            <span className="px-3 py-1.5 text-ink">Documentos</span>
          </div>

          <div className="flex flex-col gap-2.5 rounded-xl bg-white px-3.5 py-3.5">
            <strong className="text-sm font-semibold text-brand">
              Bitácora de actividades diarias
            </strong>
            <div className="overflow-x-auto">
              <table className="w-full min-w-170 border-collapse text-center text-xs">
                <thead>
                  <tr>
                    {headers.map((header) => (
                      <th
                        key={header}
                        className="border-b border-line bg-surface px-3 py-2.5 text-xs font-semibold text-brand"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row) => (
                    <tr key={row[0]}>
                      {row.map((cell, index) => (
                        <td
                          key={`${row[0]}-${headers[index]}`}
                          className={`border-b border-line px-3 py-2.5 ${
                            index === 0 || index === row.length - 1
                              ? 'font-semibold text-brand'
                              : ''
                          }`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex flex-col gap-2.5">
            <div className="flex items-center gap-3 rounded-xl border border-lilac-200 bg-white px-3.5 py-3 text-sm font-semibold text-brand">
              <ChevronRight size={14} strokeWidth={2.4} aria-hidden="true" />
              Matriz de puntos
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-lilac-200 bg-white px-3.5 py-3 text-sm font-semibold text-brand">
              <ChevronRight size={14} strokeWidth={2.4} aria-hidden="true" />
              Lista de prospectos
              <span className="rounded-full bg-brand px-2.5 py-0.5 text-xs font-semibold text-white">
                Semana actual
              </span>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-lilac-200 bg-white px-3.5 py-3 text-sm font-semibold text-brand">
              <ChevronRight size={14} strokeWidth={2.4} aria-hidden="true" />
              Lista de entrevistados
              <span className="rounded-full bg-brand px-2.5 py-0.5 text-xs font-semibold text-white">
                Semana actual
              </span>
            </div>
          </div>

          <span className="text-xs">Datos de ejemplo</span>
        </div>
      </div>
    </div>
  )
}
