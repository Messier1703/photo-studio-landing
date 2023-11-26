'use client'
import BrightButton from '@/components/ui/BrightButton/BrightButton'
import { FieldError, Form, Input, Label, TextField } from 'react-aria-components'

const SignUpForm = () => {
  return (
    <Form>
      <TextField name='name' isRequired>
        <Label>Имя</Label>
        <Input />
        <FieldError />
      </TextField>
      <TextField name='phone' isRequired>
        <Label>Телефон</Label>
        <Input />
        <FieldError />
      </TextField>
      <TextField name='amount' isRequired>
        <Label>Количество артикулов?</Label>
        <Input />
        <FieldError />
      </TextField>
      <TextField name='preferences' isRequired>
        <Label>Пожелания</Label>
        <Input />
        <FieldError />
      </TextField>
      <BrightButton type='submit'>Submit</BrightButton>
    </Form>
  )
}

export default SignUpForm
