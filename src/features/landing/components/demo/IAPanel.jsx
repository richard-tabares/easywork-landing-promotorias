import { Mail } from 'lucide-react'
import icon from '../../../../assets/icon.png'
import { DemoHeader, StagePills } from './DemoChrome'

const stages = [
  'Contacto inicial',
  'Presentar propuesta',
  'Propuesta en revisión',
  'Trámite para emisión',
  'Emisión de póliza',
  'Negocio nuevo ganado',
]

export default function IAPanel() {
  return (
    <div className="flex w-full flex-col gap-10">
      <div className="flex max-w-205 flex-col gap-4.5">
        <h3 className="font-heading text-2xl font-extrabold text-brand">
          Easy AI · Asistente de reuniones
        </h3>
        <p className="text-base leading-relaxed text-ink">
          Después de cada reunión o Meet, Easy AI resume las objeciones y los dolores que perfilaste
          con el cliente y los deja en el prospecto, para que tu equipo prepare la siguiente
          propuesta.
        </p>
        <ul className="flex list-none flex-col gap-3 p-0 text-sm">
          <li className="flex items-center gap-3">
            <span aria-hidden="true" className="h-2.5 w-2.5 flex-none rounded-full bg-brand" />
            Resumen automático de cada reunión o Meet
          </li>
          <li className="flex items-center gap-3">
            <span aria-hidden="true" className="h-2.5 w-2.5 flex-none rounded-full bg-ink" />
            Objeciones y dolores perfilados por cliente
          </li>
          <li className="flex items-center gap-3">
            <span aria-hidden="true" className="h-2.5 w-2.5 flex-none rounded-full bg-lilac-400" />
            Todo queda en el historial del prospecto
          </li>
        </ul>
      </div>

      <div className="w-full min-w-0 overflow-hidden rounded-2xl bg-surface shadow-2xl">
        <DemoHeader title="[Nombre del prospecto]" subtitle="Seguro de auto" />

        <div className="flex flex-col gap-3.5 p-4">
          <StagePills stages={stages} itemClassName="min-w-190 grid-cols-6" />

          <div className="flex flex-col gap-3 rounded-2xl border-2 border-brand bg-white p-4.5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <span className="flex h-8.5 w-8.5 items-center justify-center rounded-xl bg-lilac-50">
                  <img src={icon} alt="" className="h-6 w-6" />
                </span>
                <span className="flex flex-col">
                  <strong className="text-sm font-semibold text-brand">
                    Easy AI · Resumen de reunión
                  </strong>
                  <span className="text-xs">Meet con [Nombre del prospecto] · 45 min</span>
                </span>
              </div>
              <span className="rounded-full bg-lilac-50 px-2.5 py-1 text-xs font-semibold text-brand">
                Generado por IA
              </span>
            </div>

            <div className="grid gap-3.5 text-sm leading-relaxed md:grid-cols-2">
              <div className="flex flex-col gap-1.5 rounded-xl bg-warning-bg p-3.5">
                <strong className="text-xs font-semibold tracking-wide text-warning">
                  OBJECIONES
                </strong>
                <span className="text-ink-strong">
                  · Considera alta la prima frente a su póliza actual.
                </span>
                <span className="text-ink-strong">· Duda sobre el deducible en robo total.</span>
              </div>
              <div className="flex flex-col gap-1.5 rounded-xl bg-danger-bg p-3.5">
                <strong className="text-xs font-semibold tracking-wide text-danger">DOLORES</strong>
                <span className="text-ink-strong">
                  · Tuvo una mala experiencia con un siniestro anterior.
                </span>
                <span className="text-ink-strong">
                  · Necesita respuestas rápidas en sus trámites.
                </span>
              </div>
            </div>

            <div className="rounded-xl bg-success-bg px-3.5 py-2.5 text-sm text-success">
              <strong className="font-semibold">Siguiente paso sugerido:</strong> enviar un
              comparativo de coberturas con deducible menor.
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span
              aria-hidden="true"
              className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-brand"
            >
              <Mail size={15} strokeWidth={2.2} className="text-white" />
            </span>
            <div className="flex min-w-0 flex-1 flex-col gap-0.5 rounded-xl bg-white px-3.5 py-3">
              <span className="text-sm font-semibold text-brand">Correo saliente</span>
              <span className="text-sm">
                Propuesta de costo y coberturas para el seguro de su vehículo
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
