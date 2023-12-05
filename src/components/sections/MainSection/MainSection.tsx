import React from 'react'
import styles from './MainSection.module.scss'
import Link from 'next/link'
import BrightButton from '@/components/ui/BrightButton/BrightButton'

const MainSection = () => {
  return (
    <main className={styles.main} id='main'>
      <div className='container'>
        <div className={styles.main_wrapper}>
          <div className={styles.main_content}>
            <h1>Создаем продающий контент для маркетплейсов</h1>
            <Link href='/'>
              <BrightButton id={styles.main_button}>Узнать о фотосъемке</BrightButton>
            </Link>
          </div>
          <div className={styles.main_cards}>
            {/* <MainCard img={placeholderIMG} />
            <MainCard img={placeholderIMG} />
            <MainCard img={placeholderIMG} />
            <MainCard img={placeholderIMG} /> */}
          </div>
        </div>
      </div>
    </main>
  )
}

export default MainSection
