'use client'
import Link from 'next/link'
import styles from './Header.module.scss'
import HeaderButton from '../../components/ui/HeaderButton/HeaderButton'
import managerNumber from '@/constants/managerNumber'
import vkLogo from 'public/svg/vk-logo.svg'
import whatsappLogo from 'public/svg/whatsapp-logo.svg'
import telegramLogo from 'public/svg/telegram-logo.svg'
import { useState, useEffect } from 'react'
import Logo from '@/components/ui/Logo/Logo'
import Image from 'next/image'

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

  const scrollToggle = scroll ? `${styles.header} ${styles.header_scroll}` : styles.header

  return (
    <header className={scrollToggle}>
      <div className='container'>
        <div className={styles.header_wrapper}>
          <Link href='/'>logo</Link>
          <Link href='/' className={styles.header_link}>
            О студии
          </Link>
          <Link href='/' className={styles.header_link}>
            Наши работы
          </Link>
          <Link href='/' className={styles.header_link}>
            Услуги
          </Link>
          <Link href='/' className={styles.header_link}>
            Отзывы
          </Link>
          <Link href='/' className={styles.header_link}>
            Блог о съемке
          </Link>
          <Link href='/' className={styles.header_link}>
            Контакты
          </Link>
          <Link href='/' className={styles.header_link}>
            <HeaderButton>Календарь съемок</HeaderButton>
          </Link>
          <div className={styles.header_contacts}>
            <Link href='/' className={styles.header_link}>
              {managerNumber}
            </Link>
            <div className={styles.header_contacts_icons}>
              <Link href='/'>
                <Image src={whatsappLogo} alt='WhatsApp' />
              </Link>
              <Link href='/'>
                <Image src={vkLogo} alt='VKontakte' />
              </Link>
              <Link href='/'>
                <Image src={telegramLogo} alt='Telegram' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
