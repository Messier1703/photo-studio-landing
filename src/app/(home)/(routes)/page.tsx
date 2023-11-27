import s from './HomePage.module.scss'

import Link from 'next/link'

// import MainCard from '../MainCard/MainCard'
import BrightButton from '@/components/ui/BrightButton/BrightButton'
import PortfolioTabs from '../PortfolioTabs/PortfolioTabs'
import AboutSection from '@/components/sections/AboutSection/AboutSection'
import PerksCard from '../PerksCard/PerksCard'
import TeamCard from '../TeamCard/TeamCard'

import AdaptiveImage from '@/lib/AdaptiveImage'
import companyName from '@/constants/studioName'

import perksDeco from 'public/perks-deco.png'
import placeholderIMG from 'public/placeholder.webp'
import SignUpSection from '@/components/sections/SignUp/SignUp'

const HomePage = () => {
  return (
    <>
      <main className={s.main}>
        <div className='container'>
          <div className={s.main_wrapper}>
            <div className={s.main_content}>
              <h1>Создаем продающий контент для маркетплейсов</h1>
              <Link href='/'>
                <BrightButton id={s.main_button}>Узнать о фотосъемке</BrightButton>
              </Link>
            </div>
            {/* <div className={s.main_cards}>
              <MainCard img={placeholderIMG} />
              <MainCard img={placeholderIMG} />
              <MainCard img={placeholderIMG} />
              <MainCard img={placeholderIMG} />
            </div> */}
          </div>
        </div>
      </main>

      <AboutSection />

      <section className={s.portfolio} id='portfolio'>
        <div className='container'>
          <h2 className='section_title'>Наши работы</h2>
          <PortfolioTabs />
        </div>
      </section>

      <section className={s.offers}>
        <div className='container'>
          <div className={s.offers_prices}>
            <h2 className='section_title'>Услуги</h2>
            <div className={s.offers_content}>
              <div className={s.offers_pricing}>
                <div>
                  <h4>lorem</h4>
                  <p>ipsum bla bla bla bla</p>
                </div>
                <div>
                  <h4>lorem</h4>
                  <p>ipsum bla bla bla bla</p>
                </div>
                <div>
                  <h4>lorereefvbergerger</h4>
                  <p>ipsum bla bla bla bla</p>
                </div>
              </div>
              <div className={s.offers_sign_up}>
                <h3>Съемка на модели</h3>
                <p>Фотосъемка товаров на моделях продающего типажа</p>
                <BrightButton>Записаться на съемку</BrightButton>
              </div>
            </div>
          </div>
          <div className={s.offers_products}>
            <div>
              <h3>Предметная съемка</h3>
              <p>Фотообзор вашего товара со всех сторон с акцентом на детали, выигрышные ракурсы, и особенности изделия</p>
            </div>
            <div className={s.offers_products_images}>
              <div></div>
            </div>
          </div>
          <div className={s.offers_posters}>
            <div>
              <h3>Инфографика</h3>
              <p>Красивая, гармоничная, и функциональная упаковка изделия, которая будет сразу замета на витрине</p>
            </div>
          </div>
        </div>
      </section>

      <section className={s.perks}>
        <div className='container'>
          <h2 className='section_title'>Почему мы</h2>
          <div className={s.perks_wrapper}>
            <div className={s.perks_deco}>
              <h3>{companyName}</h3>
              <AdaptiveImage src={perksDeco} alt='Декорация' maxWidth='500px' id={s.perks_deco_img} />
            </div>
            <div>
              <PerksCard title='title title title' desc='description' img={placeholderIMG} />
              <PerksCard title='title title title' desc='description' img={placeholderIMG} />
              <PerksCard title='title title title' desc='description' img={placeholderIMG} />
              <PerksCard title='title title title' desc='description' img={placeholderIMG} />
            </div>
          </div>
        </div>
      </section>

      <section className={s.team}>
        <div className='container'>
          <h2 className='section_title'>Наша команда</h2>
          <div className={s.team_grid}>
            <TeamCard name='name' job='job' img={placeholderIMG} />
            <TeamCard name='name' job='job' img={placeholderIMG} />
            <TeamCard name='name' job='job' img={placeholderIMG} />
            <TeamCard name='name' job='job' img={placeholderIMG} />
          </div>
        </div>
      </section>

      <section className={s.reviews}>
        <div className='container'>
          <h2 className='section_title'>Отзывы наших клиентов</h2>
        </div>
      </section>

      <SignUpSection />
    </>
  )
}

export default HomePage
