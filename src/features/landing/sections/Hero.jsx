import {
  Check,
  CircleCheck,
  Clock,
  DollarSign,
  List,
  RefreshCw,
  TrendingUp,
  Users,
} from 'lucide-react'
import heroBackdrop from '../../../assets/backdrops/hero-promotoria-team.webp'
import ButtonLink from '../../../components/ui/ButtonLink'
import PhotoBackdrop from '../../../components/ui/PhotoBackdrop'

const hiringStats = [
  { icon: Clock, label: 'Tiempo de contratación', value: '45 días' },
  { icon: DollarSign, label: 'Costo por contratación', value: '$1,500' },
  { icon: CircleCheck, label: 'Tasa de aceptación de ofertas', value: '68%' },
  { icon: TrendingUp, label: 'Tasa de conversión', value: '24%' },
  { icon: List, label: 'Eficiencia de la fuente', value: '13' },
  { icon: RefreshCw, label: 'Tasa de rotación', value: '8%' },
]

const recruiterStats = [
  { icon: Users, label: 'Agentes en entrevista 1', value: '4' },
  { icon: Users, label: 'Agentes en entrevista 2', value: '12' },
  { icon: Check, label: 'Agentes reclutados', value: '42' },
  { icon: Check, label: 'Candidatos aprobados', value: '28' },
]

function KpiCard({ icon: Icon, label, value }) {
  return (
    <div className="flex min-w-0 flex-col gap-1.5 rounded-xl border border-line p-2.5">
      <div className="flex items-center gap-2">
        <span
          aria-hidden="true"
          className="flex h-6 w-6 flex-none items-center justify-center rounded-lg bg-brand"
        >
          <Icon size={14} strokeWidth={2.2} className="text-white" />
        </span>
        <span className="text-xs leading-tight text-ink-strong">{label}</span>
      </div>
      <span className="self-end font-montserrat text-lg font-extrabold text-brand">{value}</span>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="inicio" className="flex flex-wrap overflow-hidden bg-white">
      <div className="flex min-w-0 grow basis-full justify-end lg:basis-1/2">
        <div className="flex w-full max-w-155 flex-col gap-6 py-18 pl-6 pr-10 lg:pl-15">
          <span className="inline-flex items-center gap-2 self-start rounded-full bg-lilac-50 px-3.5 py-2 text-xs font-semibold text-brand">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-brand" />
            Para promotorías de +40 agentes
          </span>

          <h1 className="font-heading text-4xl font-extrabold leading-none tracking-tight text-brand md:text-5xl xl:text-ew-hero">
            Más agentes.
            <br />
            Una sola operación en orden.
          </h1>

          <p className="max-w-135 text-lg leading-relaxed text-ink">
            El CRM para promotorías de seguros que coordina a tus agentes, trámites, cobranza y
            prospección en un solo lugar. Capta prospectos desde tu web o WhatsApp y deja la
            atención postventa a los agentes de IA.
          </p>

          <div className="flex flex-wrap gap-3">
            <ButtonLink to="/registro" className="min-h-13 px-7 text-base">
              Probar gratis 7 días
            </ButtonLink>
            <ButtonLink variant="ghost" href="#como-funciona" className="min-h-13 px-6.5 text-base">
              Ver cómo funciona
            </ButtonLink>
          </div>

          <p className="text-sm text-ink">Sin tarjeta · 7 días gratis · Hasta 45 pólizas</p>
        </div>
      </div>

      <div className="relative min-h-150 min-w-0 grow basis-full lg:basis-1/2">
        <div
          aria-hidden="true"
          className="absolute -bottom-10 -top-10 left-4 right-0 rounded-ew-left bg-white"
        />
        <PhotoBackdrop
          src={heroBackdrop}
          priority
          className="absolute -bottom-10 -top-10 left-7.5 right-0 rounded-ew-left"
          overlayClassName="bg-linear-to-r from-brand/85 via-brand/70 to-brand/40"
        />

        <div className="relative flex h-full min-h-150 items-center justify-center px-6 py-12 lg:pl-24 lg:pr-8">
          <div className="flex w-full min-w-0 max-w-120 flex-col gap-3 break-words rounded-2xl bg-white p-5 shadow-2xl">
            <div className="flex items-center justify-between gap-2.5">
              <span className="text-sm font-semibold text-brand">
                Indicadores clave de desempeño
              </span>
              <span className="whitespace-nowrap rounded-full bg-lilac-50 px-2.5 py-1 text-xs font-semibold text-brand">
                Últimos 30 días
              </span>
            </div>

            <div className="flex items-center gap-2.5">
              <span className="text-xs font-semibold text-brand">Total de agentes</span>
              <span className="rounded-lg border border-lilac-200 px-2.5 py-0.5 font-montserrat text-sm font-extrabold text-brand">
                152
              </span>
            </div>

            <span className="text-xs font-semibold tracking-wide text-brand">
              RECLUTAMIENTO Y SELECCIÓN
            </span>
            <div className="grid grid-cols-2 gap-2">
              {hiringStats.map((stat) => (
                <KpiCard key={stat.label} {...stat} />
              ))}
            </div>

            <span className="text-xs font-semibold tracking-wide text-brand">
              RATIOS PARA RECLUTADORES
            </span>
            <div className="grid grid-cols-2 gap-2">
              {recruiterStats.map((stat) => (
                <KpiCard key={stat.label} {...stat} />
              ))}
            </div>

            <span className="text-xs text-ink">Datos de ejemplo</span>
          </div>
        </div>
      </div>
    </section>
  )
}
