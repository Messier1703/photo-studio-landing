import { Checkbox } from "react-aria-components"
import styles from "./CustomCheckbox.module.scss"

interface CustomCheckboxProps {
  children: string
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({ children }) => {
  return (
    <Checkbox>
      <div className={styles.checkbox}>
        <svg viewBox="0 0 18 18" aria-hidden="true">
          <polyline points="1 9 7 14 15 4" />
        </svg>
      </div>
      {children}
    </Checkbox>
  )
}

export default CustomCheckbox
