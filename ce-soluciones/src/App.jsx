import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import HeroSection from './components/sections/HeroSection'
import PresentationSection from './components/sections/PresentationSection'
import ServicesSection from './components/sections/ServicesSection'
import CatalogSection from './components/sections/CatalogSection'
import MaterialsSection from './components/sections/MaterialsSection'
import ProcessSection from './components/sections/ProcessSection'
import WhyUsSection from './components/sections/WhyUsSection'
import PartnersSection from './components/sections/PartnersSection'
import ContactSection from './components/sections/ContactSection'
import WhatsAppButton from './components/ui/WhatsAppButton'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <PresentationSection />
        <ServicesSection />
        <CatalogSection />
        <MaterialsSection />
        <ProcessSection />
        <WhyUsSection />
        <PartnersSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
