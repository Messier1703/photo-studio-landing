"use client"
import { Tabs, TabList, Tab, TabPanel, Popover } from "react-aria-components"
import styles from "./PortfolioDropdown.module.scss"
import API_BASE_URL from "@/constants/API_BASE_URL"
import ky from "ky"
import { useState, useEffect } from "react"
import Image from "next/image"
import placeholderText from "@/constants/placeholderText"
import BrightButton from "../BrightButton/BrightButton"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import StyledPopover from "../StyledPopover/StyledPopover"

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

const PortfolioDropdown: React.FC<PortfolioDropdownProps> = ({ id }) => {
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>([
    {
      id: undefined,
      title: `${placeholderText}`,
      images: [
        {
          id: undefined,
          image: "",
        },
      ],
    },
  ])

  useEffect(() => {
    const getPortfolio = async () => {
      try {
        const response = await ky.get(`${API_BASE_URL}/our_products`).json<PortfolioItem[]>()
        setPortfolio(response)
      } catch (error) {
        console.error(error)
      }
    }

    getPortfolio()
  }, [])

  return (
    <Tabs className={styles.tabs} id={id}>
      <StyledPopover
        button={<BrightButton aria-label="Menu">категории</BrightButton>}
        content={
          <TabList className={styles.tab_list}>
            {portfolio.map((item) => (
              <Tab key={item.id} id={item.title.toLowerCase()} className={styles.tab}>
                {item.title}
              </Tab>
            ))}
          </TabList>
        }
      />
      <Popover className={styles.tabs_dropdown}></Popover>

      {portfolio.map((item) => (
        <TabPanel key={item.id} id={item.title.toLowerCase()} className={styles.tab_panel}>
          <h3>{item.title}</h3>
          <div className={styles.tab_wrapper}>
            <Swiper spaceBetween={10} slidesPerView={1.9} direction="horizontal" className={styles.tab_swiper}>
              {item.images.map((image) => (
                <SwiperSlide key={image.id}>
                  <figure>
                    <Image blurDataURL={image.image} src={image.image} alt={`Image ${image.id}`} width={300} height={420} />
                  </figure>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </TabPanel>
      ))}
    </Tabs>
  )
}

export default PortfolioDropdown
