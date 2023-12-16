"use client"
import { Form } from "react-aria-components"
import ky from "ky"
import API_BASE_URL from "@/constants/API_BASE_URL"
import AdminButton from "@/components/ui/AdminButton/AdminButton"
import BrightButton from "@/components/ui/BrightButton/BrightButton"
import Link from "next/link"
import { useEffect } from "react"
import { useAuth } from "@/lib/AuthContext"

const AdminPage = () => {
  const { isAuthenticated, refreshToken } = useAuth()

  useEffect(() => {
    refreshToken()
  }, [refreshToken])

  return isAuthenticated ? (
    <section>
      <div className="container">
        <p>Поменять видео</p>
        <p>(Только формат .WEBM)</p>
        <Form
          onSubmit={async (e) => {
            e.preventDefault()
            const formData = new FormData(e.currentTarget)
            try {
              refreshToken()
              const response = await ky.put(`${API_BASE_URL}/video/1`, {
                body: formData,
                credentials: "include",
              })
              console.log(response)
              console.log(formData)
              window.location.reload()
            } catch (error) {
              console.error(error)
            }
          }}
        >
          <input type="file" name="file" accept="video/*" />
          <AdminButton>Ок</AdminButton>
        </Form>
        <Link href="/">
          <BrightButton>На главную</BrightButton>
        </Link>
      </div>
    </section>
  ) : null
}

export default AdminPage
