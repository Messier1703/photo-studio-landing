"use client"
import Link from "next/link"
import styles from "./Header.module.scss"
import HeaderButton from "../../components/ui/BurgerButton/HeaderButton/HeaderButton"
import managerNumber from "@/constants/managerNumber"
import vkLogo from "public/svg/vk-logo.svg"
import whatsappLogo from "public/svg/whatsapp-logo.svg"
import telegramLogo from "public/svg/telegram-logo.svg"
import { useState, useEffect } from "react"
import Logo from "@/components/ui/Logo/Logo"
import Image from "next/image"
import BurgerButton from "@/components/ui/BurgerButton/BurgerButton"
import BurgerMenu from "@/components/ui/BurgerMenu/BurgerMenu"

const Header = () => {
  const [scroll, setScroll] = useState(false)
  const [pastMain, setPastMain] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleScroll = () => {
    const scrollPosition = window.scrollY

    const mainSection = document.getElementById("main")

    if (mainSection && scrollPosition > mainSection.offsetTop + mainSection.offsetHeight) {
      setPastMain(true)
    } else {
      setPastMain(false)
    }

    if (scrollPosition > 20) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleScroll)

    return () => {
      window.removeEventListener("scroll", toggleScroll)
    }
  }, [])

  const scrollToggle =
    scroll || pastMain ? `${styles.header} ${styles.header_scroll} ${pastMain ? styles.header_white : ""}` : styles.header

  return (
    <header className={scrollToggle}>
      <div className="container">
        <div className={styles.header_wrapper}>
          <BurgerMenu isOpen={isMenuOpen} onClose={toggleMenu} id={styles.mobile_only} linkClass={styles.header_link} />
          <Link href="/#main">
            <Logo />
          </Link>
          <Link href="/#about" className={styles.header_link} id={styles.desktop_only}>
            О студии
          </Link>
          <Link href="/#portfolio" className={styles.header_link} id={styles.desktop_only}>
            Наши работы
          </Link>
          <Link href="/#services" className={styles.header_link} id={styles.desktop_only}>
            Услуги
          </Link>
          <Link href="/#reviews" className={styles.header_link} id={styles.desktop_only}>
            Отзывы
          </Link>
          <Link href="/blog" className={styles.header_link} id={styles.desktop_only}>
            Блог о съемке
          </Link>
          <Link href="#contacts" className={styles.header_link} id={styles.desktop_only}>
            Контакты
          </Link>
          <Link href="/calendar" className={styles.header_link} id={styles.desktop_only}>
            <HeaderButton>Календарь съемок</HeaderButton>
          </Link>
          <div className={styles.header_contacts}>
            <Link href="/" className={styles.header_link} id={styles.manager_number}>
              {managerNumber}
            </Link>
            <div className={styles.header_contacts_icons}>
              <Link href="/">
                <Image src={whatsappLogo} alt="WhatsApp" />
              </Link>
              <Link href="/">
                <Image src={vkLogo} alt="VKontakte" />
              </Link>
              <Link href="/">
                <Image src={telegramLogo} alt="Telegram" />
              </Link>
            </div>
          </div>
          <BurgerButton id={styles.mobile_only} onClick={toggleMenu} />
        </div>
      </div>
    </header>
  )
}

export default Header
