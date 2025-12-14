import s from './Main.module.css'

export const Main = () => {
    return (
        <main className={s.main}>
            <div className={s.container}>
                <div className={s.wrapper}>
                    <div className={s.banner}>
                        <h1 className={s.banner_title}>Надежная <span>IT-поддержка</span> для госучреждений по всей России</h1>
                        <p className={s.banner_text}>Тех. поддержка в 1С. Помощь в ведении учёта. Решим любой ваш вопрос.</p>
                        <div className={s.buttonGroup}>
                            <button className={s.clients_button}>Клиентам</button>
                            <button className={s.employers_button}>Соискателям</button>
                        </div>
                    </div>
                    <div className={s.cardTitle_block}>
                        <h2 className={s.title}>Почему выбирают "Апогей"?</h2>
                        <p className={s.text}>Мы - лидеры в сфере поддержки 1С для госсектора</p>
                    </div>
                    <div className={s.cardsWrapper}>
                        <div className={s.cardItem}>
                            <img className={s.cardImg} src="./earth.jpg" alt="earth" />
                            <h3>Вся Россия</h3>
                            <p>Работаем с госучреждениями в 85 регионах страны, обеспечивая стабильную поддержку, независимо от местоположения</p>
                        </div>
                        <div className={s.cardItem}>
                            <img className={s.cardImg} src="./star.jpg" alt="star" />
                            <h3>15+ лет опыта</h3>
                            <p>Глубокая экспертиза в бюджетном учете и процессах госучреждений, подтвержденная многолетней практикой</p>
                        </div>
                        <div className={s.cardItem}>
                            <img className={s.cardImg} src="./people.jpg" alt="people" />
                            <h3>Более 5000 клиентов</h3>
                            <p>Нам доверяют тысячи организаций, от небольших учреждений до крупных федеральных структур</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
