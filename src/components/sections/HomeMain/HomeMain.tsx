import BrightButton from '@/components/ui/BrightButton/BrightButton'
import s from './HomeMain.module.scss'
import Link from 'next/link'
import MainCard from './MainCard/MainCard'

const HomeMain = () => {
  return (
    <main className={s.main}>
      <div className='container'>
        <div className={s.wrapper}>
          <div className={s.content}>
            <h1>Создаем продающий контент для маркетплейсов</h1>
            <Link href='/'>
              <BrightButton id={s.button}>Узнать о фотосъемке</BrightButton>
            </Link>
          </div>
          <div className={s.cards}>
            <MainCard />
            <MainCard />
            <MainCard />
            <MainCard />
          </div>
        </div>
      </div>
    </main>
  )
}

export default HomeMain
