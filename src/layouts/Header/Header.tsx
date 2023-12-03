'use client'
import Link from 'next/link'
import s from './Header.module.scss'
import HeaderButton from './HeaderButton/HeaderButton'
import managerNumber from '@/constants/managerNumber'
import logoPath from '@/constants/logoPath'
import { FaTelegram, FaWhatsapp } from 'react-icons/fa'
import { SlSocialVkontakte } from 'react-icons/sl'
import FixedImage from '@/lib/FixedImage'
import BurgerButton from './BurgerButton/BurgerButton'
import { useState, useEffect } from 'react'

const Header = () => {
  const [scroll, setScroll] = useState(false)

  const toggleScroll = () => {
    if (window.scrollY > 20) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleScroll)

    return () => {
      window.removeEventListener('scroll', toggleScroll)
    }
  }, [])

  const color = scroll ? `${s.header} ${s.header_scroll}` : s.header

  return (
    <header className={color}>
      <div className='container'>
        <div className={s.wrapper}>
          <Link href='/#main'>
            <FixedImage src={logoPath} alt='Логотип' id={s.header_logo} />
          </Link>
          <Link href='#about-us' id={s.desktop_only}>
            О студии
          </Link>
          <Link href='#portfolio' id={s.desktop_only}>
            Наши работы
          </Link>
          <Link href='/#services' id={s.desktop_only}>
            Услуги
          </Link>
          <Link href='/#reviews' id={s.desktop_only}>
            Отзывы
          </Link>
          <Link href='/blog' id={s.desktop_only}>
            Блог о съемке
          </Link>
          <Link href='/#contacts' id={s.desktop_only}>
            Контакты
          </Link>
          <div className={s.header_button}>
            <Link href='/' id={s.mobile_only} className={s.header_number}>
              {managerNumber}
            </Link>
            <Link href='/'>
              <HeaderButton>Календарь съемок</HeaderButton>
            </Link>
          </div>
          <div className={s.header_contacts}>
            <Link href='/' id={s.desktop_only} className={s.header_number}>
              {managerNumber}
            </Link>
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
          <BurgerButton id={s.mobile_only} />
        </div>
      </div>
    </header>
  )
}

export default Header
