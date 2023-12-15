"use client"
import { ReactNode } from "react"
import s from "./BrightButton.module.scss"
import { Button } from "react-aria-components"

interface BrightButtonProps {
  children: string | ReactNode
  id?: string
  type?: "button" | "submit" | "reset" | undefined
}

const BrightButton: React.FC<BrightButtonProps> = ({ children, id, type }) => {
  return (
    <Button className={s.button} id={id} type={type}>
      {children}
    </Button>
  )
}

export default BrightButton
