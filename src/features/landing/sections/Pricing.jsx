import { useState } from 'react'
import { AnimatePresence, m } from 'motion/react'
import { Check } from 'lucide-react'
import ButtonLink from '../../../components/ui/ButtonLink'
import { BILLING_OPTIONS, getLandingPricing } from '../../../lib/pricing'

const trialFeatures = [
  'Hasta 45 pólizas de prueba',
  'CRM completo',
  'Gestión de cartera',
  'Easy AI Ventas Proactivas',
  'Vinculación con Google',
  'Automatizaciones básicas en CRM',
  'Cobranza',
  'Easy AI Servicios',
  'Easy AI Recluta',
]

const xpansionFeatures = [
  'Multipólizas: hasta 10,000 activas',
  'CRM completo',
  'Gestión de cartera',
  'Easy AI Ventas Proactivas',
  'Vinculación con Google',
  'Automatizaciones básicas en CRM',
  'Cobranza',
  'Easy AI Servicios',
  'Easy AI Recluta',
  '50 GB de almacenamiento',
]

const growthFeatures = [
  'Embudos personalizables',
  'Automatizaciones personalizadas',
  'Integraciones adicionales',
  '2 TB de almacenamiento',
]

function FeatureItem({ children }) {
  return (
    <li className="flex gap-2.5">
      <Check
        size={18}
        strokeWidth={2.4}
        className="mt-0.5 flex-none text-brand"
        aria-hidden="true"
      />
      <span>{children}</span>
    </li>
  )
}

function AnimatedPrice({ value }) {
  return (
    <AnimatePresence mode="wait" initial={false}>
      <m.span
        key={value}
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -4 }}
        transition={{ duration: 0.18, ease: 'easeOut' }}
        className="font-montserrat text-5xl font-extrabold leading-none text-brand"
      >
        ${value}
      </m.span>
    </AnimatePresence>
  )
}

