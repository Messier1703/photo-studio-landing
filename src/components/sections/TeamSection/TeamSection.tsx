"use client"
import TeamCard from "../../ui/TeamCard/TeamCard"
import styles from "./TeamSection.module.scss"
import { useEffect, useState } from "react"
import ky from "ky"
import API_BASE_URL from "@/constants/API_BASE_URL"
import { StaticImageData } from "next/image"
import EditButton from "@/components/ui/EditButton/EditButton"
import { Form } from "react-aria-components"
import AdminInput from "@/components/ui/AdminInput/AdminInput"
import AdminButton from "@/components/ui/AdminButton/AdminButton"
import StyledPopover from "@/components/ui/StyledPopover/StyledPopover"
import refreshToken from "@/lib/refreshToken"

const TeamSection = () => {
  interface GetTeamProps {
    id: number
    title: string
    job: string
    image_1: StaticImageData
  }

  const [team, setTeam] = useState<GetTeamProps[]>([
    {
      id: 0,
      title: "",
      job: "",
      image_1: {} as StaticImageData,
    },
  ])

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
    <section className={styles.team} id="team">
      <div className="container">
        <h2 className="section_title">
          Наша команда
          <StyledPopover
            button={<EditButton />}
            content={
              <Form
                onSubmit={async (e) => {
                  e.preventDefault()
                  const formData = new FormData(e.currentTarget)
                  const id = Number(formData.get("id"))
                  try {
                    refreshToken()
                    const response = await ky.patch(`${API_BASE_URL}/our_team?our_team_id=${id}`, {
                      body: formData,
                      credentials: "include",
                    })
                    console.log(response)
                    window.location.reload()
                  } catch (error) {
                    console.error(error)
                  }
                }}
              >
                <AdminInput name="id" defaultValue="" type="text" placeholder="ID участника" />
                <AdminInput name="title" defaultValue="" type="text" placeholder="Имя" />
                <AdminInput name="job" defaultValue="" type="text" placeholder="Работа" />
                <input type="file" defaultValue="" name="image_1" accept="image/*" />
                <AdminButton>Сохранить изменения</AdminButton>
              </Form>
            }
          />
        </h2>
        <div className={styles.team_grid}>
          {team.map((member) => (
            <TeamCard id={member.id} key={member.id} name={member.title} job={member.job} src={member.image_1} alt={member.title} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamSection
