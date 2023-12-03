import FixedImage from '@/lib/FixedImage'
import s from './MainCard.module.scss'
import { StaticImageData } from 'next/image'
import React from 'react'

interface MainCardProps {
  img: StaticImageData
}

const MainCard: React.FC<MainCardProps> = ({ img }) => {
  return (
    <article className={s.card}>
      <FixedImage src={img} alt='Фото товара' id={s.image} fitCover={true} />
      <h3>Одежда</h3>
    </article>
  )
}

export default MainCard
