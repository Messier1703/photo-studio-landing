import styles from './PerksSection.module.scss'
import PerksCard from '@/components/ui/PerksCard/PerksCard'
import companyName from '@/constants/studioName'
import { IoCalendarOutline, IoCameraOutline } from 'react-icons/io5'
import { PiLightning, PiCursor } from 'react-icons/pi'

const PerksSection = () => {
  return (
    <section className={styles.perks} id='perks'>
      <div className='container'>
        <h2 className='section_title'>Почему мы</h2>
        <div className={styles.perks_wrapper}>
          <div className={styles.perks_deco}>
            <article>
              <div className={styles.perks_deco_circle}>
                <div />
                <div />
                <div />
                <div />
              </div>
            </article>
            <h3>{companyName}</h3>
          </div>
          <div className={styles.perks_cards}>
            <PerksCard title='title title title' desc='description'>
              <figure>
                <IoCameraOutline />
              </figure>
            </PerksCard>
            <PerksCard title='title title title' desc='description'>
              <figure>
                <PiLightning />
              </figure>
            </PerksCard>
            <PerksCard title='title title title' desc='description'>
              <figure>
                <IoCalendarOutline />
              </figure>
            </PerksCard>
            <PerksCard title='title title title' desc='description'>
              <figure>
                <PiCursor />
              </figure>
            </PerksCard>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PerksSection
