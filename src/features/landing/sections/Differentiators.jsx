import { m } from 'motion/react'
import { FileCheck2, Globe, MessageCircleMore, Users } from 'lucide-react'
import differentiatorsBackdrop from '../../../assets/backdrops/differentiators-team-office.webp'
import PhotoBackdrop from '../../../components/ui/PhotoBackdrop'
import { fadeUp, revealViewport, staggerContainer } from '../../../lib/motion'

const items = [
  {
    icon: Users,
    title: 'Para promotorías de +40 agentes',
    text: 'Cada agente con su usuario, su cartera y sus permisos. Socios, gestión de agentes y tickets de soporte incluidos.',
  },
  {
    icon: FileCheck2,
    title: 'Trámites para todo el equipo',
    text: 'Siniestros, reembolsos y endosos asignados, con responsable y estado. Nadie pierde el hilo.',
  },
  {
    icon: Globe,
    title: 'Prospección desde tu web o WhatsApp',
    text: 'Los prospectos que llegan por tu sitio o por WhatsApp entran directo al embudo, listos para dar seguimiento.',
  },
  {
    icon: MessageCircleMore,
    title: 'Agente de atención postventa',
    text: 'Un agente de IA responde a tus clientes después de la venta para que tu equipo se enfoque en vender.',
  },
]

export default function Differentiators() {
  return (
    <section className="relative overflow-hidden">
      <PhotoBackdrop
        src={differentiatorsBackdrop}
        className="absolute inset-0"
        overlayClassName="bg-brand/80"
      />
      <m.div
        className="relative mx-auto flex max-w-300 flex-col gap-11 px-6 py-24"
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
        variants={staggerContainer}
      >
        <div className="flex flex-col items-center gap-3.5 text-center">
          <span className="rounded-full border border-lilac-400 bg-white/10 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-white">
            PARA PROMOTORÍAS
          </span>
          <h2 className="font-heading text-3xl font-extrabold leading-tight text-white md:text-4xl xl:text-ew-h2">
            Hecho para operar con muchos agentes
          </h2>
          <p className="max-w-160 text-lg leading-relaxed text-lilac-200">
            Lo que cambia cuando tu equipo crece: más usuarios, trámites coordinados, prospección
            automática y atención postventa sin saturar a nadie.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {items.map((item) => {
            const Icon = item.icon
            return (
              <m.div
                key={item.title}
                variants={fadeUp}
                className="flex flex-col gap-3 rounded-2xl border border-transparent bg-white p-7 transition-colors duration-200 hover:border-brand"
              >
                <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-brand">
                  <Icon size={26} strokeWidth={2} className="text-white" aria-hidden="true" />
                </div>
                <h3 className="font-heading text-xl font-extrabold text-brand">{item.title}</h3>
                <p className="text-sm leading-relaxed text-ink">{item.text}</p>
              </m.div>
            )
          })}
        </div>
      </m.div>
    </section>
  )
}
