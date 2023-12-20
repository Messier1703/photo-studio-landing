"use client"
import { useState, useEffect } from "react"
import styles from "./PortfolioSection.module.scss"
import { Tab, Tabs, TabList, TabPanel, MenuTrigger, Popover } from "react-aria-components"
import ky from "ky"
import API_BASE_URL from "@/constants/API_BASE_URL"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import BrightButton from "@/components/ui/BrightButton/BrightButton"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import swipeIcon from "public/svg/swipe-icon.svg"

interface Image {
  id: number | undefined
  image: string
}

interface PortfolioItem {
  id: number | undefined
  title: string
  images: Image[]
}

const PortfolioSection = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1200)

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1200)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

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
    <section className={styles.portfolio} id="portfolio">
      <div className="container">
        <h2 className="section_title">Наши работы</h2>
        {isDesktop ? (
          <>
            {portfolio && (
              <Tabs className={styles.tabs}>
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
        ) : (
          <>
            {portfolio && (
              <Tabs className={styles.dropdown}>
                <MenuTrigger>
                  <BrightButton>категории</BrightButton>
                  <Popover className={styles.dropdown_popover}>
                    <TabList className={styles.dropdown_popover_tablist}>
                      {portfolio.map((item) => (
                        <Tab className={styles.dropdown_popover_tab} key={item.id} id={item.title.toLowerCase()}>
                          {item.title}
                        </Tab>
                      ))}
                    </TabList>
                  </Popover>
                </MenuTrigger>

                {portfolio.map((item) => (
                  <TabPanel key={item.id} id={item.title.toLowerCase()}>
                    <div className={styles.dropdown_title}>
                      <h3>{item.title}</h3>
                      <div>
                        <h4>Листайте вправо</h4>
                        <figure>
                          <Image src={swipeIcon} alt="Иконка" />
                        </figure>
                      </div>
                    </div>
                    <Swiper
                      className={styles.dropdown_swiper}
                      spaceBetween={10}
                      slidesPerView={1}
                      direction="horizontal"
                      loop
                      breakpoints={{
                        392: {
                          slidesPerView: 1.1,
                        },
                        520: {
                          slidesPerView: 1.5,
                        },
                        810: {
                          slidesPerView: 2,
                        },
                      }}
                    >
                      {item.images.map((image) => (
                        <SwiperSlide key={image.id} className={styles.dropdown_swiper_slide}>
                          <figure>
                            <Image src={image.image} alt={`Image ${image.id}`} width={300} height={420} />
                          </figure>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </TabPanel>
                ))}
              </Tabs>
            )}
          </>
        )}
      </div>
    </section>
  )
}

export default PortfolioSection
