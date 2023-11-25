import s from './HomePage.module.scss'
import Link from 'next/link'
import MainCard from '../MainCard/MainCard'
import BrightButton from '@/components/ui/BrightButton/BrightButton'
import PortfolioTabs from '../PortfolioTabs/PortfolioTabs'
import AboutSection from '@/components/sections/AboutSection/AboutSection'
import TeamCard from '../TeamCard/TeamCard'

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
            <div className={s.main_cards}>
              <MainCard />
              <MainCard />
              <MainCard />
              <MainCard />
            </div>
          </div>
        </div>
      </main>
      <AboutSection />
      <section className={s.portfolio}>
        <div className='container'>
          <h2>Наши работы</h2>
          <PortfolioTabs />
        </div>
      </section>
      <section className={s.offers}>
        <div className='container'>
          <div className={s.offers_prices}>
            <h2>Услуги</h2>
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
            <h3>Предметная съемка</h3>
            <p>Фотообзор вашего товара со всех сторон с акцентом на детали, выигрышные ракурсы, и особенности изделия</p>
          </div>
          <div className={s.offers_posters}>
            <h3>Инфографика</h3>
            <p>Красивая, гармоничная, и функциональная упаковка изделия, которая будет сразу замета на витрине</p>
          </div>
        </div>
      </section>
      <section className={s.perks}>
        <div className='container'>
          <h2>Почему мы</h2>
        </div>
      </section>
      <section className={s.team}>
        <div className='container'>
          <h2>Наша команда</h2>
          <div className={s.team_grid}>
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
          </div>
        </div>
      </section>
      <section className={s.reviews}>
        <div className='container'>
          <h2>Отзывы наших клиентов</h2>
        </div>
      </section>
    </>
  )
}

export default HomePage
