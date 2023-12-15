import Image from "next/image"
import img from "public/images/placeholder.png"

const CalendarCard = () => {
  return (
    <article>
      <figure>
        <Image src={img} width={360} height={440} alt="Фото модели" />
      </figure>
    </article>
  )
}

export default CalendarCard
