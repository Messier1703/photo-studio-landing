import styles from './ReviewsSection.module.scss'

const ReviewsSection = () => {
  return (
    <section className={styles.reviews} id='reviews'>
      <div className='container'>
        <h2 className='section_title'>Отзывы наших клиентов</h2>
      </div>
    </section>
  )
}

export default ReviewsSection
