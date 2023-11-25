import s from './MainCard.module.scss'
import Image from 'next/image'
import img from 'public/card-img.jpg'

const MainCard = () => {
  return (
    <article className={s.card}>
      <Image src={img} className='img' alt='Фото товара' />
      <h3>Одежда</h3>
    </article>
  )
}

export default MainCard
