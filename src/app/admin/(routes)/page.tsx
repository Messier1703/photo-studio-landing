"use client"
import { Form } from "react-aria-components"
import ky from "ky"
import API_BASE_URL from "@/constants/API_BASE_URL"
import AdminInput from "@/components/ui/AdminInput/AdminInput"
import AdminButton from "@/components/ui/AdminButton/AdminButton"
import refreshToken from "@/lib/refreshToken"
import BrightButton from "@/components/ui/BrightButton/BrightButton"
import Link from "next/link"

const AdminPage = () => {
  return (
    <section>
      <div className="container">
        <p>войти в аккаунт</p>
        <Form
          onSubmit={(e) => {
            e.preventDefault()
            const data = Object.fromEntries(new FormData(e.currentTarget))
            const postLogin = async () => {
              try {
                const response = await ky.post(`${API_BASE_URL}/auth/login_user`, { json: data, credentials: "include" })
                console.log(response)
                window.location.href = "/"
              } catch (error) {
                console.error(error)
              }
            }
            postLogin()
            console.log(data)
          }}
        >
          <AdminInput name="email" type="email" placeholder="email" />
          <AdminInput name="password" type="password" placeholder="пароль" />
          <AdminButton>войти</AdminButton>
        </Form>
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
        <p>Поменять видео</p>
        <Form
          onSubmit={async (e) => {
            e.preventDefault()
            const formData = new FormData(e.currentTarget)
            formData.delete("id")
            try {
              refreshToken()
              const response = await ky.put(`${API_BASE_URL}/video/1`, {
                body: formData,
                credentials: "include",
                headers: {
                  "Content-Type": "video/mp4",
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
          <input type="file" name="video" accept="any" />
          <AdminButton>ок</AdminButton>
        </Form>
        <Link href="/">
          <BrightButton>На главную</BrightButton>
        </Link>
      </div>
    </section>
  )
}

export default AdminPage
