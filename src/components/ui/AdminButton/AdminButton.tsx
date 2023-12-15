import React from "react"
import { Button } from "react-aria-components"
import styles from "./AdminButton.module.scss"

interface AdminButtonProps {
  children: string
}

const AdminButton: React.FC<AdminButtonProps> = ({ children }) => {
  return (
    <Button type="submit" className={styles.button}>
      {children}
    </Button>
  )
}

export default AdminButton
