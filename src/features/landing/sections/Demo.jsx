import { useState } from 'react'
import { AnimatePresence, m } from 'motion/react'
import ButtonLink from '../../../components/ui/ButtonLink'
import AvisoPanel from '../components/demo/AvisoPanel'
import ComisionesPanel from '../components/demo/ComisionesPanel'
import IAPanel from '../components/demo/IAPanel'
import LectorPanel from '../components/demo/LectorPanel'
import ProspeccionPanel from '../components/demo/ProspeccionPanel'
import TramitesPanel from '../components/demo/TramitesPanel'

const tabs = [
  { id: 'prospeccion', label: 'Prospección' },
  { id: 'ia', label: 'Easy AI · Asistente de reuniones' },
  { id: 'lector', label: 'Lector IA' },
  { id: 'tramites', label: 'Semáforo de trámites' },
  { id: 'aviso', label: 'Recordatorio automático' },
  { id: 'comisiones', label: 'Comisiones' },
]

const panelMotion = {
  initial: { opacity: 0, y: 6 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -6 },
  transition: { duration: 0.18, ease: 'easeOut' },
}

const panels = {
  prospeccion: ProspeccionPanel,
  ia: IAPanel,
  lector: LectorPanel,
  tramites: TramitesPanel,
  aviso: AvisoPanel,
  comisiones: ComisionesPanel,
}

export default function Demo() {
  const [active, setActive] = useState('prospeccion')
  const ActivePanel = panels[active]

  return (
    <section className="bg-white px-6 py-24">
      <m.div
        className="mx-auto flex max-w-300 flex-col gap-10"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.24, ease: 'easeOut' }}
      >
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-ink">
            Míralo en acción
          </span>
          <h2 className="font-heading text-3xl font-extrabold leading-tight text-brand md:text-4xl xl:text-ew-h2">
            Así trabaja Easywork por ti
          </h2>
        </div>

        <div
          role="tablist"
          aria-label="Demostración"
          className="flex flex-wrap justify-center gap-2 self-center rounded-2xl bg-surface p-1.5"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              id={`demo-tab-${tab.id}`}
              aria-selected={active === tab.id}
              aria-controls={`demo-panel-${tab.id}`}
              onClick={() => setActive(tab.id)}
              className={`min-h-11 rounded-xl px-5 py-3 text-sm font-semibold transition-colors ${
                active === tab.id ? 'bg-brand text-white' : 'text-ink hover:text-brand'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait" initial={false}>
          <m.div
            key={active}
            id={`demo-panel-${active}`}
            role="tabpanel"
            aria-labelledby={`demo-tab-${active}`}
            {...panelMotion}
          >
            <ActivePanel />
          </m.div>
        </AnimatePresence>

        <div className="flex justify-center">
          <ButtonLink href="https://wa.me/525662754599" className="min-h-13 px-7 text-base">
            Hablar por WhatsApp
          </ButtonLink>
        </div>
      </m.div>
    </section>
  )
}
