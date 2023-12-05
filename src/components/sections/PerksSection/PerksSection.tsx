import styles from './PerksSection.module.scss'
// import PerksCard from '@/components/ui/PerksCard/PerksCard'
import companyName from '@/constants/studioName'

const PerksSection = () => {
  return (
    <section className={styles.perks} id='perks'>
      <div className='container'>
        <h2 className='section_title'>Почему мы</h2>
        <div className={styles.perks_wrapper}>
          <div className={styles.perks_deco}>
            <h3>{companyName}</h3>
          </div>
          <div>
            {/* <PerksCard title='title title title' desc='description'></PerksCard>
            <PerksCard title='title title title' desc='description'></PerksCard>
            <PerksCard title='title title title' desc='description'></PerksCard>
            <PerksCard title='title title title' desc='description'></PerksCard> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PerksSection
