import { LogoTitle } from './ui/LogoTitle'
import Link from 'next/link'
import s from './Header.module.css';

export const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.container}>
                <div className={s.wrapper}>
                    <div className={s.header__left}>
                        <LogoTitle />
                    </div>
                    <div className={s.header__right}>
                        <div className={s.linkGroup}>
                            <Link className={s.link} href="/">О компании</Link>
                            <Link className={s.link} href="/">Статьи</Link>
                            <Link className={s.link} href="/">Контакты</Link>
                        </div>
                        <a href="tel:88002008089" className={s.phoneLink}>8-800-200-8089</a>
                    </div>
                </div>
            </div>
        </header>
    )
}
