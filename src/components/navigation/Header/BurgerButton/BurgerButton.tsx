'use client'
import { RiMenu3Fill } from 'react-icons/ri'
import { Button } from 'react-aria-components'

interface BurgerButtonProps {
  className: string
}

const BurgerButton: React.FC<BurgerButtonProps> = ({ className }) => {
  return (
    <Button className={className}>
      <RiMenu3Fill />
    </Button>
  )
}

export default BurgerButton
