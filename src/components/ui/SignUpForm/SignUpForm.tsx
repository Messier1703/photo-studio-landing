'use client'
import React from 'react'
import BrightButton from '@/components/ui/BrightButton/BrightButton'
import { FieldError, Form, Input, Label, TextField, Checkbox } from 'react-aria-components'
import s from './SignUpForm.module.scss'

const SignUpForm = () => {
  return (
    <Form className={s.form}>
      <h2 className='section_title'>Обсудить работу</h2>
      <TextField name='name' isRequired className={s.form_field}>
        <Label>Имя</Label>
        <Input />
        <FieldError />
      </TextField>
      <TextField name='phone' isRequired className={s.form_field}>
        <Label>Телефон</Label>
        <Input placeholder='(###) ####-####' />
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
      <Checkbox name='checkbox1' className={s.form_field}>
        <Label>Опция 1</Label>
      </Checkbox>
      <Checkbox name='checkbox2' className={s.form_field}>
        <Label>Опция 2</Label>
      </Checkbox>
      <Checkbox name='checkbox3' className={s.form_field}>
        <Label>Опция 3</Label>
      </Checkbox>
      <BrightButton type='submit'>Submit</BrightButton>
    </Form>
  )
}

export default SignUpForm
