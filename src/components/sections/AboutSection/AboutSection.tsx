import Image from 'next/image'
import s from './AboutSection.module.scss'

const AboutSection = () => {
  return (
    <section className={s.about}>
      <div className='container'>
        <h2>О нас</h2>
        <div className={s.grid}>
          <figure>
            <Image src='/about-us-bg.jpg' width={100} height={100} alt='Фон' />
          </figure>
          <div>
            <h3>sample title</h3>
            <p>Наша студия занимается только коммерческими съемками для любых маркетплейсов без выходных!</p>
            <p>Работаем по договору. Нам доверяют сотни селлеров!</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
