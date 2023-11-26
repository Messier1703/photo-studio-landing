import { StaticImageData } from 'next/image'
import s from './TeamCard.module.scss'
import AdaptiveImage from '@/lib/AdaptiveImage'

interface TeamCardProps {
  name: string
  job: string
  img: StaticImageData
}

const TeamCard: React.FC<TeamCardProps> = ({ name, job, img }) => {
  return (
    <article className={s.card}>
      <h6>{name}</h6>
      <AdaptiveImage src={img} alt={name} id={s.image} fitCover={true} />
      <p>{job}</p>
    </article>
  )
}

export default TeamCard
