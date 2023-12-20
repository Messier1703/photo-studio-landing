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
import { motion } from "framer-motion"

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
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1200)

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1200)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

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
    <motion.main className={styles.main} id="main">
      {isDesktop && (
        <div className={styles.main_logos} id={styles.desktop_only}>
          <figure>
            <Image src={wbLogo} alt="Wildberries" width={50} height={50} />
          </figure>
          <figure>
            <Image src={ozonLogo} alt="Озон" width={50} height={50} />
          </figure>
          <figure>
            <Image src={yaMarketLogo} alt="Yandex Market" width={50} height={50} />
          </figure>
        </div>
      )}
      <div className="container">
        <div className={styles.main_wrapper}>
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
          <div className={styles.main_title} id={styles.desktop_only}>
            <h1>Успех в Каждом Кадре: Профессиональная Фото Студия для Вашего Бизнеса</h1>
            {!isDesktop && (
              <div>
                <figure>
                  <Image src={wbLogo} alt="Wildberries" />
                </figure>
                <figure>
                  <Image src={ozonLogo} alt="Озон" />
                </figure>
                <figure>
                  <Image src={yaMarketLogo} alt="Yandex Market" />
                </figure>
              </div>
            )}
            <Link href="/#contacts" id={styles.main_button_link}>
              <BrightButton id={styles.main_button}>Узнать о фотосъемке</BrightButton>
            </Link>
          </div>
        </div>
      </div>
    </motion.main>
  )
}

export default MainSection
