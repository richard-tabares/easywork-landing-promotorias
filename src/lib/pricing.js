export const BILLING_OPTIONS = [
  { id: 'm', label: 'Mensual' },
  { id: 't', label: 'Trimestral' },
  { id: 'a', label: 'Anual · −10%' },
]

export const XPANSION_PLAN = {
  id: 'xpansion',
  name: 'EasyXpansion',
  price: 297,
  note: 'Hasta 10,000 pólizas activas, CRM completo, gestión de cartera, cobranza y asistentes Easy AI.',
  otherHref:
    'https://wa.me/525662754599?text=Hola%2C%20quiero%20adaptar%20la%20licencia%20EasyGrowth%20para%20mi%20promotor%C3%ADa',
  otherLabel: '¿Necesitas más? Adapta EasyGrowth con un asesor →',
  title: 'Easywork · Pago EasyXpansion',
}

const round2 = (value) => Math.round(value * 100) / 100

export function formatNumber(value) {
  const rounded = round2(value)
  return Number.isInteger(rounded) ? String(rounded) : rounded.toFixed(2)
}

export function getBillingMonths(billing) {
  if (billing === 't') return 3
  if (billing === 'a') return 12
  return 1
}

export function getLandingPricing(price, billing) {
  const monthly = billing === 'a' ? price * 0.9 : price
  let note = 'Facturado mes a mes'

  if (billing === 't') {
    note = `Pago trimestral: $${formatNumber(price * 3)} USD`
  }

  if (billing === 'a') {
    note = `Pago anual: $${formatNumber(price * 12 * 0.9)} USD · ahorras $${formatNumber(price * 12 * 0.1)}`
  }

  return { monthly: formatNumber(monthly), note }
}

export function getCheckoutTotals(price, billing) {
  const months = getBillingMonths(billing)
  const subtotal = price * months
  const discount = billing === 'a' ? subtotal * 0.1 : 0
  const total = subtotal - discount

  const per = billing === 't' ? '/ trimestre' : billing === 'a' ? '/ año' : '/ mes'
  const periodLabel =
    billing === 't' ? 'pago trimestral' : billing === 'a' ? 'pago anual' : 'pago mensual'
  const renewal =
    billing === 't' ? 'cada 3 meses' : billing === 'a' ? 'cada año' : 'cada mes'

  let equiv = ''
  if (billing === 't') {
    equiv = `Equivale a $${price} USD/mes`
  }
  if (billing === 'a') {
    equiv = `Equivale a $${formatNumber(total / 12)} USD/mes · ahorras $${formatNumber(discount)} USD`
  }

  return {
    subtotal: formatNumber(subtotal),
    discount: formatNumber(discount),
    total: formatNumber(total),
    per,
    periodLabel,
    renewal,
    equiv,
    isAnnual: billing === 'a',
  }
}
