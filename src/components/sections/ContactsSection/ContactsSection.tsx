import SignUpForm from "../../ui/SignUpForm/SignUpForm"
import styles from "./ContactsSection.module.scss"
import managerNumber from "@/constants/managerNumber"
import Link from "next/link"
import vkLogo from "public/svg/vk-logo.svg"
import telegramLogo from "public/svg/telegram-logo.svg"
import whatsappLogo from "public/svg/whatsapp-logo.svg"
import Image from "next/image"

const ContactsSection = () => {
  return (
    <section className={styles.contacts} id="contacts">
      <div className="container">
        <div className={styles.contacts_wrapper}>
          <div>
            <h2 className="section_title">Контакты</h2>
            <div className={styles.contacts_info}>
              <h3>телефон</h3>
              <div>
                <Link href="/">
                  <p className={styles.contacts_number}>{managerNumber}</p>
                </Link>
                <p>Менеджер</p>
              </div>
              <h3>МЕССЕНДЖЕРЫ</h3>
              <div className={styles.contacts_info}>
                <div className={styles.contacts_icons}>
                  <Link href="/">
                    <Image src={whatsappLogo} alt="Whatsapp" />
                  </Link>
                  <Link href="/">
                    <Image src={vkLogo} alt="Vkontakte" />
                  </Link>
                  <Link href="/">
                    <Image src={telegramLogo} alt="Telegram" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <SignUpForm />
        </div>
      </div>
    </section>
  )
}

export default ContactsSection
