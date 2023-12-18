"use client"
import { useState, useEffect } from "react"
import styles from "./MainSection.module.scss"
import Link from "next/link"
import BrightButton from "@/components/ui/BrightButton/BrightButton"
import MainCard from "@/components/ui/MainCard/MainCard"
import API_BASE_URL from "@/constants/API_BASE_URL"
import ky from "ky"
import Image from "next/image"
import ozonLogo from "public/images/ozon-logo.png"
import wbLogo from "public/images/wb-logo.png"
import yaMarketLogo from "public/images/ya-market-logo.png"

interface Image {
  id: number
  image: string
}

interface PortfolioItem {
  id: number
  title: string
  images: Image[]
}

const MainSection = () => {
  const [products, setProducts] = useState<PortfolioItem[]>([])

  useEffect(() => {
    const getPortfolio = async () => {
      try {
        const response = await ky.get(`${API_BASE_URL}/our_products`).json<PortfolioItem[]>()
        setProducts(response)
      } catch (error) {
        console.error(error)
      }
    }

    getPortfolio()
  }, [])

  return (
    <main className={styles.main} id="main">
      <div className={styles.main_logos} id={styles.desktop_only}>
        <Link href="/" className={styles.main_logo}>
          <Image src={wbLogo} alt="Озон" />
        </Link>
        <Link href="/" className={styles.main_logo}>
          <Image src={ozonLogo} alt="Озон" />
        </Link>
        <Link href="/" className={styles.main_logo}>
          <Image src={yaMarketLogo} alt="Озон" />
        </Link>
      </div>
      <div className="container">
        <div className={styles.main_wrapper}>
          <div className={styles.main_content} id={styles.desktop_only}>
            <h1>Успех в Каждом Кадре: Профессиональная Фото Студия для Вашего Бизнеса</h1>
            <Link href="/" id={styles.main_button_link}>
              <BrightButton id={styles.main_button}>Узнать о фотосъемке</BrightButton>
            </Link>
          </div>
          {products && (
            <div className={styles.main_cards}>
              <div>
                {products.slice(0, 2).map((category) => (
                  <Link href="/#portfolio">
                    <MainCard key={category.id} title={category.title} img={category.images[0]?.image} alt={`Фото ${category.title}`} />
                  </Link>
                ))}
              </div>
              <div>
                {products.slice(2, 4).map((category) => (
                  <Link href="/#portfolio">
                    <MainCard key={category.id} title={category.title} img={category.images[0]?.image} alt={`Фото ${category.title}`} />
                  </Link>
                ))}
              </div>
            </div>
          )}
          <div className={styles.main_content} id={styles.mobile_only}>
            <h1>Создаем продающий контент для маркетплейсов</h1>
            <div className={styles.main_logos}>
              <Link href="/">
                <Image src={ozonLogo} alt="Озон" />
              </Link>
              <Link href="/">
                <Image src={wbLogo} alt="Озон" />
              </Link>
              <Link href="/">
                <Image src={yaMarketLogo} alt="Озон" />
              </Link>
            </div>
            <Link href="#contacts" id={styles.main_button_link}>
              <BrightButton id={styles.main_button}>Узнать о фотосъемке</BrightButton>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

export default MainSection
