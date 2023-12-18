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

  const [formData, setFormData] = useState<FormDataProps>({
    name: "",
    phone: "",
    email: "",
    amount: "",
    preferences: "",
    model: false,
    object: false,
    infographics: false,
  })

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    try {
      const response = await ky
        .post(`${API_BASE_URL}/email_visa/send-email/`, {
          json: {
            name: formData.name,
            number: formData.phone,
            to_email: formData.email,
            message: formData.preferences,
            foto_in_model: formData.model,
            subject_photo: formData.object,
            infographics: formData.infographics,
          },
        })
        .json()

      console.log("Email sent successfully:", response)
      setModalMessage("Заявка успешно отправлена!")
    } catch (error) {
      console.error("Error sending email:", error)
      setModalMessage("Что-то пошло не так...")
    }
  }

  const handleCheckboxChange = (name: keyof FormDataProps) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: !prevFormData[name],
    }))
  }

  return (
    <Form className={styles.form} onSubmit={handleSubmit}>
      <h2 className="section_title">Обсудить работу</h2>
      <TextField name="name" isRequired className={styles.form_field}>
        <Label>Имя</Label>
        <Input value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
        <FieldError className={styles.form_error} />
      </TextField>
      <TextField name="phone" isRequired className={styles.form_field}>
        <Label>Телефон</Label>
        <Input value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="(###) ####-####" />
        <FieldError className={styles.form_error} />
      </TextField>
      <TextField name="email" isRequired className={styles.form_field}>
        <Label>Email</Label>
        <Input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
        <FieldError className={styles.form_error} />
      </TextField>
      <TextField name="amount" isRequired className={styles.form_field}>
        <Label>Количество артикулов</Label>
        <Input value={formData.amount} onChange={(e) => setFormData({ ...formData, amount: e.target.value })} />
        <FieldError className={styles.form_error} />
      </TextField>
      <TextField name="preferences" className={styles.form_field}>
        <Label>Пожелания</Label>
        <Input value={formData.preferences} onChange={(e) => setFormData({ ...formData, preferences: e.target.value })} />
        <FieldError className={styles.form_error} />
      </TextField>
      <Checkbox name="model" className={styles.form_checkbox} isSelected={formData.model} onChange={() => handleCheckboxChange("model")}>
        <div className={styles.form_checkbox_box}>
          <Image src={checkIcon} alt="Check" className={styles.form_checkbox_check} />
        </div>
        <Label>Фото на модели</Label>
      </Checkbox>
      <Checkbox name="object" className={styles.form_checkbox} isSelected={formData.object} onChange={() => handleCheckboxChange("object")}>
        <div className={styles.form_checkbox_box}>
          <Image src={checkIcon} alt="Check" className={styles.form_checkbox_check} />
        </div>
        <Label>Предметное фото</Label>
      </Checkbox>
      <Checkbox
        name="infographics"
        className={styles.form_checkbox}
        isSelected={formData.infographics}
        onChange={() => handleCheckboxChange("infographics")}
      >
        <div className={styles.form_checkbox_box}>
          <Image src={checkIcon} alt="Check" className={styles.form_checkbox_check} />
        </div>
        <Label>Инфографика</Label>
      </Checkbox>
      <DialogTrigger>
        <div className={styles.form_button}>
          <BrightButton type="submit">Обсудить работу</BrightButton>
        </div>
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
