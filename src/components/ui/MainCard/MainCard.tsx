import Image from "next/image"
import styles from "./MainCard.module.scss"
import React from "react"

interface MainCardProps {
  img: string
  alt: string
  title: string
}

const MainCard: React.FC<MainCardProps> = ({ img, alt, title }) => {
  return (
    <article className={styles.card}>
      <figure>
        <Image src={img} width={200} height={280} alt={alt} />
      </figure>
      <h3>{title}</h3>
    </article>
  )
}

export default MainCard
