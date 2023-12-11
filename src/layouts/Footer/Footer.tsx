import styles from './Footer.module.scss'
import Link from 'next/link'
import managerNumber from '@/constants/managerNumber'
import vkLogo from 'public/svg/vk-logo.svg'
import telegramLogo from 'public/svg/telegram-logo.svg'
import whatsappLogo from 'public/svg/whatsapp-logo.svg'
import Logo from '@/components/ui/Logo/Logo'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className='container'>
        <div className={styles.footer_wrapper}>
          <div>
            <Link href='/'>
              <Logo />
            </Link>
          </div>
          <div id={styles.desktop_only}>
            <Link href='/'>О нас</Link>
            <Link href='/'>Наши работы</Link>
            <Link href='/'>Услуги</Link>
            <Link href='/'>Отзывы</Link>
            <Link href='/'>Контакты</Link>
          </div>
          <div>
            <Link href='/'>Политика конфиденциальности</Link>
          </div>
          <div>
            <Link href='/' id={styles.footer_number}>
              {managerNumber}
            </Link>
            <div className={styles.footer_icons}>
              <Link href='/'>
                <Image src={whatsappLogo} alt='WhatsApp' />
              </Link>
              <Link href='/'>
                <Image src={vkLogo} alt='Vkontakte' />
              </Link>
              <Link href='/'>
                <Image src={telegramLogo} alt='Telegram' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
