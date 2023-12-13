"use client"
import { useState, useEffect } from "react"
import styles from "./ServicesSection.module.scss"
import BrightButton from "@/components/ui/BrightButton/BrightButton"
import ky from "ky"
import API_BASE_URL from "@/constants/API_BASE_URL"
import placeholderText from "@/constants/placeholderText"
import EditButton from "@/components/ui/EditButton/EditButton"
import StyledPopover from "@/components/ui/StyledPopover/StyledPopover"
import { Button, Form } from "react-aria-components"
import AdminInput from "@/components/ui/AdminInput/AdminInput"

const ServicesSection = () => {
  interface GetServicesProps {
    id: number
    title_1: string
    description_1: string
    title_2: string
    description_2: string
    title_3: string
    description_3: string
    title_4: string
    description_4: string
  }

  const [services, setServices] = useState<GetServicesProps>({
    id: 0,
    title_1: `${placeholderText}`,
    description_1: `${placeholderText}`,
    title_2: `${placeholderText}`,
    description_2: `${placeholderText}`,
    title_3: `${placeholderText}`,
    description_3: `${placeholderText}`,
    title_4: `${placeholderText}`,
    description_4: `${placeholderText}`,
  })

  useEffect(() => {
    const getServices = async () => {
      try {
        const response = await ky.get(`${API_BASE_URL}/services`).json<GetServicesProps[]>()
        setServices(response[0])
      } catch (error) {
        console.error("Error fetching services:", error)
      }
    }

    getServices()
  }, [])

  return (
    <section className={styles.services} id="services">
      <div className="container">
        <h2 className="section_title">
          Услуги
          <StyledPopover
            button={<EditButton />}
            content={
              <Form
                onSubmit={async (e) => {
                  e.preventDefault()

                  const formData = new FormData(e.currentTarget)

                  const id = 1

                  const data = {
                    id,
                    title_1: formData.get("title_1") as string,
                    description_1: formData.get("description_1") as string,
                    title_2: formData.get("title_2") as string,
                    description_2: formData.get("description_2") as string,
                    title_3: formData.get("title_3") as string,
                    description_3: formData.get("description_3") as string,
                    title_4: formData.get("title_4") as string,
                    description_4: formData.get("description_4") as string,
                  }
                  const postServices = async () => {
                    try {
                      const response = await ky.patch(`${API_BASE_URL}/services?id=1`, { json: data, credentials: "include" })
                      console.log(response)
                      window.location.reload()
                    } catch (error) {
                      console.error(error)
                    }
                  }
                  postServices()
                }}
              >
                <AdminInput name="title_1" type="text" placeholder="title1" label="label" defaultValue={services.title_1} />
                <AdminInput name="description_1" type="text" placeholder="title1" label="label" defaultValue={services.description_1} />
                <AdminInput name="title_2" type="text" placeholder="title1" label="label" defaultValue={services.title_2} />
                <AdminInput name="description_2" type="text" placeholder="title1" label="label" defaultValue={services.description_2} />
                <AdminInput name="title_3" type="text" placeholder="title1" label="label" defaultValue={services.title_3} />
                <AdminInput name="description_3" type="text" placeholder="title1" label="label" defaultValue={services.description_3} />
                <AdminInput name="title_4" type="text" placeholder="title1" label="label" defaultValue={services.title_4} />
                <AdminInput name="description_4" type="text" placeholder="title1" label="label" defaultValue={services.description_4} />
                <Button type="submit">Обновить секцию</Button>
              </Form>
            }
          />
        </h2>
        <div className={styles.services_wrapper} key={services.id}>
          <div className={styles.services_pricing}>
            <div>
              <h4>{services.title_1}</h4>
              <p>{services.description_1}</p>
            </div>
            <div>
              <h4>{services.title_2}</h4>
              <p>{services.description_2}</p>
            </div>
            <div>
              <h4>{services.title_3}</h4>
              <p>{services.description_3}</p>
            </div>
          </div>
          <div className={styles.services_sign_up}>
            <h3>{services.title_4}</h3>
            <p>{services.description_4}</p>
            <BrightButton id={styles.services_button}>Записаться на съемку</BrightButton>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
