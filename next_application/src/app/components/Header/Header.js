import style from './style.module.css'
import Link from 'next/link'
export default function Header() {
    return (<section>

        <div className={style.wrapper}>
            <div className={style.info}>
                <div className={style.phone}>
                    <div className={style.iconPhone}></div>
                    <h1>(033) 394 - 2423</h1>
                </div>
                <div className={style.mail}>
                    <div className={style.iconMail}></div>
                    <h1>misha_hp@tut.by</h1>
                </div>
            </div>
            <div className={style.icon}>
                <div className={style.twitter}></div>
                <div className={style.faceBook}></div>
                <div className={style.inst}></div>
                <div className={style.git}></div>
            </div>
        </div>
        <div className={style.wrapper}>
            <Link href={'/about'}>
                <h1>about</h1>
            </Link>
            <Link href={'/home'}>
                <h1>home</h1>
            </Link>
        </div>
    </section>

    )
}