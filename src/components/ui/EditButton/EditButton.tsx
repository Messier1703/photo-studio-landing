import styles from './EditButton.module.scss'
import { Button } from 'react-aria-components'
import editIcon from 'public/svg/edit-icon.svg'
import Image from 'next/image'

interface EditButtonProps {
  onPress?: () => void
}

const EditButton: React.FC<EditButtonProps> = ({ onPress }) => {
  return (
    <Button className={styles.button} onPress={onPress}>
      <figure>
        <Image src={editIcon} alt='Редактировать' />
      </figure>
      <span>Редактировать</span>
    </Button>
  )
}

export default EditButton
