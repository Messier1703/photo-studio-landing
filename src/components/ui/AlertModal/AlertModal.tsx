'use client'
import { Button, Dialog, DialogTrigger, Heading, Modal } from 'react-aria-components'
import styles from './AlertModal.module.scss'

interface AlertModalProps {
  result: string
}

const AlertModal: React.FC<AlertModalProps> = ({ result }) => {
  return (
    <DialogTrigger>
      <Button>Open dialog</Button>
      <Modal isDismissable className={styles.modal}>
        <Dialog>
          <Heading slot='title'>{result}</Heading>
        </Dialog>
      </Modal>
    </DialogTrigger>
  )
}

export default AlertModal
