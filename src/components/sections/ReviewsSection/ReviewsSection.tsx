import styles from './ReviewsSection.module.scss'

const ReviewsSection = () => {
  return (
    <section className={styles.reviews} id='reviews'>
      <div className='container'>
        <h2 className='section_title'>Отзывы наших клиентов</h2>
        <div className={styles.reviews_wrapper}>
          <article className={styles.reviews_circle}>
            <h3></h3>
            <h4></h4>
            <p></p>
          </article>
          <article className={styles.reviews_circle}>
            <h3></h3>
            <h4></h4>
            <p></p>
          </article>
          <article className={styles.reviews_circle}>
            <h3></h3>
            <h4></h4>
            <p></p>
          </article>
          <article className={styles.reviews_circle}>
            <h3></h3>
            <h4></h4>
            <p></p>
          </article>
          <article className={styles.reviews_circle}>
            <h3></h3>
            <h4></h4>
            <p></p>
          </article>
          <article className={styles.reviews_circle}>
            <h3></h3>
            <h4></h4>
            <p></p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default ReviewsSection
