import styles from './MainCard.module.scss'
import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface MainCardProps {
  img: StaticImageData | string
  alt: string
  title: string
}

const MainCard: React.FC<MainCardProps> = ({ img, alt, title }) => {
  return (
    <article className={styles.card}>
      <figure className={styles.card_image_wrapper}>
        <Image className={styles.card_image} src={img} width={200} height={280} alt={alt} />
      </figure>
      <h3>{title}</h3>
    </article>
  )
}

export default MainCard
