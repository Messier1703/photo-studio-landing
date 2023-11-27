import s from './Footer.module.scss'
import Link from 'next/link'
import logoPath from '@/constants/logoPath'
import FixedImage from '@/lib/FixedImage'
import managerNumber from '@/constants/managerNumber'
import { FaTelegram, FaWhatsapp } from 'react-icons/fa'
import { SlSocialVkontakte } from 'react-icons/sl'

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className='container'>
        <div className={s.footer_wrapper}>
          <div>
            <Link href='#'>
              <figure className={s.footer_logo}>
                <FixedImage src={logoPath} alt='Логотип компании' id={s.footer_logo} />
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
            <Link href='#' id={s.footer_number}>
              {managerNumber}
            </Link>
            <div className={s.footer_icons}>
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
        </div>
      </div>
    </footer>
  )
}

export default Footer
