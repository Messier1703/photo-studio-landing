import BrightButton from '@/components/ui/BrightButton/BrightButton'
import s from './HomeMain.module.scss'
import Link from 'next/link'

const HomeMain = () => {
  return (
    <main className={s.main}>
      <div className='container'>
        <h1>Создаем продающий контент для маркетплейсов</h1>
        <Link href='#'>
          <BrightButton>Узнать о фотосъемке</BrightButton>
        </Link>
      </div>
    </main>
  )
}

export default HomeMain
