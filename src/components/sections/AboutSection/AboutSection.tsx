import Image from 'next/image'
import s from './AboutSection.module.scss'
import BrightButton from '@/components/ui/BrightButton/BrightButton'

const AboutSection = () => {
  return (
    <section className={s.about}>
      <div className='container'>
        <h2>О нас</h2>
        <div className={s.wrapper}>
          <figure>
            <Image src='/about-us-bg.jpg' width={1680} height={1120} alt='Фон' sizes='100vw' className='img' />
          </figure>
          <h3>sample title</h3>
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
