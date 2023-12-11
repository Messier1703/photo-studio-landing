'use client'
import styles from './ReviewsSection.module.scss'
import { useState, useEffect } from 'react'
import API_BASE_URL from '@/constants/API_BASE_URL'
import ky from 'ky'
import { StaticImageData } from 'next/image'
import ReviewsCard from '@/components/ui/ReviewsCard/ReviewsCard'

interface GetReviewsProps {
  id: number
  name: string
  job: string
  description: string
  image: StaticImageData
}

const ReviewsSection = () => {
  const [reviews, setReviews] = useState<GetReviewsProps[]>([])

  useEffect(() => {
    const getReviews = async () => {
      try {
        const response = await ky.get(`${API_BASE_URL}/reviews`).json<GetReviewsProps[]>()
        setReviews(response)
      } catch (error) {
        console.error(error)
      }
    }

    getReviews()
  }, [])

  return (
    <section className={styles.reviews} id='reviews'>
      <div className='container'>
        <h2 className='section_title'>Отзывы наших клиентов</h2>
        <div id={styles.desktop_only}>
          <div className={styles.reviews_wrapper}>
            {reviews.slice(0, 2).map((review) => (
              <ReviewsCard key={review.id} name={review.name} description={review.description} src={review.image} job={review.job} />
            ))}
          </div>
          <div className={styles.reviews_wrapper}>
            {reviews.slice(2, 5).map((review) => (
              <ReviewsCard key={review.id} name={review.name} description={review.description} src={review.image} job={review.job} />
            ))}
          </div>
          <div className={styles.reviews_wrapper}>
            {reviews.slice(5, 7).map((review) => (
              <ReviewsCard key={review.id} name={review.name} description={review.description} src={review.image} job={review.job} />
            ))}
          </div>
        </div>
        <div id={styles.mobile_only}>
          {reviews.slice(0, 7).map((review) => (
            <ReviewsCard key={review.id} name={review.name} description={review.description} src={review.image} job={review.job} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ReviewsSection
