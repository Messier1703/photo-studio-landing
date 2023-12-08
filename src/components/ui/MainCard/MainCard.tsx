import styles from './MainCard.module.scss'
import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface MainCardProps {
  img: StaticImageData
  alt: string
}

const MainCard: React.FC<MainCardProps> = ({ img, alt }) => {
  return (
    <article className={styles.card}>
      <figure>
        <Image src={img} width={200} height={280} alt={alt} />
      </figure>
      <h3>Одежда</h3>
    </article>
  )
}

export default MainCard
