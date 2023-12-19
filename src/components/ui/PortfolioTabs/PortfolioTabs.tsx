"use client"
import { Tabs, TabList, Tab, TabPanel } from "react-aria-components"
import styles from "./PortfolioTabs.module.scss"
import API_BASE_URL from "@/constants/API_BASE_URL"
import ky from "ky"
import { useState, useEffect } from "react"
import Image from "next/image"

interface Image {
  id: number | undefined
  image: string
}

interface PortfolioItem {
  id: number | undefined
  title: string
  images: Image[]
}

interface PortfolioDropdownProps {
  id?: string
}

const PortfolioTabs: React.FC<PortfolioDropdownProps> = ({ id }) => {
  const [isDataLoaded, setIsDataLoaded] = useState(false)

  const [portfolio, setPortfolio] = useState<PortfolioItem[]>([])

  useEffect(() => {
    const getPortfolio = async () => {
      try {
        const response = await ky.get(`${API_BASE_URL}/our_products`).json<PortfolioItem[]>()
        console.log(response)
        setPortfolio(response)
        setIsDataLoaded(true)
      } catch (error) {
        console.error(error)
      }
    }

    getPortfolio()
  }, [])

  return (
    <>
      {portfolio && (
        <Tabs className={styles.tabs} id={id}>
          <TabList className={styles.tab_list}>
            {portfolio.map((item) => (
              <Tab key={item.id} id={item.title.toLowerCase()} className={`${styles.tab} ${isDataLoaded ? "" : styles.tab_rounded}`}>
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
                    <Image blurDataURL={image.image} src={image.image} alt={`Image ${image.id}`} width={300} height={420} />
                  </figure>
                ))}
              </div>
            </TabPanel>
          ))}
        </Tabs>
      )}
    </>
  )
}

export default PortfolioTabs
