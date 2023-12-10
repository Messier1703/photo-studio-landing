'use client'
import styles from './AboutSection.module.scss'
import BrightButton from '@/components/ui/BrightButton/BrightButton'
import companyName from '@/constants/studioName'
import { useState, useEffect } from 'react'
import API_BASE_URL from '@/constants/API_BASE_URL'
import ky from 'ky'
import Image from 'next/image'
import { motion, useAnimation } from 'framer-motion'

const AboutSection = () => {
  interface ImageInfo {
    id: number
    image: string
  }

  interface AboutInfo {
    id: number
    title: string
    description: string
    images: ImageInfo[]
  }

  const [about, setAbout] = useState<AboutInfo | null>(null)

  useEffect(() => {
    const getAbout = async () => {
      try {
        const response = await ky.get(`${API_BASE_URL}/about_us`).json<AboutInfo[]>()
        setAbout(response[0])
      } catch (error) {
        console.error(error)
      }
    }

    getAbout()
  }, [])

  const controls = useAnimation()

  useEffect(() => {
    controls.start({ opacity: 1, x: 0 })
  }, [controls])

  return (
    <section className={styles.about} id='about-us'>
      {about && (
        <div className='container'>
          <h2 className='section_title'>О нас</h2>
          <div className={styles.about_wrapper}>
            <div className={styles.about_images}>
              <motion.div initial={{ opacity: 0, x: -20 }} animate={controls} transition={{ staggerChildren: 0.2 }}>
                {about.images.map((image) => (
                  <figure className={styles.about_image_wrapper}>
                    <Image className={styles.about_image} src={image.image} alt='Фото' width={880} height={600} />
                  </figure>
                ))}
              </motion.div>
            </div>
            <div className={styles.about_text}>
              <h3>{companyName}</h3>
              <p>{about.title}</p>
              <BrightButton id={styles.btn}>Посмотреть работы</BrightButton>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default AboutSection
