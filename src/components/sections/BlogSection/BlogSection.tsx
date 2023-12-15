import styles from "./BlogSection.module.scss"

const BlogSection = () => {
  return (
    <div className={styles.blog_wrapper}>
      <h2 className="section_title">Как сделать качественные фото</h2>
      <div className={styles.blog_grid}></div>
    </div>
  )
}

export default BlogSection
