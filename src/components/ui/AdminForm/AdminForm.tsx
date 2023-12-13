import { ReactNode } from "react"
import { Button, Form } from "react-aria-components"
import styles from "./AdminForm.module.scss"

interface AdminFormProps {
  children: ReactNode
  onSubmit: (e) => void
}

const AdminForm: React.FC<AdminFormProps> = ({ children, onSubmit }) => {
  return (
    <Form className={styles.form} onSubmit={onSubmit}>
      {children}
      <Button className={styles.form_submit} type="submit">
        Обновить
      </Button>
    </Form>
  )
}

export default AdminForm
