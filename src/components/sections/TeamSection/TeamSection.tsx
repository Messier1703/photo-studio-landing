'use client'
import TeamCard from '../../ui/TeamCard/TeamCard'
import styles from './TeamSection.module.scss'
import { useEffect, useState } from 'react'
import ky from 'ky'
import API_BASE_URL from '@/constants/API_BASE_URL'
import requestInterface from '@/constants/requestInterface'

const TeamSection = () => {
  const [team, setTeam] = useState<requestInterface[]>([])

  useEffect(() => {
    const getTeam = async () => {
      try {
        const response = await ky.get(`${API_BASE_URL}/our_team`).json<requestInterface[]>()
        console.log(response)
        setTeam(response)
      } catch (error) {
        console.error(error)
      }
    }

    getTeam()
  }, [])

  return (
    <section className={styles.team} id='team'>
      <div className='container'>
        <h2 className='section_title'>Наша команда</h2>
        <div className={styles.team_grid}>
          {team.map((member) => (
            <TeamCard key={member.id} name={member.title} job={member.job} img={member.image_1} height={340} width={280} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamSection
