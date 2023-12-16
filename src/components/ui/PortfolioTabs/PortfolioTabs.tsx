"use client"
import { Tabs, TabList, Tab, TabPanel } from "react-aria-components"
import styles from "./PortfolioTabs.module.scss"
import API_BASE_URL from "@/constants/API_BASE_URL"
import ky from "ky"
import { useState, useEffect } from "react"
import Image from "next/image"
import { Form } from "react-aria-components"
import StyledPopover from "../StyledPopover/StyledPopover"
import AdminButton from "../AdminButton/AdminButton"
import EditButton from "../EditButton/EditButton"
import refreshToken from "@/lib/refreshToken"
import AdminInput from "../AdminInput/AdminInput"
import ItemID from "../ItemID/ItemID"

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

  const [portfolio, setPortfolio] = useState<PortfolioItem[]>([
    {
      id: undefined,
      title: "",
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
      <StyledPopover
        button={<EditButton />}
        content={
          <>
            <p>Добавить изображение</p>
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
              <AdminInput name="id" type="text" placeholder="ID категории" />
              <input type="file" name="image" accept="image/*" />
              <AdminButton>Сохранить изменения</AdminButton>
            </Form>
            <p>Редактировать изображение</p>
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
              <AdminInput name="id" type="text" placeholder="ID" />
              <input type="file" name="image" accept="image/*" />
              <AdminButton>Сохранить изменения</AdminButton>
            </Form>
            <p>Удалить изображение</p>
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
              <AdminInput name="id" type="text" placeholder="ID" />
              <AdminButton>Удалить</AdminButton>
            </Form>
            <p>Добавить категорию</p>
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
              <AdminInput name="title" type="text" placeholder="Название" />
              <input type="file" name="images" accept="image/*" multiple />
              <AdminButton>Сохранить изменения</AdminButton>
            </Form>
            <p>Удалить категорию</p>
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
              <AdminInput name="id" type="text" placeholder="ID" />
              <AdminButton>Удалить</AdminButton>
            </Form>
          </>
        }
      />
      {portfolio && (
        <Tabs className={styles.tabs} id={id}>
          <TabList className={styles.tab_list}>
            {portfolio.map((item) => (
              <Tab key={item.id} id={item.title.toLowerCase()} className={`${styles.tab} ${isDataLoaded ? "" : styles.tab_rounded}`}>
                {item.title} <ItemID>{item.id}</ItemID>
              </Tab>
            ))}
          </TabList>

          {portfolio.map((item) => (
            <TabPanel key={item.id} id={item.title.toLowerCase()} className={styles.tab_panel}>
              <h3>{item.title}</h3>
              <div className={styles.tab_image_wrapper}>
                {item.images.map((image) => (
                  <figure key={image.id}>
                    <ItemID>{image.id}</ItemID>
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
