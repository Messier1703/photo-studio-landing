"use client"
import { ReactNode, useEffect } from "react"
import { MenuTrigger, Popover } from "react-aria-components"
import styles from "./StyledPopover.module.scss"
import { useAuth } from "@/lib/AuthContext"

interface AdminPopoverProps {
  content: ReactNode
  button: ReactNode
}

const StyledPopover: React.FC<AdminPopoverProps> = ({ content, button }) => {
  const { isAuthenticated, refreshToken } = useAuth()

  useEffect(() => {
    refreshToken()
  }, [refreshToken])

  return isAuthenticated ? (
    <MenuTrigger>
      {button}
      <Popover className={styles.popover}>{content}</Popover>
    </MenuTrigger>
  ) : null
}

export default StyledPopover
