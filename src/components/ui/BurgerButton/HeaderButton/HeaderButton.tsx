"use client"
import { Button } from "react-aria-components"
import s from "./HeaderButton.module.scss"

interface HeaderButtonProps {
  children: string
  onPress?: () => void
}

const HeaderButton: React.FC<HeaderButtonProps> = ({ children, onPress }) => {
  return (
    <Button className={s.button} onPress={onPress}>
      {children}
    </Button>
  )
}

export default HeaderButton
