"use client"
import styles from "./AboutSection.module.scss"
import BrightButton from "@/components/ui/BrightButton/BrightButton"
import companyName from "@/constants/studioName"
import { useState, useEffect } from "react"
import API_BASE_URL from "@/constants/API_BASE_URL"
import ky from "ky"
import Image from "next/image"
import EditButton from "@/components/ui/EditButton/EditButton"
import StyledPopover from "@/components/ui/StyledPopover/StyledPopover"
import AdminInput from "@/components/ui/AdminInput/AdminInput"
import { Form, Button } from "react-aria-components"

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
    <section className={styles.about} id="about-us">
      {about && (
        <div className="container">
          <StyledPopover
            button={
              <h2 className="section_title">
                О нас <EditButton />
              </h2>
            }
            content={
              <Form
                onSubmit={(e) => {
                  e.preventDefault()

                  const data = Object.fromEntries(new FormData(e.currentTarget))

                  const patchAbout = async () => {
                    try {
                      const response = await ky.patch(`${API_BASE_URL}/about_us`, { json: data })
                      console.log(response)
                    } catch (error) {
                      console.error(error)
                    }
                  }
                  patchAbout()
                }}
              >
                <AdminInput name="title" type="text" placeholder="Заголовок" label="Заголовок" defaultValue={about.title} />
                <AdminInput name="description" type="textarea" placeholder="Описание" label="Описание" defaultValue={about.description} />
                <AdminInput name="description" type="images" placeholder="Описание" label="Описание" defaultValue={about.description} />
                <Button type="submit">Сохранить изменения</Button>
              </Form>
            }
          />

          <div className={styles.about_wrapper}>
            <div className={styles.about_images}>
              {about.images.map((image, index) => (
                <figure key={index} className={styles.about_image_wrapper}>
                  <Image className={styles.about_image} src={image.image} alt="Фото" width={880} height={600} />
                </figure>
              ))}
            </div>
            <div className={styles.about_text}>
              <h3>{companyName}</h3>
              <p>{about.title}</p>
              <p>{about.description}</p>
              <BrightButton id={styles.btn}>Посмотреть работы</BrightButton>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default AboutSection
