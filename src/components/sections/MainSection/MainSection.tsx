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

  const titleAnimation = {
    hidden: {
      x: -150,
      opacity: 0,
    },
    visible: (custom: number) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  }

  const cardsAnimation = {
    hidden: {
      x: 150,
      opacity: 0,
    },
    visible: (custom: number) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  }

  const desktopLogoFirst = {
    hidden: {
      y: -10,
      opacity: 0,
      rotate: 25,
    },
    visible: (custom: number) => ({
      y: 0,
      opacity: 1,
      rotate: -26,
      transition: { delay: custom * 0.2 },
    }),
  }

  const desktopLogoSecond = {
    hidden: {
      y: -10,
      opacity: 0,
      rotate: 0,
    },
    visible: (custom: number) => ({
      y: 0,
      opacity: 1,
      rotate: 21,
      transition: { delay: custom * 0.2 },
    }),
  }

  const desktopLogoThird = {
    hidden: {
      y: -10,
      opacity: 0,
      rotate: -20,
    },
    visible: (custom: number) => ({
      y: 0,
      opacity: 1,
      rotate: 24,
      transition: { delay: custom * 0.2 },
    }),
  }

  return (
    <motion.main className={styles.main} id="main" initial="hidden" whileInView="visible" viewport={{ once: true }}>
      {isDesktop && (
        <div className={styles.main_logos} id={styles.desktop_only}>
          <motion.figure variants={desktopLogoFirst} custom={6.5}>
            <Image src={wbLogo} alt="Wildberries" width={50} height={50} />
          </motion.figure>
          <motion.figure variants={desktopLogoSecond} custom={7.5}>
            <Image src={ozonLogo} alt="Озон" width={50} height={50} />
          </motion.figure>
          <motion.figure variants={desktopLogoThird} custom={7}>
            <Image src={yaMarketLogo} alt="Yandex Market" width={50} height={50} />
          </motion.figure>
        </div>
      )}
      <div className="container">
        <div className={styles.main_wrapper}>
          {products && (
            <motion.div className={styles.main_cards} variants={cardsAnimation} custom={4}>
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
            </motion.div>
          )}
          <div className={styles.main_title} id={styles.desktop_only}>
            <motion.h1 custom={3} variants={titleAnimation}>
              Успех в Каждом Кадре: Профессиональная Фото Студия для Вашего Бизнеса
            </motion.h1>
            {!isDesktop && (
              <motion.div variants={cardsAnimation} custom={6}>
                <figure>
                  <Image src={wbLogo} alt="Wildberries" />
                </figure>
                <figure>
                  <Image src={ozonLogo} alt="Озон" />
                </figure>
                <figure>
                  <Image src={yaMarketLogo} alt="Yandex Market" />
                </figure>
              </motion.div>
            )}
            <motion.div variants={titleAnimation} custom={5}>
              <Link href="/#contacts" id={styles.main_button_link}>
                <BrightButton id={styles.main_button}>Узнать о фотосъемке</BrightButton>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.main>
  )
}

export default MainSection
