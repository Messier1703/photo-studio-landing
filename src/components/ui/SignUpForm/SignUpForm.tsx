"use client"
import { useState } from "react"
import BrightButton from "@/components/ui/BrightButton/BrightButton"
import { FieldError, Form, Input, Label, TextField, Checkbox, Dialog, DialogTrigger, Heading, Modal } from "react-aria-components"
import styles from "./SignUpForm.module.scss"
import checkIcon from "public/svg/check-icon.svg"
import Image from "next/image"
import ky from "ky"
import API_BASE_URL from "@/constants/API_BASE_URL"

interface FormDataProps {
  name: string
  phone: string
  email: string
  amount: string
  preferences: string
  model: boolean
  object: boolean
  infographics: boolean
}

interface SignUpFormProps {}

const SignUpForm: React.FC<SignUpFormProps> = () => {
  const [modalMessage, setModalMessage] = useState("")
  // const [checkedBox, setCheckedBox] = useState(false)

  return (
    <Form
      className={styles.form}
      onSubmit={async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const data = {
          name: formData.get("name") as string,
          number: formData.get("number") as string,
          to_email: formData.get("to_email") as string,
          message: formData.get("message") as string,
          foto_in_model: formData.get("foto_in_model") as unknown,
          subject_photo: formData.get("subject_photo") as unknown,
          infographics: formData.get("infographics") as unknown,
        }
        const postSignUp = async () => {
          try {
            const response = await ky.post(`${API_BASE_URL}/email_visa/send-email`, { json: data, credentials: "include" })
            console.log(response)
            setModalMessage("Заявка успешно отправлена!")
            window.location.reload()
          } catch (error) {
            console.error(error)
            setModalMessage("Что-то пошло не так...")
          }
        }
        postSignUp()
      }}
    >
      <h2 className="section_title">Обсудить работу</h2>
      <TextField name="name" type="text" isRequired className={styles.form_field}>
        <Label>Имя</Label>
        <Input />
        <FieldError className={styles.form_error} />
      </TextField>
      <TextField name="number" type="text" isRequired className={styles.form_field}>
        <Label>Телефон</Label>
        <Input placeholder="(###) ####-####" />
        <FieldError className={styles.form_error} />
      </TextField>
      <TextField name="email" type="text" isRequired className={styles.form_field}>
        <Label>Email</Label>
        <Input type="email" />
        <FieldError className={styles.form_error} />
      </TextField>
      <TextField name="amount" type="text" isRequired className={styles.form_field}>
        <Label>Количество артикулов</Label>
        <Input />
        <FieldError className={styles.form_error} />
      </TextField>
      <TextField name="preferences" type="text" className={styles.form_field}>
        <Label>Пожелания</Label>
        <Input />
        <FieldError className={styles.form_error} />
      </TextField>
      <Checkbox name="model" className={styles.form_checkbox}>
        <div className={styles.form_checkbox_box}>
          <Image src={checkIcon} alt="Check" className={styles.form_checkbox_check} />
        </div>
        <Label>Фото на модели</Label>
      </Checkbox>
      <Checkbox name="object" className={styles.form_checkbox}>
        <div className={styles.form_checkbox_box}>
          <Image src={checkIcon} alt="Check" className={styles.form_checkbox_check} />
        </div>
        <Label>Предметное фото</Label>
      </Checkbox>
      <Checkbox name="infographics" className={styles.form_checkbox}>
        <div className={styles.form_checkbox_box}>
          <Image src={checkIcon} alt="Check" className={styles.form_checkbox_check} />
        </div>
        <Label>Инфографика</Label>
      </Checkbox>
      <DialogTrigger>
        <BrightButton type="submit">Обсудить работу</BrightButton>
        <Modal isDismissable>
          <Dialog className={styles.form_modal}>
            <Heading slot="title" className={styles.form_modal_title}>
              {modalMessage}
            </Heading>
            <p>Нажмите за пределами этого окна, чтобы закрыть</p>
          </Dialog>
        </Modal>
      </DialogTrigger>
    </Form>
  )
}

export default SignUpForm
