import { ReactNode } from "react"
import { MenuTrigger, Popover } from "react-aria-components"
import styles from "./UserPopover.module.scss"

interface AdminPopoverProps {
  content: ReactNode
  button: ReactNode
}

const UserPopover: React.FC<AdminPopoverProps> = ({ content, button }) => {
  return (
    <MenuTrigger>
      {button}
      <Popover className={styles.popover}>{content}</Popover>
    </MenuTrigger>
  )
}

export default UserPopover
