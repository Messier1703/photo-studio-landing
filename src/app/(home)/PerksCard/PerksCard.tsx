import React from 'react'
import s from './PerksCard.module.scss'
import FixedImage from '@/lib/FixedImage'
import { StaticImageData } from 'next/image'

interface PerksCardProps {
  title: string
  desc: string
  img: StaticImageData
}

const PerksCard: React.FC<PerksCardProps> = ({ title, desc, img }) => {
  return (
    <article className={s.card}>
      <FixedImage src={img} alt='alt' id={s.image} />
      <div>
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
    </article>
  )
}

export default PerksCard
