"use client"
import { Form } from "react-aria-components"
import ky from "ky"
import API_BASE_URL from "@/constants/API_BASE_URL"
import AdminInput from "@/components/ui/AdminInput/AdminInput"
import AdminButton from "@/components/ui/AdminButton/AdminButton"
// import refreshToken from "@/lib/refreshToken"
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
        <p>Поменять пароль</p>
        <Form
          onSubmit={(e) => {
            e.preventDefault()
            const data = Object.fromEntries(new FormData(e.currentTarget))
            const postLogin = async () => {
              try {
                refreshToken()
                const response = await ky.post(`${API_BASE_URL}/auth/change_password`, { json: data, credentials: "include" }).json()
                console.log(response)
                window.location.reload()
              } catch (error) {
                console.error(error)
              }
            }
            postLogin()
            console.log(data)
          }}
        >
          <AdminInput name="new_password" type="password" placeholder="пароль" />
          <AdminInput name="new_confirm_password" type="password" placeholder="подтвердите пароль" />
          <AdminButton>ок</AdminButton>
        </Form>
        <p>Поменять видео (MP4)</p>
        <Form
          onSubmit={async (e) => {
            e.preventDefault()
            const formData = new FormData(e.currentTarget)
            try {
              refreshToken()
              const response = await ky.put(`${API_BASE_URL}/video/1`, {
                body: formData,
                credentials: "include",
                headers: {
                  "Content-Type": "multipart/form-data",
                },
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
          <AdminButton>ок</AdminButton>
        </Form>
        <Link href="/">
          <BrightButton>На главную</BrightButton>
        </Link>
      </div>
    </section>
  ) : null
}

export default AdminPage
