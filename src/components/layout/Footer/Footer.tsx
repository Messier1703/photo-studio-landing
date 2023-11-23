import s from './Footer.module.scss'
import FooterDesktop from './FooterDesktop/FooterDesktop'

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className='container'>
        <FooterDesktop />
      </div>
    </footer>
  )
}

export default Footer
