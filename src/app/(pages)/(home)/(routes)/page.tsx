import MainSection from "@/components/sections/MainSection/MainSection"
import AboutSection from "@/components/sections/AboutSection/AboutSection"
import PortfolioSection from "@/components/sections/PortfolioSection/PortfolioSection"
import ServicesSection from "@/components/sections/ServicesSection/ServicesSection"
import PerksSection from "@/components/sections/PerksSection/PerksSection"
import TeamSection from "@/components/sections/TeamSection/TeamSection"
import ReviewsSection from "@/components/sections/ReviewsSection/ReviewsSection"
import ContactsSection from "@/components/sections/ContactsSection/ContactsSection"
import FloatingVideo from "@/components/ui/FloatingVideo/FloatingVideo"

const HomePage = () => {
  return (
    <>
      <MainSection />
      <AboutSection />
      <PortfolioSection />
      <ServicesSection />
      <PerksSection />
      <TeamSection />
      <ReviewsSection />
      <ContactsSection />
      <FloatingVideo />
    </>
  )
}

export default HomePage
