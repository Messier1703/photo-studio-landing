import s from './Footer.module.scss'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className='container'>
        <div className={s.wrapper}>
          <div>
            <Link href='#'>logo</Link>
          </div>
          <div>
            <Link href='#'>link</Link>
            <Link href='#'>link</Link>
            <Link href='#'>link</Link>
            <Link href='#'>link</Link>
            <Link href='#'>link</Link>
          </div>
          <div>
            <Link href='#'>link</Link>
          </div>
          <div>
            <Link href='#'>link</Link>
            <div>
              <Link href='#'>link</Link>
              <Link href='#'>link</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
