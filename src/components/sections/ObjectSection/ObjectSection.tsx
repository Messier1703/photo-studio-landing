"use client"
import { useState, useEffect } from "react"
import React from "react"
import styles from "./ObjectSection.module.scss"
import ky from "ky"
import API_BASE_URL from "@/constants/API_BASE_URL"
import BrightButton from "@/components/ui/BrightButton/BrightButton"
import Link from "next/link"
import Image from "next/image"
import { StaticImageData } from "next/image"
import StyledPopover from "@/components/ui/StyledPopover/StyledPopover"
import EditButton from "@/components/ui/EditButton/EditButton"
import { Form } from "react-aria-components"
import AdminInput from "@/components/ui/AdminInput/AdminInput"
import refreshToken from "@/lib/refreshToken"
import AdminButton from "@/components/ui/AdminButton/AdminButton"
import FileInput from "@/components/ui/FileInput/FileInput"

interface GetObjectsProps {
  id: number
  title: string
  description: string
  image_1: StaticImageData
  image_2: StaticImageData
}

const ObjectSection = () => {
  const [object, setObject] = useState<GetObjectsProps>({
    id: 0,
    title: "",
    description: "",
    image_1: {} as StaticImageData,
    image_2: {} as StaticImageData,
  })

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

  return (
    <div className={styles.object} key={object.id}>
      <div className="container">
        {object && (
          <div className={styles.object_wrapper}>
            <div className={styles.object_content}>
              <h3>{object.title}</h3>
              <p>{object.description}</p>
              <Link href="/#contacts">
                <BrightButton id={styles.desktop_only}>Записаться на съемку</BrightButton>
              </Link>
              <StyledPopover
                button={<EditButton />}
                content={
                  <Form
                    onSubmit={async (e) => {
                      e.preventDefault()
                      const formData = new FormData(e.currentTarget)
                      try {
                        refreshToken()
                        const response = await ky.patch(`${API_BASE_URL}/pre_shoot?pre_shoot_id=1`, {
                          body: formData,
                          credentials: "include",
                        })
                        console.log(response)
                        window.location.reload()
                      } catch (error) {
                        console.error(error)
                      }
                    }}
                  >
                    <AdminInput name="title" type="text" placeholder="Заголовок" />
                    <AdminInput name="description" type="text" placeholder="Описание" />
                    <FileInput name="image_1" accept="image/*" />
                    <FileInput name="image_2" accept="image/*" />
                    <AdminButton>Сохранить изменения</AdminButton>
                  </Form>
                }
              />
            </div>
            <div className={styles.object_images}>
              <figure className={styles.object_image_wrapper}>
                <Image className={styles.object_image} src={object.image_1} alt="Фото" width={300} height={500} />
              </figure>
              <figure className={styles.object_image_wrapper}>
                <Image className={styles.object_image} src={object.image_2} alt="Фото" width={300} height={500} />
              </figure>
            </div>
            <BrightButton id={styles.mobile_only}>Записаться на съемку</BrightButton>
          </div>
        )}
      </div>
    </div>
  )
}

export default ObjectSection
