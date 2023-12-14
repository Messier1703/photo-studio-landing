import styles from "./EditButton.module.scss"
import { Button } from "react-aria-components"
import EditIcon from "@/components/icons/EditIcon"

interface EditButtonProps {
  onPress?: () => void
}

const EditButton: React.FC<EditButtonProps> = ({ onPress }) => {
  return (
    <Button className={styles.button} onPress={onPress}>
      <figure>
        <EditIcon />
      </figure>
      <span>Редактировать</span>
    </Button>
  )
}

export default EditButton
