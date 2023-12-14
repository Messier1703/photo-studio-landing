import styles from "./PerksSection.module.scss"
import PerksCard from "@/components/ui/PerksCard/PerksCard"
import companyName from "@/constants/studioName"
import { IoCalendarOutline, IoCameraOutline } from "react-icons/io5"
import { PiLightning, PiCursor } from "react-icons/pi"

const PerksSection = () => {
  return (
    <section className={styles.perks} id="perks">
      <div className="container">
        <h2 className="section_title">Почему мы</h2>
        <div className={styles.perks_wrapper}>
          <div className={styles.perks_deco}>
            <article>
              <div className={styles.perks_deco_circle}>
                <div />
                <div />
                <div />
                <div />
              </div>
            </article>
            <h3>{companyName}</h3>
          </div>
          <div className={styles.perks_cards}>
            <PerksCard title="Можно присутствовать на съёмке" desc="Вы сможете приехать к нам в студию и познакомиться с нами лично!">
              <figure>
                <IoCameraOutline />
              </figure>
            </PerksCard>
            <PerksCard title="Фото за 48 часов" desc="Оперативно отдаем готовый материал на файлообменнике (облачное хранилище)">
              <figure>
                <PiLightning />
              </figure>
            </PerksCard>
            <PerksCard
              title="Опыт более 12 лет"
              desc="Более 12 лет опыта позволяет нам снимать ваши товары даже без Вашего ТЗ. Мы знаем свою работу!"
            >
              <figure>
                <IoCalendarOutline />
              </figure>
            </PerksCard>
            <PerksCard title="Создаем кликабельную инфографику" desc="Яркий дизайн который заставит купить">
              <figure>
                <PiCursor />
              </figure>
            </PerksCard>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PerksSection
