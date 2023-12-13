"use client"
import { Button, FieldError, Form, Input, Label, TextField } from "react-aria-components"
import ky from "ky"
import API_BASE_URL from "@/constants/API_BASE_URL"

const LoginPage = () => {
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
              } catch (error) {
                console.error(error)
              }
            }
            postLogin()
            console.log(data)
          }}
        >
          <TextField name="email" type="email" isRequired>
            <Label>Email</Label>
            <Input />
            <FieldError />
          </TextField>
          <TextField name="password" type="password" isRequired>
            <Label>Password</Label>
            <Input />
            <FieldError />
          </TextField>
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    </section>
  )
}

export default LoginPage
