"use client"
import TeamCard from "../../ui/TeamCard/TeamCard"
import styles from "./TeamSection.module.scss"
import { useEffect, useState } from "react"
import ky from "ky"
import API_BASE_URL from "@/constants/API_BASE_URL"
import { StaticImageData } from "next/image"

const TeamSection = () => {
  interface GetTeamProps {
    id: number
    title: string
    job: string
    image_1: StaticImageData
  }

  const [team, setTeam] = useState<GetTeamProps[]>([])

  useEffect(() => {
    const getTeam = async () => {
      try {
        const response = await ky.get(`${API_BASE_URL}/our_team`).json<GetTeamProps[]>()
        console.log(response)
        setTeam(response)
      } catch (error) {
        console.error(error)
      }
    }

    getTeam()
  }, [])

  return (
    <>
      {team && (
        <section className={styles.team} id="team">
          <div className="container">
            <h2 className="section_title">Наша команда</h2>
            <div className={styles.team_grid}>
              {team.map((member) => (
                <TeamCard key={member.id} name={member.title} job={member.job} src={member.image_1} alt={member.title} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}

export default TeamSection
