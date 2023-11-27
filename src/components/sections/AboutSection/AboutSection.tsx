import s from './AboutSection.module.scss'
import BrightButton from '@/components/ui/BrightButton/BrightButton'
import companyName from '@/constants/studioName'
import bg from 'public/placeholder.svg'
import AdaptiveImage from '@/lib/AdaptiveImage'

const AboutSection = () => {
  return (
    <section className={s.about} id='about-us'>
      <div className='container'>
        <h2 className='section_title'>О нас</h2>
        <div className={s.about_wrapper}>
          <figure>
            <AdaptiveImage src={bg} alt='Фон' fitCover={true} height='600px' id={s.about_image} />
          </figure>
          <h3>{companyName}</h3>
          <p>
            Наша студия занимается только коммерческими съемками для любых маркетплейсов без выходных!
            <br />
            <br />
            Работаем по договору. Нам доверяют сотни селлеров!
          </p>
          <BrightButton id={s.btn}>Посмотреть работы</BrightButton>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
