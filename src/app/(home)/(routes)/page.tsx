import MainSection from '@/components/sections/MainSection/MainSection'
import AboutSection from '@/components/sections/AboutSection/AboutSection'
import PortfolioSection from '@/components/sections/PortfolioSection/PortfolioSection'
import ServicesSection from '@/components/sections/ServicesSection/ServicesSection'
import ObjectSection from '@/components/sections/ObjectSection/ObjectSection'
import InfographicsSection from '@/components/sections/InfographicsSection/InfographicsSection'
import PerksSection from '@/components/sections/PerksSection/PerksSection'
import TeamSection from '@/components/sections/TeamSection/TeamSection'
import ReviewsSection from '@/components/sections/ReviewsSection/ReviewsSection'
import ContactsSection from '@/components/sections/ContactsSection/ContactsSection'

const HomePage = () => {
  return (
    <>
      <MainSection />
      {/* <AboutSection /> */}
      {/* <PortfolioSection /> */}
      <PerksSection />
      {/* <ReviewsSection /> */}
      <ServicesSection />
      <ObjectSection />
      <InfographicsSection />
      {/* <TeamSection /> */}
      <ContactsSection />
    </>
  )
}

export default HomePage
