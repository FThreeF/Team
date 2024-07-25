import s from "./header.module.css"

const Header = () => {
    return(
        <div className={s.header}>
            <div className={s.wrapper}>
                <h1 className={s.title}>САЙТ КОНЦЕРТНО-ЭКСКУРСИОННЫХ ПРОГРАММ</h1>
                <nav className={s.menu}>
                    <ul className={s.list}>
                        <li className={s.item}>Афиша</li>
                        <li className={s.item}>Заказ билетов</li>
                        <li className={s.item}>Контакты</li>
                        <li className={s.item}>История дворца</li>
                        <li className={s.item}>Галерея</li>
                        <li className={s.item}>Планы залов</li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
export default Header