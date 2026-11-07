import { FileText, Mail, Upload } from 'lucide-react'
import { DemoHeader, StagePills } from './DemoChrome'

const stages = [
  'Contacto inicial',
  'Presentar propuesta',
  'Propuesta en revisión',
  'Trámite para emisión',
  'Emisión de póliza',
  'Negocio nuevo ganado',
]

const timelines = [
  {
    icon: Mail,
    tone: 'brand',
    title: 'Correo saliente',
    text: 'Propuesta de costo y coberturas para el seguro de su vehículo',
  },
  {
    icon: Upload,
    tone: 'ink',
    title: 'Archivo cargado',
    text: 'Cotizacion_auto.pdf · Cotizaciones presentadas',
    action: 'Ver archivo',
  },
  {
    icon: FileText,
    tone: 'brand',
    title: 'Cotización de vehículo',
    text: '[Marca · Modelo · Año]',
    badge: 'Cobertura amplia',
  },
]

export default function ProspeccionPanel() {
  return (
    <div className="flex w-full flex-col gap-10">
      <div className="flex max-w-205 flex-col gap-4.5">
        <h3 className="font-heading text-2xl font-extrabold text-brand">
          Del primer contacto a la póliza emitida
        </h3>
        <p className="text-base leading-relaxed text-ink">
          Cada prospecto avanza por etapas claras. Propuestas, cotizaciones, correos y documentos
          quedan en su historial, para que nadie pierda el hilo.
        </p>
        <ul className="flex list-none flex-col gap-3 p-0 text-sm">
          <li className="flex items-center gap-3">
            <span aria-hidden="true" className="h-2.5 w-2.5 flex-none rounded-full bg-brand" />
            Contacto inicial → Propuesta → Emisión → Negocio ganado
          </li>
          <li className="flex items-center gap-3">
            <span aria-hidden="true" className="h-2.5 w-2.5 flex-none rounded-full bg-ink" />
            Correo, WhatsApp, llamadas, Zoom y Meet en un solo historial
          </li>
          <li className="flex items-center gap-3">
            <span aria-hidden="true" className="h-2.5 w-2.5 flex-none rounded-full bg-lilac-400" />
            Propuestas, cotizaciones y documentos en cada prospecto
          </li>
        </ul>
      </div>

      <div className="w-full min-w-0 overflow-hidden rounded-2xl bg-surface shadow-2xl">
        <DemoHeader title="[Nombre del prospecto]" subtitle="Seguro de auto" />

        <div className="flex flex-col gap-3.5 p-4">
          <StagePills stages={stages} className="min-w-0" itemClassName="min-w-190 grid-cols-6" />

          <div className="flex flex-wrap gap-2 rounded-xl bg-white p-2.5 text-xs font-medium">
            <span className="rounded-lg bg-lilac-50 px-3 py-1.5 font-semibold text-brand">
              General
            </span>
            <span className="px-3 py-1.5 text-ink">Documentos</span>
          </div>

          <div className="flex flex-wrap gap-3 rounded-xl bg-white px-3.5 py-3 text-xs font-medium tracking-wide text-ink">
            TAREAS · COMENTARIO · CORREO · CITAS · WHATSAPP · LLAMADA · ZOOM · MEET
          </div>

          <div className="flex flex-col gap-2.5">
            {timelines.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className={`flex h-8 w-8 flex-none items-center justify-center rounded-full ${
                      item.tone === 'brand' ? 'bg-brand' : 'bg-ink'
                    }`}
                  >
                    <Icon size={15} strokeWidth={2.2} className="text-white" />
                  </span>
                  <div className="flex min-w-0 flex-1 items-center justify-between gap-3 rounded-xl bg-white px-3.5 py-3">
                    <div className="flex min-w-0 flex-col gap-0.5">
                      <span className="text-sm font-semibold text-brand">{item.title}</span>
                      <span className="text-sm">{item.text}</span>
                    </div>
                    {item.action && (
                      <span className="flex-none rounded-lg bg-brand px-2.5 py-1.5 text-xs font-semibold text-white">
                        {item.action}
                      </span>
                    )}
                    {item.badge && (
                      <span className="flex-none rounded-full bg-success-bg px-2.5 py-1 text-xs font-semibold text-success">
                        {item.badge}
                      </span>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
