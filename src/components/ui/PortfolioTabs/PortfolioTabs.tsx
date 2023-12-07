'use client'
import { Tabs, TabList, Tab, TabPanel } from 'react-aria-components'
import styles from './PortfolioTabs.module.scss'
import API_BASE_URL from '@/constants/API_BASE_URL'
import ky from 'ky'
import { useState, useEffect } from 'react'
import Image from 'next/image'

interface Image {
  id: number
  image: string
}

interface PortfolioItem {
  id: number
  title: string
  images: Image[]
}

const PortfolioTabs = () => {
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>([])

  useEffect(() => {
    const getPortfolio = async () => {
      try {
        const response = await ky.get(`${API_BASE_URL}/our_products`).json<PortfolioItem[]>()
        console.log(response)
        setPortfolio(response)
      } catch (error) {
        console.error(error)
      }
    }

    getPortfolio()
  }, [])

  return (
    <Tabs className={styles.tabs}>
      <TabList className={styles.tab_list}>
        {portfolio.map((item) => (
          <Tab key={item.id} id={item.title.toLowerCase()} className={styles.tab}>
            {item.title}
          </Tab>
        ))}
      </TabList>

      {portfolio.map((item) => (
        <TabPanel key={item.id} id={item.title.toLowerCase()} className={styles.tab_panel}>
          <h3>{item.title}</h3>
          <div className={styles.tab_image_wrapper}>
            {item.images.map((image) => (
              <figure key={image.id}>
                <Image src={image.image} alt={`Image ${image.id}`} width={300} height={420} />
              </figure>
            ))}
          </div>
        </TabPanel>
      ))}
    </Tabs>
  )
}

export default PortfolioTabs
