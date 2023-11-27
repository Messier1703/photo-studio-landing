import Link from 'next/link'
import Image from 'next/image'
import s from './FooterDesktop.module.scss'
import logoPath from '@/constants/logoPath'

const FooterDesktop = () => {
  return (
    <div className={s.wrapper}>
      <div>
        <Link href='#'>
          <figure className={s.footer_logo}>
            <Image src={logoPath} alt='Logo' />
          </figure>
        </Link>
      </div>
      <div>
        <Link href='#'>О нас</Link>
        <Link href='#'>Наши работы</Link>
        <Link href='#'>Услуги</Link>
        <Link href='#'>Отзывы</Link>
        <Link href='#'>Контакты</Link>
      </div>
      <div>
        <Link href='#'>Политика конфиденциальности</Link>
      </div>
      <div>
        <Link href='#'>+79150663331</Link>
        <div className={s.icons}>
          <Link href='#'>
            <Image src='/telegram-logo.svg' alt='Telegram' width={45} height={45} />
          </Link>
          <Link href='#'>
            <Image src='/whatsapp-logo.svg' alt='WhatsApp' width={45} height={45} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FooterDesktop
