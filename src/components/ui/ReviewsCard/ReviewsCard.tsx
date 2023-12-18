import Image, { StaticImageData } from "next/image"
import styles from "./ReviewsCard.module.scss"

interface ReviewsCardProps {
  src: StaticImageData
  name: string
  job: string
  description: string
  itemId: number
}

const ReviewsCard: React.FC<ReviewsCardProps> = ({ src, name, job, description }) => {
  return (
    <article className={styles.card}>
      <div className={styles.card_content}>
        <div className={styles.card_info}>
          <figure>
            <Image src={src} alt={name} width={80} height={80} />
          </figure>
          <div>
            <h3>{name}</h3>
            <h6>{job}</h6>
          </div>
        </div>
        <p>{description}</p>
      </div>
    </article>
  )
}

export default ReviewsCard
