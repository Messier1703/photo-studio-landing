import companyName from '@/constants/studioName'
import styles from './Logo.module.scss'

const Logo = () => {
  return <span className={styles.logo}>{companyName}</span>
}

export default Logo
