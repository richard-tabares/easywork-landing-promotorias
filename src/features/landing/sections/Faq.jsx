import { useState } from 'react'
import { AnimatePresence, m } from 'motion/react'

const faqs = [
  {
    q: '¿Cómo funciona la prueba de 7 días?',
    a: 'Creas tu cuenta y usas Easywork con las funciones de EasyXpansion durante 7 días. Al terminar, contratas EasyXpansion o adaptas EasyGrowth con un asesor.',
  },
  {
    q: '¿Qué licencia necesito?',
    a: 'EasyXpansion incluye hasta 10,000 pólizas activas, CRM completo, cobranza y los asistentes Easy AI, y la contratas en línea desde USD 297 al mes. EasyGrowth suma embudos y automatizaciones personalizadas, integraciones adicionales y 2 TB; un asesor comercial la adapta a tu promotoría por WhatsApp.',
  },
  {
    q: '¿Puedo gestionar trámites con todo mi equipo?',
    a: 'Sí. Ambas licencias incluyen trámites y siniestros con responsable, estado e historial para cada agente.',
  },
  {
    q: '¿Me ayudan con la IA de prospección?',
    a: 'Sí, construimos contigo tu embudo de ventas.',
  },
  {
    q: '¿Qué hace el agente de atención postventa?',
    a: 'Aligera la gestión de preguntas frecuentes para que tu equipo se enfoque en vender.',
  },
  {
    q: '¿Cómo funciona el soporte?',
    a: 'En la versión gratuita no hay soporte; solo se incluye en las licencias EasyXpansion y EasyGrowth.',
  },
]

export default function Faq() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="bg-surface px-6 py-24">
      <div className="mx-auto flex max-w-205 flex-col gap-8">
        <h2 className="text-center font-heading text-3xl font-extrabold text-brand md:text-4xl xl:text-ew-h2">
          Preguntas frecuentes
        </h2>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, index) => {
            const isOpen = open === index
            return (
              <div key={faq.q} className="overflow-hidden rounded-xl bg-white">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                  onClick={() => setOpen(isOpen ? -1 : index)}
                  className="flex min-h-11 w-full items-center justify-between gap-4 px-5.5 py-5 text-left text-base font-semibold text-brand"
                >
                  <span>{faq.q}</span>
                  <span
                    aria-hidden="true"
                    className="mt-0.5 flex h-7 w-7 flex-none items-center justify-center rounded-md bg-brand text-base leading-none text-white"
                  >
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <m.div
                      id={`faq-panel-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22, ease: 'easeOut' }}
                      className="overflow-hidden"
                    >
                      <p className="px-5.5 pb-5.5 text-sm leading-relaxed text-ink">{faq.a}</p>
                    </m.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
