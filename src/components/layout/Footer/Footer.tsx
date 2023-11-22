import s from './Footer.module.scss'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className='container'>
        <div className={s.wrapper}>
          <div>
            <Link href='#'>
              <Image src='/sample.svg' alt='Logo' width={100} height={100} />
            </Link>
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