export default function Pricing() {
  const [billing, setBilling] = useState('m')
  const xpansion = getLandingPricing(297, billing)

  const cardClass = (highlight = false) =>
    `relative flex flex-col gap-4.5 rounded-3xl border-2 px-7 pb-7 pt-9 transition-all duration-200 hover:z-10 ${
      highlight
        ? 'border-brand shadow-xl'
        : 'border-card-line hover:border-brand hover:shadow-xl'
    }`

  return (
    <section id="precios" className="bg-white px-6 py-24">
      <div className="mx-auto flex max-w-300 flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-2.5 text-center">
          <h2 className="font-heading text-3xl font-extrabold leading-tight text-brand md:text-4xl xl:text-ew-pricing">
            Licencias para promotorías
          </h2>
          <p className="text-base text-ink">
            Prueba gratis 7 días con las funciones de EasyXpansion. Después, contrata EasyXpansion
            en línea o adapta EasyGrowth con un asesor.
          </p>
        </div>

        <div
          role="radiogroup"
          aria-label="Forma de pago"
          className="flex flex-wrap gap-1.5 rounded-2xl bg-surface p-1.5"
        >
          {BILLING_OPTIONS.map((option) => (
            <button
              key={option.id}
              type="button"
              role="radio"
              aria-checked={billing === option.id}
              onClick={() => setBilling(option.id)}
              className={`min-h-11 rounded-xl px-5 py-2.5 text-sm font-semibold transition-colors ${
                billing === option.id ? 'bg-brand text-white' : 'text-ink hover:text-brand'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>

        <div className="grid w-full items-stretch gap-6 lg:grid-cols-3">
          <m.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300, damping: 22 }}
            className={cardClass()}
          >
            <span className="text-sm font-semibold tracking-widest text-ink">PRUEBA GRATIS</span>
            <div className="flex items-baseline gap-2">
              <span className="font-montserrat text-5xl font-extrabold leading-none text-brand">
                $0
              </span>
              <span className="text-sm">por 7 días</span>
            </div>
            <span className="flex items-center gap-2 rounded-xl border border-lilac-200 bg-lilac-50 px-3 py-2.5 text-sm font-semibold text-brand">
              Funciones de EasyXpansion
            </span>
            <ul className="flex list-none flex-col gap-2.5 p-0 text-sm">
              {trialFeatures.map((feature) => (
                <FeatureItem key={feature}>{feature}</FeatureItem>
              ))}
            </ul>
            <ButtonLink variant="ghost" to="/registro" className="mt-auto min-h-13 text-base">
              Crear cuenta gratis
            </ButtonLink>
            <span className="text-center text-sm">Sin tarjeta · Sin permanencia</span>
          </m.div>

          <m.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300, damping: 22 }}
            className={cardClass(true)}
          >
            <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-brand px-3.5 py-1.5 text-xs font-semibold tracking-wide text-white">
              MÁS POPULAR
            </span>
            <span className="text-sm font-semibold tracking-widest text-brand">EASYXPANSION</span>
            <div className="flex items-baseline gap-2">
              <AnimatedPrice value={xpansion.monthly} />
              <span className="text-sm">USD / mes</span>
            </div>
            <span className="min-h-5.5 text-sm font-medium text-brand">{xpansion.note}</span>
            <ul className="flex list-none flex-col gap-2.5 p-0 text-sm">
              {xpansionFeatures.map((feature) => (
                <FeatureItem key={feature}>{feature}</FeatureItem>
              ))}
            </ul>
            <ButtonLink to="/checkout/xpansion" className="mt-auto min-h-13 text-base">
              Contratar EasyXpansion
            </ButtonLink>
            <span className="text-center text-sm">Cancela cuando quieras</span>
          </m.div>

          <m.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300, damping: 22 }}
            className={cardClass()}
          >
            <span className="text-sm font-semibold tracking-widest text-brand">EASYGROWTH</span>
            <div className="flex flex-col gap-1">
              <span className="font-montserrat text-3xl font-extrabold leading-tight text-brand">
                A tu medida
              </span>
              <span className="text-sm">
                Adaptamos la licencia a las necesidades de tu promotoría
              </span>
            </div>
            <span className="text-sm font-semibold text-brand">
              Todo lo de EasyXpansion, más:
            </span>
            <ul className="flex list-none flex-col gap-2.5 p-0 text-sm">
              {growthFeatures.map((feature) => (
                <FeatureItem key={feature}>{feature}</FeatureItem>
              ))}
            </ul>
            <ButtonLink
              href="https://wa.me/525662754599?text=Hola%2C%20quiero%20adaptar%20la%20licencia%20EasyGrowth%20para%20mi%20promotor%C3%ADa"
              className="mt-auto min-h-13 text-base"
            >
              Adaptar mi licencia
            </ButtonLink>
            <span className="text-center text-sm">Te atiende un asesor comercial por WhatsApp</span>
          </m.div>
        </div>

        <div className="flex w-full flex-wrap items-center justify-center gap-3 rounded-2xl bg-surface px-6 py-5 text-sm text-brand">
          <strong className="font-semibold">Incluido en ambas licencias:</strong>
          <span className="inline-flex items-center gap-2">
            <Check size={18} strokeWidth={2.4} className="flex-none text-brand" aria-hidden="true" />
            Trámites y siniestros
          </span>
          <span className="inline-flex items-center gap-2">
            <Check size={18} strokeWidth={2.4} className="flex-none text-brand" aria-hidden="true" />
            Prospección desde tu web o WhatsApp
          </span>
          <span className="inline-flex items-center gap-2">
            <Check size={18} strokeWidth={2.4} className="flex-none text-brand" aria-hidden="true" />
            Agente de atención postventa
          </span>
        </div>

        <p className="text-center text-base font-medium text-brand">
          ¿Necesitas una licencia a la medida?{' '}
          <a href="https://wa.me/525662754599" className="font-bold">
            Contáctanos
          </a>
        </p>
      </div>
    </section>
  )
}
