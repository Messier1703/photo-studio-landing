'use client'
import { useState, useEffect } from 'react'
import styles from './InfographicsSection.module.scss'
import ky from 'ky'
import API_BASE_URL from '@/constants/API_BASE_URL'
import Link from 'next/link'
import BrightButton from '@/components/ui/BrightButton/BrightButton'
import Image from 'next/image'
import placeholderText from '@/constants/placeholderText'

const InfographicsSection = () => {
  interface GetInfographicsProps {
    title: string
    description: string
    image_1: string
    image_2: string
    image_3: string
    image_4: string
  }

  const [infographics, setInfographics] = useState<GetInfographicsProps>({
    title: `${placeholderText}`,
    description: `${placeholderText}`,
    image_1: '',
    image_2: '',
    image_3: '',
    image_4: '',
  })

  useEffect(() => {
    const getServices = async () => {
      try {
        const response = await ky.get(`${API_BASE_URL}/infographic`).json<GetInfographicsProps[]>()
        setInfographics(response[0])
      } catch (error) {
        console.error('Error fetching services:', error)
      }
    }

    getServices()
  }, [])

  return (
    <section className={styles.infographics}>
      <div className='container'>
        {infographics && (
          <div className={styles.infographics_wrapper}>
            <div className={styles.infographics_images}>
              <figure className={styles.infographics_image_wrapper}>
                <Image className={styles.infographics_image} src={infographics.image_1} alt='Фото' width={300} height={360} />
              </figure>
              <figure className={styles.infographics_image_wrapper}>
                <Image className={styles.infographics_image} src={infographics.image_2} alt='Фото' width={300} height={360} />
              </figure>
              <figure className={styles.infographics_image_wrapper}>
                <Image className={styles.infographics_image} src={infographics.image_3} alt='Фото' width={300} height={360} />
              </figure>
              <figure className={styles.infographics_image_wrapper}>
                <Image className={styles.infographics_image} src={infographics.image_4} alt='Фото' width={300} height={360} />
              </figure>
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
  )
}

export default InfographicsSection
