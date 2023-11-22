import Link from 'next/link'
import s from './FooterDesktop.module.scss'

const FooterDesktop = () => {
  return (
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
  )
}

export default FooterDesktop
