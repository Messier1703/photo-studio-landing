"use client"
import BrightButton from "@/components/ui/BrightButton/BrightButton"
import styles from "./CalendarSection.module.scss"
import Image from "next/image"
import Link from "next/link"
import ky from "ky"
import API_BASE_URL from "@/constants/API_BASE_URL"
import { useState, useEffect } from "react"
import ItemID from "@/components/ui/ItemID/ItemID"
import StyledPopover from "@/components/ui/StyledPopover/StyledPopover"
import EditButton from "@/components/ui/EditButton/EditButton"
import AdminInput from "@/components/ui/AdminInput/AdminInput"
import AdminButton from "@/components/ui/AdminButton/AdminButton"
import { Form } from "react-aria-components"
import refreshToken from "@/lib/refreshToken"
import FileInput from "@/components/ui/FileInput/FileInput"

interface CalendarItem {
  id: number
  title: string
  name: string
  image: string
  height: string
  shoe_size: string
  clothing_sizes: string
  available_dates: string
}

const CalendarSection = () => {
  const [calendar, setCalendar] = useState<CalendarItem[]>([])

  useEffect(() => {
    const getCalendar = async () => {
      try {
        const response = await ky.get(`${API_BASE_URL}/foto_calendar`).json()
        setCalendar(response as CalendarItem[])
      } catch (error) {
        console.error(error)
      }
    }

    getCalendar()
  }, [])

  const renderCalendarCards = () => {
    return calendar.map((model) => (
      <article className={styles.calendar_card} key={model.id}>
        <figure className={styles.calendar_image_wrapper}>
          <Image className={styles.calendar_image} src={model.image} width={360} height={440} alt="Фото модели" />
        </figure>
        <h3>{model.name}</h3>
        <p>{model.height}</p>
        <p>{model.shoe_size}</p>
        <p>{model.clothing_sizes}</p>
        <h3>{model.available_dates}</h3>
        <ItemID>{model.id}</ItemID>
        <Link href="#contacts">
          <BrightButton>Записаться на съемку</BrightButton>
        </Link>
      </article>
    ))
  }

  return (
    <main className={styles.calendar}>
      <div className="container">
        <h2 className="section_title">
          Выберите модель для вашей съемки
          <StyledPopover
            button={<EditButton />}
            content={
              <>
                <Form
                  onSubmit={async (e) => {
                    e.preventDefault()
                    const formData = new FormData(e.currentTarget)
                    const id = Number(formData.get("id"))
                    try {
                      refreshToken()
                      const response = await ky.patch(`${API_BASE_URL}/foto_calendar/${id}`, {
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
                  <p>Редактировать</p>
                  <AdminInput name="id" type="text" placeholder="ID" />
                  <AdminInput name="name" type="text" placeholder="Имя" />
                  <AdminInput name="height" type="text" placeholder="Рост" />
                  <AdminInput name="shoe_size" type="text" placeholder="Размер обуви" />
                  <AdminInput name="clothing_sizes" type="text" placeholder="Размер одежды" />
                  <AdminInput name="available_dates" type="text" placeholder="Доступные даты" />
                  <FileInput name="image" accept="image/*" />
                  <AdminButton>Сохранить изменения</AdminButton>
                </Form>
                <Form
                  onSubmit={async (e) => {
                    e.preventDefault()
                    const formData = new FormData(e.currentTarget)
                    try {
                      refreshToken()
                      const response = await ky.post(`${API_BASE_URL}/foto_calendar`, {
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
                  <p>Добавить</p>
                  <AdminInput name="title" type="text" placeholder="Описание" />
                  <AdminInput name="name" type="text" placeholder="Имя" />
                  <AdminInput name="height" type="text" placeholder="Рост" />
                  <AdminInput name="shoe_size" type="text" placeholder="Размер обуви" />
                  <AdminInput name="clothing_sizes" type="text" placeholder="Размер одежды" />
                  <AdminInput name="available_dates" type="text" placeholder="Доступные даты" />
                  <FileInput name="image" accept="image/*" />
                  <AdminButton>Сохранить изменения</AdminButton>
                </Form>
                <Form
                  onSubmit={async (e) => {
                    e.preventDefault()
                    const formData = new FormData(e.currentTarget)
                    const id = Number(formData.get("id"))
                    try {
                      refreshToken()
                      const response = await ky.delete(`${API_BASE_URL}/foto_calendar/${id}`, {
                        credentials: "include",
                      })
                      console.log(response)
                      window.location.reload()
                    } catch (error) {
                      console.error(error)
                    }
                  }}
                >
                  <p>Удалить</p>
                  <AdminInput name="id" type="text" placeholder="ID" />
                  <AdminButton>Удалить</AdminButton>
                </Form>
              </>
            }
          />
        </h2>
        <div className={styles.calendar_grid}>{renderCalendarCards()}</div>
      </div>
    </main>
  )
}

export default CalendarSection
