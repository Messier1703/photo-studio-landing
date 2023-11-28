'use client'
import BrightButton from '@/components/ui/BrightButton/BrightButton'
import { FieldError, Form, Input, Label, TextField } from 'react-aria-components'
import s from './SignUpForm.module.scss'

const SignUpForm = () => {
  return (
    <Form className={s.form}>
      <TextField name='name' isRequired className={s.form_field}>
        <Label>Имя</Label>
        <Input />
        <FieldError />
      </TextField>
      <TextField name='phone' isRequired className={s.form_field}>
        <Label>Телефон</Label>
        <Input />
        <FieldError />
      </TextField>
      <TextField name='amount' isRequired className={s.form_field}>
        <Label>Количество артикулов</Label>
        <Input />
        <FieldError />
      </TextField>
      <TextField name='preferences' isRequired className={s.form_field}>
        <Label>Пожелания</Label>
        <Input />
        <FieldError />
      </TextField>
      <BrightButton type='submit'>Submit</BrightButton>
    </Form>
  )
}

export default SignUpForm
