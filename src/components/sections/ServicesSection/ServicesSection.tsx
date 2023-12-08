'use client'
import { useState, useEffect } from 'react'
import styles from './ServicesSection.module.scss'
import BrightButton from '@/components/ui/BrightButton/BrightButton'
import ky from 'ky'
import API_BASE_URL from '@/constants/API_BASE_URL'
import placeholderText from '@/constants/placeholderText'

const ServicesSection = () => {
  interface GetServicesProps {
    title_1: string
    description_1: string
    title_2: string
    description_2: string
    title_3: string
    description_3: string
    title_4: string
    description_4: string
  }

  const [services, setServices] = useState<GetServicesProps>({
    title_1: `${placeholderText}`,
    description_1: `${placeholderText}`,
    title_2: `${placeholderText}`,
    description_2: `${placeholderText}`,
    title_3: `${placeholderText}`,
    description_3: `${placeholderText}`,
    title_4: `${placeholderText}`,
    description_4: `${placeholderText}`,
  })

  useEffect(() => {
    const getServices = async () => {
      try {
        const response = await ky.get(`${API_BASE_URL}/services`).json<GetServicesProps[]>()
        setServices(response[0])
      } catch (error) {
        console.error('Error fetching services:', error)
      }
    }

    getServices()
  }, [])

  return (
    <section className={styles.services} id='services'>
      <div className='container'>
        <div className={styles.services_prices}>
          <h2 className='section_title'>Услуги</h2>
          {services && (
            <div className={styles.services_content}>
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
                <BrightButton id={styles.services_button}>Записаться на съемку</BrightButton>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
