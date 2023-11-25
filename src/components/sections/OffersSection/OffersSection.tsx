import BrightButton from '@/components/ui/BrightButton/BrightButton'
import s from './OffersSection.module.scss'

const OffersSection = () => {
  return (
    <section className={s.offers}>
      <div className='container'>
        <div className={s.pricing}>
          <h2>Услуги</h2>
          <div className={s.content}>
            <div className={s.pricing}>
              <div>
                <h4>lorem</h4>
                <p>ipsum bla bla bla bla</p>
              </div>
              <div>
                <h4>lorem</h4>
                <p>ipsum bla bla bla bla</p>
              </div>
              <div>
                <h4>lorereefvbergerger</h4>
                <p>ipsum bla bla bla bla</p>
              </div>
            </div>
            <div className={s.sign_up}>
              <h3>Съемка на модели</h3>
              <p>Фотосъемка товаров на моделях продающего типажа</p>
              <BrightButton>Записаться на съемку</BrightButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OffersSection
