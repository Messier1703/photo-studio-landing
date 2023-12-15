"use client"
import { useEffect } from "react"
import styles from "./BurgerMenu.module.scss"
import Link from "next/link"
import HeaderButton from "../BurgerButton/HeaderButton/HeaderButton"

interface BurgerMenuProps {
  isOpen: boolean
  onClose: () => void
  id: string
  linkClass: string
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({ isOpen, onClose, id, linkClass }) => {
  useEffect(() => {
    const body = document.body
    if (isOpen) {
      body.classList.add("burger_menu_open")
    } else {
      body.classList.remove("burger_menu_open")
    }

    return () => {
      body.classList.remove("burger_menu_open")
    }
  }, [isOpen])

  return (
    <nav className={`${styles.burger_menu} ${isOpen ? styles.burger_menu_open : ""}`} id={id}>
      <div className={styles.burger_menu_wrapper}>
        <Link href="/#about" className={linkClass} onClick={onClose}>
          О студии
        </Link>
        <Link href="/#portfolio" className={linkClass} onClick={onClose}>
          Наши работы
        </Link>
        <Link href="/#services" className={linkClass} onClick={onClose}>
          Услуги
        </Link>
        <Link href="/#reviews" className={linkClass} onClick={onClose}>
          Отзывы
        </Link>
        <Link href="/blog" className={linkClass} onClick={onClose}>
          Блог о съемке
        </Link>
        <Link href="#contacts" className={linkClass} onClick={onClose}>
          Контакты
        </Link>
        <Link href="/calendar" className={linkClass} onClick={onClose}>
          Календарь съемок
        </Link>
        <HeaderButton onPress={() => onClose()}>Закрыть</HeaderButton>
      </div>
    </nav>
  )
}

export default BurgerMenu
