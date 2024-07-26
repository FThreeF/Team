import s from './Footer.module.css'



const Footer = () => {
  return (
    <footer className={s.footer}>
        <div className={`${s.container} container` }>
          <div className={s.contentWrap}>
            <p className={s.title}>САЙТ КОНЦЕРТНО-ЭКСКУРСИОННЫХ ПРОГРАММ</p>
            <div className={s.rightWrap}>
              <div className={s.center}>
                <p className={s.titleBlock}>Мероприятия</p>
                <ul className={s.list}>
                  <li className={s.item}>Экскурсии</li>
                  <li className={s.item}>Концерты</li>
                  <li className={s.item}>Афиша</li>
                </ul>
              </div>
              <div className={s.end}>
                <p className={s.titleBlock}>Контакты</p>
                <ul className={s.listEnd}>
                  <li className={s.item}>г.Санкт-Петербург,Невский пр.,д.1</li>
                  <li className={s.item}>text@mail. ru</li>
                  <li className={s.item}>(812) 123-45-67</li>
                </ul>
              </div>

            </div>
          </div>
          <div className={s.bottom}>Сайт ко</div>
        </div>

    </footer>
  )
}

export default Footer
