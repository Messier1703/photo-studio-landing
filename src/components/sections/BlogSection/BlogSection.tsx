"use client"
import styles from "./BlogSection.module.scss"
import Image from "next/image"
import { useState, useEffect } from "react"
import API_BASE_URL from "@/constants/API_BASE_URL"
import ky from "ky"
import StyledPopover from "@/components/ui/StyledPopover/StyledPopover"
import EditButton from "@/components/ui/EditButton/EditButton"
import { Form } from "react-aria-components"
import AdminInput from "@/components/ui/AdminInput/AdminInput"
import AdminButton from "@/components/ui/AdminButton/AdminButton"
import refreshToken from "@/lib/refreshToken"
import FileInput from "@/components/ui/FileInput/FileInput"

interface BlogProps {
  id: number
  title: string
  description_1: string
  description_2: string
  image_1: string
  image_2: string
  image_3: string
  image_4: string
  image_5: string
  image_6: string
}

const BlogSection = () => {
  const [blog, setBlog] = useState<BlogProps[]>([])

  useEffect(() => {
    const getBlog = async () => {
      try {
        const response = await ky.get(`${API_BASE_URL}/blog_about_us`).json()
        setBlog(response as BlogProps[])
      } catch (error) {
        console.error(error)
      }
    }

    getBlog()
  }, [])

  return (
    <main className={styles.blog}>
      <div className="container">
        {blog.map((post) => (
          <div key={post.id}>
            <h2 className="section_title">
              {post.title}
              <StyledPopover
                button={<EditButton />}
                content={
                  <Form
                    onSubmit={async (e) => {
                      e.preventDefault()
                      const formData = new FormData(e.currentTarget)
                      try {
                        refreshToken()
                        const response = await ky.patch(`${API_BASE_URL}/blog_about_us?blog_about_us_id=1`, {
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
                    <AdminInput name="title" type="text" placeholder="Заголовок" />
                    <AdminInput name="description_1" type="text" placeholder="Описание" />
                    <AdminInput name="description_2" type="text" placeholder="Описание 2" />
                    <FileInput name="image_1" accept="image/*" />
                    <FileInput name="image_2" accept="image/*" />
                    <FileInput name="image_3" accept="image/*" />
                    <FileInput name="image_4" accept="image/*" />
                    <FileInput name="image_5" accept="image/*" />
                    <FileInput name="image_6" accept="image/*" />
                    <AdminButton>Сохранить изменения</AdminButton>
                  </Form>
                }
              />
            </h2>
            <div className={styles.blog_grid_1}>
              <figure className={styles.blog_image_wrapper_big}>
                <Image className={styles.blog_image} src={post.image_1} width={440} height={550} alt="Фото модели" />
              </figure>
              <figure className={styles.blog_image_wrapper}>
                <Image className={styles.blog_image} src={post.image_2} width={440} height={550} alt="Фото модели" />
              </figure>
              <figure className={styles.blog_image_wrapper}>
                <Image className={styles.blog_image} src={post.image_3} width={440} height={550} alt="Фото модели" />
              </figure>
              <p>{post.description_1}</p>
            </div>
            <div className={styles.blog_grid_2}>
              <figure className={styles.blog_image_wrapper_big}>
                <Image className={styles.blog_image} src={post.image_4} width={440} height={550} alt="Фото модели" />
              </figure>
              <figure className={styles.blog_image_wrapper}>
                <Image className={styles.blog_image} src={post.image_5} width={440} height={550} alt="Фото модели" />
              </figure>
              <figure className={styles.blog_image_wrapper}>
                <Image className={styles.blog_image} src={post.image_6} width={440} height={550} alt="Фото модели" />
              </figure>
              <p>{post.description_2}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

export default BlogSection
