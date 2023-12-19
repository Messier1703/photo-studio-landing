"use client"
import BrightButton from "@/components/ui/BrightButton/BrightButton"
import styles from "./CalendarSection.module.scss"
import Image from "next/image"
import Link from "next/link"
import ky from "ky"
import API_BASE_URL from "@/constants/API_BASE_URL"
import { useState, useEffect } from "react"

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
        <Link href="#contacts">
          <BrightButton>Записаться на съемку</BrightButton>
        </Link>
      </article>
    ))
  }

  return (
    <main className={styles.calendar} id="calendar">
      <div className="container">
        <h2 className="section_title">Выберите модель для вашей съемки</h2>
        <div className={styles.calendar_grid}>{renderCalendarCards()}</div>
      </div>
    </main>
  )
}

export default CalendarSection
