import style from './style.module.css'

export default function Footer() {
    return (
        <>
            <div className={style.context}>
                <div className={style.wrapper}>
                    <div className={style.info}>
                        <div className={style.icon}>
                            <div className={style.img}></div>
                            <p>Bistro Bliss</p>
                        </div>
                        <div className={style.description}>In the new era of technology we look a in the future with certainty and pride to for our company and.</div>
                    </div>
                    <div className={style.pages}>
                        <div className={style.head}>Pages</div>
                        <p>Home</p>
                        <p>About</p>
                        <p>Menu</p>
                        <p>Pricing</p>
                        <p>Blog</p>
                        <p>Contact</p>
                        <p>Delivery</p>
                    </div>
                    <div className={style.utility}>
                        <div className={style.head}>Utility Pages</div>
                        <p>Start Here</p>
                        <p>Styleguide</p>
                        <p>Password Protected</p>
                        <p>404 Not Found</p>
                        <p>Licenses</p>
                        <p>Changelog</p>
                        <p>View More</p>
                    </div>
                    <div className={style.photo}>
                        <h1>Follow Us On Instagram</h1>
                        <div className={style.picture}>
                            <div className={style.block1}>
                                <div className={style.img1}></div>
                                <div className={style.img2}></div>
                            </div>
                            <div className={style.block2}>
                                <div className={style.img3}></div>
                                <div className={style.img4}></div>
                            </div>
                        </div>
                    </div>
                </div >
                <div className={style.sign}>Copyright © 2023 Seglin Developer. All Rights Reserved</div>
            </div>
        </>
    )
}