import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Problems from './components/Problems.jsx'
import Services from './components/Services.jsx'
import UseCases from './components/UseCases.jsx'
import Differentiation from './components/Differentiation.jsx'
import Process from './components/Process.jsx'
import Technologies from './components/Technologies.jsx'
import Testimonials from './components/Testimonials.jsx'
import CTA from './components/CTA.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-ink-50 text-ink-900 selection:bg-accent-500/40 dark:bg-ink-950 dark:text-ink-100">
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-noise" />
        <div className="absolute -top-40 left-1/2 h-[600px] w-[1200px] -translate-x-1/2 rounded-full bg-accent-500/15 blur-3xl dark:bg-accent-600/20" />
        <div className="absolute top-[40%] left-0 h-[500px] w-[500px] rounded-full bg-purple-400/10 blur-3xl dark:bg-purple-600/10" />
        <div className="absolute top-[80%] right-0 h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-3xl dark:bg-cyan-500/10" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Problems />
        <Services />
        <UseCases />
        <Differentiation />
        <Process />
        <Technologies />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
