import { useState } from 'react'
import { m } from 'motion/react'
import OrderSummary from '../components/OrderSummary'
import PaymentForm from '../components/PaymentForm'
import { getCheckoutTotals, XPANSION_PLAN } from '../../../lib/pricing'
import { pageTransition } from '../../../lib/motion'

export default function CheckoutPage() {
  const [billing, setBilling] = useState('m')
  const totals = getCheckoutTotals(XPANSION_PLAN.price, billing)

  return (
    <>
      <title>{XPANSION_PLAN.title}</title>
      <m.div
        {...pageTransition}
        className="flex min-h-screen flex-wrap bg-white font-sans text-ink"
      >
        <OrderSummary
          config={XPANSION_PLAN}
          billing={billing}
          setBilling={setBilling}
          totals={totals}
        />
        <main className="flex min-w-0 grow basis-full px-6 py-12 lg:basis-1/2">
          <PaymentForm totals={totals} />
        </main>
      </m.div>
    </>
  )
}
