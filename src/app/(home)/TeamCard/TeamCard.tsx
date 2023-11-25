import Image from 'next/image'
import s from './TeamCard.module.scss'

interface TeamCardProps {
  name: string
  job: string
  img: string
}

const TeamCard: React.FC<TeamCardProps> = ({ name, job, img }) => {
  return (
    <article className={s.card}>
      <h6>{name}</h6>
      <figure>
        <Image src={img} alt='Фото участника команды' sizes='100vw' className='img' />
      </figure>
      <p>{job}</p>
    </article>
  )
}

export default TeamCard
