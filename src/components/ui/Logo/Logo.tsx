import companyName from "@/constants/studioName"
import styles from "./Logo.module.scss"
import localFont from "next/font/local"

const ephesis = localFont({ src: "../../../fonts/Ephesis-Regular.ttf" })

const Logo = () => {
  return (
    <p style={ephesis.style} className={styles.logo}>
      {companyName}
    </p>
  )
}

export default Logo
