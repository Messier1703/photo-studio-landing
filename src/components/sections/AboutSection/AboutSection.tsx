'use client'
import styles from './AboutSection.module.scss'
import BrightButton from '@/components/ui/BrightButton/BrightButton'
import companyName from '@/constants/studioName'
import bg from 'public/placeholder.svg'
import AdaptiveImage from '@/lib/AdaptiveImage'
import { useState, useEffect } from 'react'
import requestInterface from '@/constants/requestInterface'
import API_BASE_URL from '@/constants/API_BASE_URL'
import ky from 'ky'

const AboutSection = () => {
  const [about, setAbout] = useState<requestInterface | null>(null)

  useEffect(() => {
    const getAbout = async () => {
      try {
        const response = await ky.get(`${API_BASE_URL}/about_us`).json<requestInterface[]>()
        setAbout(response[0])
      } catch (error) {
        console.error(error)
      }
    }

    getAbout()
  }, [])

  return (
    <section className={styles.about} id='about-us'>
      {about && (
        <div className='container'>
          <h2 className='section_title'>О нас</h2>
          <div className={styles.about_wrapper}>
            <AdaptiveImage src={bg} alt='Фон' fitCover={true} height='600px' id={styles.about_image} />
            <h3>{companyName}</h3>
            <p>{about.title}</p>
            <BrightButton id={styles.btn}>Посмотреть работы</BrightButton>
          </div>
        </div>
      )}
    </section>
  )
}

export default AboutSection
