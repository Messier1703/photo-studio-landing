"use client"
import { Form } from "react-aria-components"
import ky from "ky"
import API_BASE_URL from "@/constants/API_BASE_URL"
import AdminInput from "@/components/ui/AdminInput/AdminInput"
import AdminButton from "@/components/ui/AdminButton/AdminButton"

const AdminPage = () => {
  return (
    <section>
      <div className="container">
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
      </div>
    </section>
  )
}

export default AdminPage
