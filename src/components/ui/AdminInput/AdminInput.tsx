import { FieldError, Input, Label, TextField } from "react-aria-components"

interface AdminInputProps {
  name: string
  type: string
  placeholder: string
  label: string
  defaultValue: string
}

const AdminInput: React.FC<AdminInputProps> = ({ name, type, placeholder, label, defaultValue }) => {
  return (
    <TextField name={name} type={type} defaultValue={defaultValue}>
      <Label>{label}</Label>
      <Input placeholder={placeholder} />
      <FieldError />
    </TextField>
  )
}

export default AdminInput
