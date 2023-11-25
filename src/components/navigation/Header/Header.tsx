import Link from 'next/link'
import Image from 'next/image'
import s from './Header.module.scss'
import HeaderButton from './HeaderButton/HeaderButton'
import managerNumber from '@/lib/constants/managerNumber'
import logoPath from '@/lib/constants/logoPath'
import { FaTelegram, FaWhatsapp } from 'react-icons/fa'
import { SlSocialVkontakte } from 'react-icons/sl'
// import BurgerButton from './BurgerButton/BurgerButton'

const Header = () => {
  return (
    <header className={s.header}>
      <div className='container'>
        <div className={s.wrapper}>
          <Link href='/'>
            <figure className={s.logo}>
              <Image src={logoPath} alt='Логотип' sizes='100vw' className='img' />
            </figure>
          </Link>
          <Link href='/' id={s.desktop_only}>
            О студии
          </Link>
          <Link href='/' id={s.desktop_only}>
            Наши работы
          </Link>
          <Link href='/' id={s.desktop_only}>
            Услуги
          </Link>
          <Link href='/' id={s.desktop_only}>
            Отзывы
          </Link>
          <Link href='/' id={s.desktop_only}>
            Блог о съемке
          </Link>
          <Link href='/' id={s.desktop_only}>
            Контакты
          </Link>
          <Link href='/'>
            <HeaderButton>Календарь съемок</HeaderButton>
          </Link>
          <div>
            <Link href='/'>{managerNumber}</Link>
            <div className={s.socials}>
              <Link href='/'>
                <FaTelegram />
              </Link>
              <Link href='/'>
                <FaWhatsapp />
              </Link>
              <Link href='/'>
                <SlSocialVkontakte />
              </Link>
            </div>
          </div>
          {/* <BurgerButton className=''/> */}
        </div>
      </div>
    </header>
  )
}

export default Header
