import styles from "./BlogSection.module.scss"
import Image from "next/image"
import img from "public/images/wb-logo.png"

const BlogSection = () => {
  return (
    <main className={styles.blog}>
      <div className="container">
        <h2 className="section_title">Как сделать качественные фото</h2>
        <div className={styles.blog_grid_1}>
          <figure className={styles.blog_image_wrapper_big}>
            <Image className={styles.blog_image} src={img} width={440} height={550} alt="Фото модели" />
          </figure>
          <figure className={styles.blog_image_wrapper}>
            <Image className={styles.blog_image} src={img} width={440} height={550} alt="Фото модели" />
          </figure>
          <figure className={styles.blog_image_wrapper}>
            <Image className={styles.blog_image} src={img} width={440} height={550} alt="Фото модели" />
          </figure>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis quidem odio voluptate reprehenderit dolor corporis, cum
            cumque! Doloribus quam ad est, repellat recusandae, sit non placeat asperiores error beatae velit?
          </p>
        </div>
        <div className={styles.blog_grid_2}>
          <figure className={styles.blog_image_wrapper_big}>
            <Image className={styles.blog_image} src={img} width={440} height={550} alt="Фото модели" />
          </figure>
          <figure className={styles.blog_image_wrapper}>
            <Image className={styles.blog_image} src={img} width={440} height={550} alt="Фото модели" />
          </figure>
          <figure className={styles.blog_image_wrapper}>
            <Image className={styles.blog_image} src={img} width={440} height={550} alt="Фото модели" />
          </figure>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis quidem odio voluptate reprehenderit dolor corporis, cum
            cumque! Doloribus quam ad est, repellat recusandae, sit non placeat asperiores error beatae velit?
          </p>
        </div>
      </div>
    </main>
  )
}

export default BlogSection
