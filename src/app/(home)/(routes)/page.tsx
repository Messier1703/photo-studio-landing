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

import AdaptiveImage from '@/lib/AdaptiveImage'
import companyName from '@/constants/studioName'

import perksDeco from 'public/perks-deco.png'
import ContactsSection from '@/components/sections/ContactsSection/ContactsSection'
import requestInterface from '@/constants/requestInterface'
import FixedImage from '@/lib/FixedImage'

import { FaCamera, FaCalendarCheck } from 'react-icons/fa'
import { IoMdPhotos } from 'react-icons/io'
import { TbHandClick } from 'react-icons/tb'
import TeamSection from '@/components/sections/TeamSection/TeamSection'

const HomePage = () => {
  const [services, setServices] = useState<requestInterface | null>(null)
  const [preShoot, setPreShoot] = useState<requestInterface | null>(null)
  const [infographics, setInfographics] = useState<requestInterface | null>(null)

  useEffect(() => {
    const getServices = async () => {
      try {
        const response = await ky.get(`${API_BASE_URL}/services`).json<requestInterface[]>()
        setServices(response[0])
      } catch (error) {
        console.error('Error fetching services:', error)
      }
    }

    const getPreShoot = async () => {
      try {
        const response = await ky.get(`${API_BASE_URL}/pre_shoot`).json<requestInterface[]>()
        setPreShoot(response[0])
      } catch (error) {
        console.error('Error fetching services:', error)
      }
    }

    const getInfographics = async () => {
      try {
        const response = await ky.get(`${API_BASE_URL}/infographic`).json<requestInterface[]>()
        setInfographics(response[0])
      } catch (error) {
        console.error('Error fetching services:', error)
      }
    }

    getServices()
    getPreShoot()
    getInfographics()
  }, [])

  return (
    <>
      <main className={styles.main} id='main'>
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
        </div>
      </section>

      <section className={styles.item_shoots}>
        <div className='container'>
          {preShoot && (
            <>
              <div className={styles.item_shoots_wrapper}>
                <div className={styles.item_shoots_content}>
                  <h3>{preShoot.title}</h3>
                  <p>{preShoot.description}</p>
                  <Link href='/#contacts'>
                    <BrightButton>Записаться на съемку</BrightButton>
                  </Link>
                </div>
                <div className={styles.item_shoots_images}>
                  <AdaptiveImage
                    src={preShoot.image_1}
                    nextWidth={300}
                    nextHeight={500}
                    height='500px'
                    maxWidth='300px'
                    fitCover={true}
                    alt='Фото'
                  />
                  <AdaptiveImage
                    src={preShoot.image_2}
                    nextWidth={300}
                    nextHeight={500}
                    height='500px'
                    maxWidth='300px'
                    fitCover={true}
                    alt='Фото'
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      <section className={styles.infographics}>
        <div className='container'>
          {infographics && (
            <div className={styles.infographics_wrapper}>
              <div className={styles.infographics_images}>
                <AdaptiveImage
                  src={infographics.image_1}
                  alt='Фото'
                  nextWidth={300}
                  nextHeight={360}
                  fitCover={true}
                  id={styles.infographics_image}
                />
                <AdaptiveImage
                  src={infographics.image_2}
                  alt='Фото'
                  nextWidth={300}
                  nextHeight={360}
                  fitCover={true}
                  id={styles.infographics_image}
                />
                <AdaptiveImage
                  src={infographics.image_3}
                  alt='Фото'
                  nextWidth={300}
                  nextHeight={360}
                  fitCover={true}
                  id={styles.infographics_image}
                />
                <AdaptiveImage
                  src={infographics.image_4}
                  alt='Фото'
                  nextWidth={300}
                  nextHeight={360}
                  fitCover={true}
                  id={styles.infographics_image}
                />
              </div>
              <div>
                <h3>{infographics.title}</h3>
                <p>{infographics.description}</p>
                <Link href='/#contacts'>
                  <BrightButton>Обсудить работу</BrightButton>
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className={styles.perks} id='perks'>
        <div className='container'>
          <h2 className='section_title'>Почему мы</h2>
          <div className={styles.perks_wrapper}>
            <div className={styles.perks_deco}>
              <h3>{companyName}</h3>
              <FixedImage src={perksDeco} alt='Декорация' id={styles.perks_deco_img} />
            </div>
            <div>
              <PerksCard title='title title title' desc='description'>
                <FaCamera />
              </PerksCard>
              <PerksCard title='title title title' desc='description'>
                <IoMdPhotos />
              </PerksCard>
              <PerksCard title='title title title' desc='description'>
                <FaCalendarCheck />
              </PerksCard>
              <PerksCard title='title title title' desc='description'>
                <TbHandClick />
              </PerksCard>
            </div>
          </div>
        </div>
      </section>

      <TeamSection />

      <section className={styles.reviews} id='reviews'>
        <div className='container'>
          <h2 className='section_title'>Отзывы наших клиентов</h2>
        </div>
      </section>

      <ContactsSection />
    </>
  )
}

export default HomePage
