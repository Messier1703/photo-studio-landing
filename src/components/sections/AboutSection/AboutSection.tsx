"use client"
import styles from "./AboutSection.module.scss"
import BrightButton from "@/components/ui/BrightButton/BrightButton"
import companyName from "@/constants/studioName"
import { useState, useEffect } from "react"
import API_BASE_URL from "@/constants/API_BASE_URL"
import ky from "ky"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import Link from "next/link"
import swipeIcon from "public/svg/swipe-icon.svg"

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

const AboutSection = () => {
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

  return (
    <>
      {about && (
        <section className={styles.about} id="about">
          <div className="container">
            <h2 className="section_title">О нас</h2>
            <>
              <div className={styles.about_swipe}>
                <h4>листайте вправо</h4>
                <figure>
                  <Image src={swipeIcon} alt="Иконка" />
                </figure>
              </div>
              <div className={styles.about_wrapper}>
                <div className={styles.about_images}>
                  <Swiper
                    spaceBetween={10}
                    slidesPerView={1}
                    direction="horizontal"
                    className={styles.tab_swiper}
                    breakpoints={{
                      680: {
                        slidesPerView: 1.5,
                      },
                      840: {
                        slidesPerView: 1,
                      },
                    }}
                  >
                    {about.images.map((image) => (
                      <SwiperSlide key={image.id} className={styles.swiper_slide}>
                        <figure className={styles.about_image_wrapper}>
                          <Image className={styles.about_image} src={image.image} alt="Фото" width={880} height={600} />
                        </figure>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                <div className={styles.about_text}>
                  <h3>{companyName}</h3>
                  <p>{about.title}</p>
                  <p>{about.description}</p>
                  <Link href="/#portfolio">
                    <BrightButton id={styles.btn}>Посмотреть работы</BrightButton>
                  </Link>
                </div>
              </div>
            </>
          </div>
        </section>
      )}
    </>
  )
}

export default AboutSection
