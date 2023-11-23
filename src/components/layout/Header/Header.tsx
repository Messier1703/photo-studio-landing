import HeaderDesktop from './HeaderDesktop/HeaderDesktop'
import s from './Header.module.scss'

const Header = () => {
  return (
    <header className={s.header}>
      <div className='container'>
        <HeaderDesktop />
      </div>
    </header>
  )
}

export default Header
