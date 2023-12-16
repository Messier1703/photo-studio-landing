"use client"
import styles from "./ReviewsSection.module.scss"
import { useState, useEffect } from "react"
import API_BASE_URL from "@/constants/API_BASE_URL"
import ky from "ky"
import { StaticImageData } from "next/image"
import ReviewsCard from "@/components/ui/ReviewsCard/ReviewsCard"
import StyledPopover from "@/components/ui/StyledPopover/StyledPopover"
import EditButton from "@/components/ui/EditButton/EditButton"
import { Form } from "react-aria-components"
import AdminInput from "@/components/ui/AdminInput/AdminInput"
import refreshToken from "@/lib/refreshToken"
import AdminButton from "@/components/ui/AdminButton/AdminButton"

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
    <section className={styles.reviews} id="reviews">
      <div className="container">
        <h2 className="section_title">
          Отзывы наших клиентов
          <StyledPopover
            button={<EditButton />}
            content={
              <Form
                onSubmit={async (e) => {
                  e.preventDefault()
                  const formData = new FormData(e.currentTarget)
                  const id = Number(formData.get("id"))
                  try {
                    refreshToken()
                    const response = await ky.patch(`${API_BASE_URL}/reviews?review_id=${id}`, {
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
                <AdminInput name="name" type="text" placeholder="Имя" />
                <AdminInput name="job" type="text" placeholder="Работа" />
                <AdminInput name="description" type="text" placeholder="Описание" />
                <input type="file" name="image" accept="image/*" />
                <AdminButton>Сохранить изменения</AdminButton>
              </Form>
            }
          />
        </h2>
        {reviews && (
          <>
            <div id={styles.desktop_only}>
              <div className={styles.reviews_wrapper}>
                {reviews.slice(0, 2).map((review) => (
                  <ReviewsCard
                    itemId={review.id}
                    key={review.id}
                    name={review.name}
                    description={review.description}
                    src={review.image}
                    job={review.job}
                  />
                ))}
              </div>
              <div className={styles.reviews_wrapper}>
                {reviews.slice(2, 5).map((review) => (
                  <ReviewsCard
                    itemId={review.id}
                    key={review.id}
                    name={review.name}
                    description={review.description}
                    src={review.image}
                    job={review.job}
                  />
                ))}
              </div>
              <div className={styles.reviews_wrapper}>
                {reviews.slice(5, 7).map((review) => (
                  <ReviewsCard
                    itemId={review.id}
                    key={review.id}
                    name={review.name}
                    description={review.description}
                    src={review.image}
                    job={review.job}
                  />
                ))}
              </div>
            </div>
            <div id={styles.mobile_only}>
              {reviews.slice(0, 7).map((review) => (
                <ReviewsCard
                  itemId={review.id}
                  key={review.id}
                  name={review.name}
                  description={review.description}
                  src={review.image}
                  job={review.job}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default ReviewsSection
