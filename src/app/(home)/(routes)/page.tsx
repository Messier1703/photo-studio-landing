'use client'

import styles from './HomePage.module.scss'

import API_BASE_URL from '@/constants/API_BASE_URL'
import ky from 'ky'

import Link from 'next/link'
import { useEffect, useState } from 'react'
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
import requestInterface from '@/constants/requestInterface'

const HomePage = () => {
  const [services, setServices] = useState<requestInterface | null>(null)

  useEffect(() => {
    const getServices = async () => {
      try {
        const response = await ky.get(`${API_BASE_URL}/services`).json<requestInterface[]>()
        setServices(response[0])
      } catch (error) {
        console.error('Error fetching services:', error)
      }
    }

    getServices()
  }, [])

  return (
    <>
      <main className={styles.main}>
        <div className='container'>
          <div className={styles.main_wrapper}>
            <div className={styles.main_content}>
              <h1>Создаем продающий контент для маркетплейсов</h1>
              <Link href='/'>
                <BrightButton id={styles.main_button}>Узнать о фотосъемке</BrightButton>
              </Link>
            </div>
            {/* <div className={styles.main_cards}>
              <MainCard img={placeholderIMG} />
              <MainCard img={placeholderIMG} />
              <MainCard img={placeholderIMG} />
              <MainCard img={placeholderIMG} />
            </div> */}
          </div>
        </div>
      </main>

      <AboutSection />

      <section className={styles.portfolio} id='portfolio'>
        <div className='container'>
          <h2 className='section_title'>Наши работы</h2>
          <PortfolioTabs />
        </div>
      </section>

      <section className={styles.services} id='services'>
        <div className='container'>
          <div className={styles.services_prices}>
            <h2 className='section_title'>Услуги</h2>
            <div className={styles.services_content}>
              {services && (
                <>
                  <div className={styles.services_pricing}>
                    <div>
                      <h4>{services.title_1}</h4>
                      <p>{services.description_1}</p>
                    </div>
                    <div>
                      <h4>{services.title_2}</h4>
                      <p>{services.description_2}</p>
                    </div>
                    <div>
                      <h4>{services.title_3}</h4>
                      <p>{services.description_3}</p>
                    </div>
                  </div>
                  <div className={styles.services_sign_up}>
                    <h3>{services.title_4}</h3>
                    <p>{services.description_4}</p>
                    <BrightButton>Записаться на съемку</BrightButton>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className={styles.services_products}>
            <div>
              <h3>Предметная съемка</h3>
              <p>Фотообзор вашего товара со всех сторон с акцентом на детали, выигрышные ракурсы, и особенности изделия</p>
            </div>
            <div className={styles.services_products_images}>
              <div></div>
            </div>
          </div>
          <div className={styles.services_posters}>
            <div>
              <h3>Инфографика</h3>
              <p>Красивая, гармоничная, и функциональная упаковка изделия, которая будет сразу замета на витрине</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.perks} id='perks'>
        <div className='container'>
          <h2 className='section_title'>Почему мы</h2>
          <div className={styles.perks_wrapper}>
            <div className={styles.perks_deco}>
              <h3>{companyName}</h3>
              <AdaptiveImage src={perksDeco} alt='Декорация' maxWidth='500px' id={styles.perks_deco_img} />
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

      <section className={styles.team} id='team'>
        <div className='container'>
          <h2 className='section_title'>Наша команда</h2>
          <div className={styles.team_grid}>
            <TeamCard name='name' job='job' img={placeholderIMG} />
            <TeamCard name='name' job='job' img={placeholderIMG} />
            <TeamCard name='name' job='job' img={placeholderIMG} />
            <TeamCard name='name' job='job' img={placeholderIMG} />
          </div>
        </div>
      </section>

      <section className={styles.reviews} id='reviews'>
        <div className='container'>
          <h2 className='section_title'>Отзывы наших клиентов</h2>
        </div>
      </section>

      <SignUpSection />
    </>
  )
}

export default HomePage
