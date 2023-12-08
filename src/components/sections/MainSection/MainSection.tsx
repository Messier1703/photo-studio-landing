'use client'
import { useState, useEffect } from 'react'
import styles from './MainSection.module.scss'
import Link from 'next/link'
import BrightButton from '@/components/ui/BrightButton/BrightButton'
import MainCard from '@/components/ui/MainCard/MainCard'
import API_BASE_URL from '@/constants/API_BASE_URL'

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
        console.log(response)
        setProducts(response)
      } catch (error) {
        console.error(error)
      }
    }

    getPortfolio()
  }, [])

  return (
    <main className={styles.main} id='main'>
      <div className='container'>
        <div className={styles.main_wrapper}>
          <div className={styles.main_content}>
            <h1>Создаем продающий контент для маркетплейсов</h1>
            <Link href='/'>
              <BrightButton id={styles.main_button}>Узнать о фотосъемке</BrightButton>
            </Link>
          </div>
          <div className={styles.main_cards}>
            {/* <MainCard img={placeholderIMG} />
            <MainCard img={placeholderIMG} />
            <MainCard img={placeholderIMG} />
            <MainCard img={placeholderIMG} /> */}
          </div>
        </div>
      </div>
    </main>
  )
}

export default MainSection
