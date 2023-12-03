import styles from './PortfolioSection.module.scss'
import PortfolioTabs from '@/components/ui/PortfolioTabs/PortfolioTabs'

const PortfolioSection = () => {
  return (
    <section className={styles.portfolio} id='portfolio'>
      <div className='container'>
        <h2 className='section_title'>Наши работы</h2>
        <PortfolioTabs />
      </div>
    </section>
  )
}

export default PortfolioSection
