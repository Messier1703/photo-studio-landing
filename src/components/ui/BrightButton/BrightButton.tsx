'use client'
import s from './BrightButton.module.scss'
import { Button } from 'react-aria-components'

interface BrightButtonProps {
  children: string
  id?: string
}

const BrightButton: React.FC<BrightButtonProps> = ({ children, id }) => {
  return (
    <Button className={s.button} id={id}>
      {children}
    </Button>
  )
}

export default BrightButton
