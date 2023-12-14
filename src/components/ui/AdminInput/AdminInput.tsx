import { FieldError, Input, TextField } from "react-aria-components"

interface AdminInputProps {
  name: string
  type: string
  placeholder: string
  defaultValue?: string
}

const AdminInput: React.FC<AdminInputProps> = ({ name, type, placeholder, defaultValue }) => {
  return (
    <TextField name={name} type={type} defaultValue={defaultValue}>
      <Input placeholder={placeholder} />
      <FieldError />
    </TextField>
  )
}

export default AdminInput
