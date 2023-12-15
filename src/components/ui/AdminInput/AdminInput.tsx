import { FieldError, Input, TextField } from "react-aria-components"
import styles from "./AdminInput.module.scss"

interface AdminInputProps {
  name: string
  type: string
  placeholder: string
  defaultValue?: string
}

const AdminInput: React.FC<AdminInputProps> = ({ name, type, placeholder, defaultValue }) => {
  return (
    <TextField name={name} type={type} defaultValue={defaultValue} className={styles.input}>
      <Input placeholder={placeholder} />
      <FieldError />
    </TextField>
  )
}

export default AdminInput
