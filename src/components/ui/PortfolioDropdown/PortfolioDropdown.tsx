"use client"
import { Tabs, TabList, Tab, TabPanel } from "react-aria-components"
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
import UserPopover from "../UserPopover/UserPopover"
import ItemID from "../ItemID/ItemID"
import AdminInput from "../AdminInput/AdminInput"
import AdminButton from "../AdminButton/AdminButton"
import FileInput from "../FileInput/FileInput"
import StyledPopover from "../StyledPopover/StyledPopover"
import { Form } from "react-aria-components"
import EditButton from "../EditButton/EditButton"
import refreshToken from "@/lib/refreshToken"

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
    <>
      <StyledPopover
        button={<EditButton />}
        content={
          <>
            <Form
              onSubmit={async (e) => {
                e.preventDefault()
                const formData = new FormData(e.currentTarget)
                const id = Number(formData.get("id"))
                formData.delete("id")
                try {
                  refreshToken()
                  const response = await ky.post(`${API_BASE_URL}/our_products_image?product_id=${id}`, {
                    body: formData,
                    credentials: "include",
                  })
                  console.log(response)
                  console.log(formData)
                  window.location.reload()
                } catch (error) {
                  console.error(error)
                }
              }}
            >
              <p>Добавить изображение</p>
              <AdminInput name="id" type="text" placeholder="ID категории" />
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
                  const response = await ky.patch(`${API_BASE_URL}/our_products_image?image_id=${id}`, {
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
              <p>Редактировать изображение</p>
              <AdminInput name="id" type="text" placeholder="ID" />
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
                  const response = await ky.delete(`${API_BASE_URL}/our_products_image?image_id=${id}`, {
                    credentials: "include",
                  })
                  console.log(response)
                  window.location.reload()
                } catch (error) {
                  console.error(error)
                }
              }}
            >
              <p>Удалить изображение</p>
              <AdminInput name="id" type="text" placeholder="ID" />
              <AdminButton>Удалить</AdminButton>
            </Form>
            <Form
              onSubmit={async (e) => {
                e.preventDefault()
                const formData = new FormData(e.currentTarget)
                try {
                  refreshToken()
                  const response = await ky.post(`${API_BASE_URL}/our_products`, {
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
              <p>Добавить категорию</p>
              <AdminInput name="title" type="text" placeholder="Название" />
              <FileInput name="images" accept="image/*" multiple />
              <AdminButton>Сохранить изменения</AdminButton>
            </Form>
            <Form
              onSubmit={async (e) => {
                e.preventDefault()
                const formData = new FormData(e.currentTarget)
                const id = Number(formData.get("id"))
                try {
                  refreshToken()
                  const response = await ky.delete(`${API_BASE_URL}/our_products?product_id=${id}`, {
                    credentials: "include",
                  })
                  console.log(response)
                  window.location.reload()
                } catch (error) {
                  console.error(error)
                }
              }}
            >
              <p>Удалить категорию</p>
              <AdminInput name="id" type="text" placeholder="ID" />
              <AdminButton>Удалить</AdminButton>
            </Form>
          </>
        }
      />
      <Tabs className={styles.tabs} id={id}>
        <UserPopover
          button={<BrightButton aria-label="Menu">категории</BrightButton>}
          content={
            <TabList className={styles.tab_list}>
              {portfolio.map((item) => (
                <Tab key={item.id} id={item.title.toLowerCase()} className={styles.tab}>
                  {item.title}
                  <ItemID>{item.id}</ItemID>
                </Tab>
              ))}
            </TabList>
          }
        />

        {portfolio.map((item) => (
          <TabPanel key={item.id} id={item.title.toLowerCase()} className={styles.tab_panel}>
            <h3>{item.title}</h3>
            <p>листайте вправо</p>
            <div className={styles.tab_wrapper}>
              <Swiper
                spaceBetween={10}
                slidesPerView={1}
                direction="horizontal"
                className={styles.tab_swiper}
                breakpoints={{
                  540: {
                    slidesPerView: 1.5,
                  },
                  730: {
                    slidesPerView: 2,
                  },
                }}
              >
                {item.images.map((image) => (
                  <SwiperSlide key={image.id}>
                    <ItemID>{image.id}</ItemID>
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
    </>
  )
}

export default PortfolioDropdown
