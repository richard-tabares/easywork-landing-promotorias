import { m } from 'motion/react'
import { pageTransition } from '../../../lib/motion'
import Header from '../sections/Header'
import Hero from '../sections/Hero'
import Steps from '../sections/Steps'
import PainPoints from '../sections/PainPoints'
import Demo from '../sections/Demo'
import Differentiators from '../sections/Differentiators'
import Features from '../sections/Features'
import Pricing from '../sections/Pricing'
import Faq from '../sections/Faq'
import FinalCta from '../sections/FinalCta'
import Footer from '../sections/Footer'

export default function LandingPage() {
  return (
    <>
      <title>Easywork · CRM para promotorías de seguros</title>
      <m.div
        {...pageTransition}
        className="min-w-0 bg-white font-sans text-ink"
        data-document-role="page"
        data-label="Landing para promotorías"
      >
        <Header />
        <Hero />
        <Steps />
        <PainPoints />
        <Demo />
        <Differentiators />
        <Features />
        <Pricing />
        <Faq />
        <FinalCta />
        <Footer />
      </m.div>
    </>
  )
}
