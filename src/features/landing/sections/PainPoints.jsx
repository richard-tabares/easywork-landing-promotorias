import { m } from 'motion/react'
import { CircleDollarSign, Clock, FileSpreadsheet, Headset, Inbox, Users } from 'lucide-react'
import painPointsBackdrop from '../../../assets/backdrops/pain-points-team-workload.webp'
import PhotoBackdrop from '../../../components/ui/PhotoBackdrop'
import { fadeUp, revealViewport, staggerContainer } from '../../../lib/motion'

const pains = [
  {
    icon: Users,
    text: 'Cada agente en formación lleva su cartera a su manera y tú no ves el panorama completo.',
  },
  {
    icon: Inbox,
    text: 'Los trámites se pierden entre correos, WhatsApp y llamadas.',
  },
  {
    icon: CircleDollarSign,
    text: 'Tus agentes no saben cuánto pueden ganar en comisiones por nuevos negocios.',
  },
  {
    icon: Clock,
    text: 'Los prospectos que llegan por tu web o WhatsApp no reciben seguimiento a tiempo.',
  },
  {
    icon: Headset,
    text: 'Tus clientes esperan respuesta después de la venta y el equipo no se da abasto.',
  },
  {
    icon: FileSpreadsheet,
    text: 'Armar los reportes de cobranza y negocios nuevos te toma días.',
  },
]

export default function PainPoints() {
  return (
    <section className="relative">
      <PhotoBackdrop
        src={painPointsBackdrop}
        className="absolute inset-0"
        overlayClassName="bg-brand/75"
      />
      <m.div
        className="relative mx-auto flex max-w-300 flex-col gap-12 px-6 py-24"
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
        variants={staggerContainer}
      >
        <div className="flex flex-col items-center gap-3 text-center">
          <h2 className="font-heading text-3xl font-extrabold leading-tight text-white md:text-4xl xl:text-ew-h2">
            ¿Te suena familiar?
          </h2>
          <p className="max-w-155 text-lg text-lilac-200">
            Si te pasa alguna de estas, tu promotoría creció más rápido que su operación.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {pains.map((pain) => {
            const Icon = pain.icon
            return (
              <m.div
                key={pain.text}
                variants={fadeUp}
                className="flex items-start gap-3.5 rounded-2xl bg-white p-6"
              >
                <div className="flex h-9 w-9 flex-none items-center justify-center rounded-xl bg-ink">
                  <Icon size={18} strokeWidth={2.4} className="text-white" aria-hidden="true" />
                </div>
                <p className="text-sm leading-relaxed text-ink-strong">{pain.text}</p>
              </m.div>
            )
          })}
        </div>

        <p className="text-center font-heading text-xl font-bold leading-snug text-white">
          No tienes un problema de reclutamiento, retención o producción.
          <br />
          Lo que pasa es que pierdes los datos sobre los tiempos de desarrollo y el avance de cada
          agente.
        </p>
      </m.div>
    </section>
  )
}
