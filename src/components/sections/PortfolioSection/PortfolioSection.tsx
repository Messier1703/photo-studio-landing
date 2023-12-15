import styles from "./PortfolioSection.module.scss"
import PortfolioTabs from "@/components/ui/PortfolioTabs/PortfolioTabs"
import PortfolioDropdown from "@/components/ui/PortfolioDropdown/PortfolioDropdown"

const PortfolioSection = () => {
  return (
    <section className={styles.portfolio} id="portfolio">
      <div className="container">
        <h2 className="section_title">Наши работы</h2>
        <PortfolioTabs id={styles.desktop_only} />
        <PortfolioDropdown id={styles.mobile_only} />
      </div>
    </section>
  )
}

export default PortfolioSection
