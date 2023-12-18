"use client"
import { useState, useEffect } from "react"
import styles from "./InfographicsSection.module.scss"
import ky from "ky"
import API_BASE_URL from "@/constants/API_BASE_URL"
import Link from "next/link"
import BrightButton from "@/components/ui/BrightButton/BrightButton"
import Image from "next/image"
import placeholderText from "@/constants/placeholderText"
import { StaticImageData } from "next/image"

const InfographicsSection = () => {
  interface GetInfographicsProps {
    title: string
    description: string
    image_1: StaticImageData
    image_2: StaticImageData
    image_3: StaticImageData
    image_4: StaticImageData
  }

  const [infographics, setInfographics] = useState<GetInfographicsProps>({
    title: `${placeholderText}`,
    description: `${placeholderText}`,
    image_1: {} as StaticImageData,
    image_2: {} as StaticImageData,
    image_3: {} as StaticImageData,
    image_4: {} as StaticImageData,
  })

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
    <div className={styles.infographics}>
      <div className="container">
        {infographics && (
          <div className={styles.infographics_wrapper}>
            <div className={styles.infographics_content} id={styles.mobile_only}>
              <h3>{infographics.title}</h3>
              <p>{infographics.description}</p>
              <Link href="/#contacts" id={styles.desktop_only}>
                <BrightButton>Обсудить работу</BrightButton>
              </Link>
            </div>
            <div className={styles.infographics_images}>
              <figure className={styles.infographics_image_wrapper}>
                <Image className={styles.infographics_image} src={infographics.image_1} alt="Фото" width={300} height={360} />
              </figure>
              <figure className={styles.infographics_image_wrapper}>
                <Image className={styles.infographics_image} src={infographics.image_2} alt="Фото" width={300} height={360} />
              </figure>
              <figure className={styles.infographics_image_wrapper}>
                <Image className={styles.infographics_image} src={infographics.image_3} alt="Фото" width={300} height={360} />
              </figure>
              <figure className={styles.infographics_image_wrapper}>
                <Image className={styles.infographics_image} src={infographics.image_4} alt="Фото" width={300} height={360} />
              </figure>
            </div>
            <div className={styles.infographics_content} id={styles.desktop_only}>
              <h3>{infographics.title}</h3>
              <p>{infographics.description}</p>
              <Link href="/#contacts">
                <BrightButton>Обсудить работу</BrightButton>
              </Link>
            </div>
            <Link href="/#contacts" id={styles.mobile_only}>
              <BrightButton>Обсудить работу</BrightButton>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default InfographicsSection
