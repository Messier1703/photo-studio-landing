import styles from './PerksSection.module.scss'
import PerksCard from '@/components/ui/PerksCard/PerksCard'
import companyName from '@/constants/studioName'
import Image from 'next/image'
import { IoCalendarOutline, IoCameraOutline } from 'react-icons/io5'
import { PiLightning, PiCursor } from 'react-icons/pi'

const PerksSection = () => {
  return (
    <section className={styles.perks} id='perks'>
      <div className='container'>
        <h2 className='section_title'>Почему мы</h2>
        <div className={styles.perks_wrapper}>
          <div className={styles.perks_deco}>
            <figure>
              <Image src={'/images/perks-deco.png'} alt='Декорация' width={500} height={500} />
            </figure>
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
