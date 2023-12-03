import s from './PerksCard.module.scss'
import { ReactNode } from 'react'

interface PerksCardProps {
  title: string
  desc: string
  children: ReactNode
}

const PerksCard: React.FC<PerksCardProps> = ({ title, desc, children }) => {
  return (
    <article className={s.card}>
      <figure>{children}</figure>
      <div>
        <h4>{title}</h4>
        <p>{desc}</p>
      </div>
    </article>
  )
}

export default PerksCard
