import Link from 'next/link'
import Image from 'next/image'
import s from './HeaderDesktop.module.scss'
import HeaderButton from '../HeaderButton/HeaderButton'
import { FaTelegram, FaWhatsapp } from 'react-icons/fa'
import { SlSocialVkontakte } from 'react-icons/sl'

const HeaderDesktop = () => {
  return (
    <div className={s.wrapper}>
      <Link href='/'>
        <Image src='/sample.svg' alt='Logo' width={60} height={60} />
      </Link>
      <Link href='/'>О студии</Link>
      <Link href='/'>Наши работы</Link>
      <Link href='/'>Услуги</Link>
      <Link href='/'>Отзывы</Link>
      <Link href='/'>Блог о съемке</Link>
      <Link href='/'>Контакты</Link>
      <Link href='/'>
        <HeaderButton>Календарь съемок</HeaderButton>
      </Link>
      <div className={s.contacts}>
        <Link href='/'>+7 (915) 066-33-31</Link>
        <div>
          <Link href='/' className={s.social}>
            <FaTelegram />
          </Link>
          <Link href='/' className={s.social}>
            <FaWhatsapp />
          </Link>
          <Link href='/' className={s.social}>
            <SlSocialVkontakte />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HeaderDesktop
