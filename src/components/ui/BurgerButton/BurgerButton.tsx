'use client'
import { RiMenu3Fill } from 'react-icons/ri'
import { Button } from 'react-aria-components'
import s from './BurgerButton.module.scss'

interface BurgerButtonProps {
  id: string
  onClick: () => void
}

const BurgerButton: React.FC<BurgerButtonProps> = ({ id, onClick }) => {
  return (
    <Button className={s.button} id={id} onPress={onClick}>
      <RiMenu3Fill />
    </Button>
  )
}

export default BurgerButton
