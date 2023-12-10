'use client'
import { useState, useEffect } from 'react'
import React from 'react'
import styles from './ObjectSection.module.scss'
import ky from 'ky'
import API_BASE_URL from '@/constants/API_BASE_URL'
import BrightButton from '@/components/ui/BrightButton/BrightButton'
import Link from 'next/link'
import Image from 'next/image'
import placeholderText from '@/constants/placeholderText'
import { StaticImageData } from 'next/image'

const ObjectSection = () => {
  interface GetObjectsProps {
    title: string
    description: string
    image_1: StaticImageData
    image_2: StaticImageData
  }

  const [object, setObject] = useState<GetObjectsProps>({
    title: `${placeholderText}`,
    description: `${placeholderText}`,
    image_1: {} as StaticImageData,
    image_2: {} as StaticImageData,
  })

  useEffect(() => {
    const getServices = async () => {
      try {
        const response = await ky.get(`${API_BASE_URL}/pre_shoot`).json<GetObjectsProps[]>()
        setObject(response[0])
      } catch (error) {
        console.error('Error fetching services:', error)
      }
    }

    getServices()
  }, [])

  return (
    <div className={styles.object}>
      <div className='container'>
        {object && (
          <>
            <div className={styles.object_wrapper}>
              <div className={styles.object_content}>
                <h3>{object.title}</h3>
                <p>{object.description}</p>
                <Link href='/#contacts'>
                  <BrightButton id={styles.desktop_only}>Записаться на съемку</BrightButton>
                </Link>
              </div>
              <div className={styles.object_images}>
                <figure className={styles.object_image_wrapper}>
                  <Image className={styles.object_image} src={object.image_1} alt='Фото' width={300} height={500} />
                </figure>
                <figure className={styles.object_image_wrapper}>
                  <Image className={styles.object_image} src={object.image_2} alt='Фото' width={300} height={500} />
                </figure>
              </div>
              <BrightButton id={styles.mobile_only}>Записаться на съемку</BrightButton>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default ObjectSection
