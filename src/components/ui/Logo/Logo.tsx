import companyName from '@/constants/studioName'
import styles from './Logo.module.scss'

const Logo = () => {
  return <p className={styles.logo}>{companyName}</p>
}

export default Logo
