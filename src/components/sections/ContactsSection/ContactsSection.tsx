import SignUpForm from '../../ui/SignUpForm/SignUpForm'
import styles from './ContactsSection.module.scss'
import managerNumber from '@/constants/managerNumber'
import { FaTelegram, FaWhatsapp } from 'react-icons/fa'
import { SlSocialVkontakte } from 'react-icons/sl'
import Link from 'next/link'

const ContactsSection = () => {
  return (
    <section className={styles.contacts} id='contacts'>
      <div className='container'>
        <div className={styles.contacts_wrapper}>
          <div>
            <h2 className='section_title'>Контакты</h2>
            <div className={styles.contacts_info}>
              <h3>телефон</h3>
              <div>
                <Link href='/'>
                  <p className={styles.contacts_number}>{managerNumber}</p>
                </Link>
                <p>Менеджер</p>
              </div>
            </div>
            <div className={styles.contacts_info}>
              <h3>МЕССЕНДЖЕРЫ</h3>
              <div className={styles.contacts_icons}>
                <Link href='/'>
                  <FaWhatsapp />
                </Link>
                <Link href='/'>
                  <FaTelegram />
                </Link>
                <Link href='/'>
                  <SlSocialVkontakte />
                </Link>
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
