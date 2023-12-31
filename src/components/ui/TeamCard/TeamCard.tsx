import { StaticImageData } from "next/image"
import styles from "./TeamCard.module.scss"
import Image from "next/image"

interface TeamCardProps {
  name: string
  job: string
  src: StaticImageData
  alt: string
}

const TeamCard: React.FC<TeamCardProps> = ({ name, job, src, alt }) => {
  return (
    <article className={styles.card}>
      <h6>{name}</h6>
      <figure className={styles.card_image_wrapper}>
        <Image className={styles.card_image} src={src} alt={alt} width={280} height={340} />
      </figure>
      <p>{job}</p>
    </article>
  )
}

export default TeamCard
