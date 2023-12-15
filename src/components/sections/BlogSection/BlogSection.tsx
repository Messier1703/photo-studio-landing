"use client"
import styles from "./BlogSection.module.scss"
import Image from "next/image"
import img from "public/images/placeholder.png"
import { useState, useEffect } from "react"
import API_BASE_URL from "@/constants/API_BASE_URL"
import ky from "ky"

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
            <h2 className="section_title">{post.title}</h2>
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
