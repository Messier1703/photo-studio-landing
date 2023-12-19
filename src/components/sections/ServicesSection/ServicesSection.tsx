"use client"
import { useState, useEffect } from "react"
import styles from "./ServicesSection.module.scss"
import BrightButton from "@/components/ui/BrightButton/BrightButton"
import ky from "ky"
import API_BASE_URL from "@/constants/API_BASE_URL"
import Link from "next/link"
import { StaticImageData } from "next/image"
import Image from "next/image"

interface GetServicesProps {
  id: number
  title_1: string
  description_1: string
  title_2: string
  description_2: string
  title_3: string
  description_3: string
  title_4: string
  description_4: string
}

interface GetObjectsProps {
  id: number
  title: string
  description: string
  image_1: StaticImageData
  image_2: StaticImageData
}

interface GetInfographicsProps {
  title: string
  description: string
  image_1: StaticImageData
  image_2: StaticImageData
  image_3: StaticImageData
  image_4: StaticImageData
}

const ServicesSection = () => {
  const [services, setServices] = useState<GetServicesProps>()

  useEffect(() => {
    const getServices = async () => {
      try {
        const response = await ky.get(`${API_BASE_URL}/services`).json<GetServicesProps[]>()
        setServices(response[0])
        console.log(services)
      } catch (error) {
        console.error(error)
      }
    }

    getServices()
  }, [])

  const [object, setObject] = useState<GetObjectsProps>()

  useEffect(() => {
    const getObjects = async () => {
      try {
        const response = await ky.get(`${API_BASE_URL}/pre_shoot`).json<GetObjectsProps[]>()
        setObject(response[0])
      } catch (error) {
        console.error(error)
      }
    }

    getObjects()
  }, [])

  const [infographics, setInfographics] = useState<GetInfographicsProps>()

  useEffect(() => {
    const getServices = async () => {
      try {
        const response = await ky.get(`${API_BASE_URL}/infographic`).json<GetInfographicsProps[]>()
        setInfographics(response[0])
      } catch (error) {
        console.error("Error fetching services:", error)
      }
    }

    getServices()
  }, [])

  return (
    <section id="services">
      <div className="container">
        <h2 className="section_title">Услуги</h2>
        {services && (
          <div className={styles.services} key={services.id}>
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
            <div>
              <h3>{services.title_4}</h3>
              <p>{services.description_4}</p>
              <Link href="#contacts" className={styles.button_link}>
                <BrightButton>Записаться на съемку</BrightButton>
              </Link>
            </div>
          </div>
        )}
        {object && (
          <div className={styles.object}>
            <div className={styles.object_title}>
              <h2 className={styles.title}>{object.title}</h2>
              <p className={styles.description}>{object.description}</p>
            </div>
            <div className={styles.object_images}>
              <figure>
                <Image src={object.image_1} alt="Фото" width={300} height={500} />
              </figure>
              <figure>
                <Image src={object.image_2} alt="Фото" width={300} height={500} />
              </figure>
            </div>
            <div className={styles.object_button}>
              <Link href="#contacts" className={styles.button_link}>
                <BrightButton>Записаться на съемку</BrightButton>
              </Link>
            </div>
          </div>
        )}
        {infographics && (
          <div className={styles.infographics}>
            <div className={styles.infographics_title}>
              <h2 className={styles.title}>{infographics.title}</h2>
              <p className={styles.description}>{infographics.description}</p>
            </div>
            <div className={styles.infographics_images}>
              <figure>
                <Image src={infographics.image_1} alt="Фото" width={300} height={360} />
              </figure>
              <figure>
                <Image src={infographics.image_2} alt="Фото" width={300} height={360} />
              </figure>
              <figure>
                <Image src={infographics.image_3} alt="Фото" width={300} height={360} />
              </figure>
              <figure>
                <Image src={infographics.image_4} alt="Фото" width={300} height={360} />
              </figure>
            </div>
            <div className={styles.infographics_button}>
              <Link href="#contacts" className={styles.button_link}>
                <BrightButton>Обсудить работу</BrightButton>
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default ServicesSection
