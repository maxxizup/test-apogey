import Link from "next/link";
import s from "./Footer.module.css";

export const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={s.container}>
                <div className={s.wrapper}>
                    <div className={s.footer_left}>
                        <div className={s.copyright}>2025© Компания “Апогей”</div>
                    </div>
                    <div className={s.footer_right}>
                        <div className={s.footerLinks}>
                            <Link href="/" className={s.link}>О нас</Link>
                            <Link href="/" className={s.link}>Политика конфиденциальности</Link>
                            <Link href="/" className={s.link}>Пользовательское соглашение</Link>
                        </div>
                        <div className={s.contacts}>
                            <a href="mailto:info@apogey.ru" className={s.contactMail}>info@apogey.ru</a>
                            <a href="tel:88002008089" className={s.contactPhone}>8-800-200-8089</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
