import style from './style.module.css'

export default function Home() {
    return (
        <>
            <div className={style.wrapper}>
                <div className={style.food}>
                    <div className={style.img}></div>
                </div>
                <div className={style.menu}>
                    <div className={style.head}>Browse Our Menu</div>
                    <div className={style.nav}>
                        <div className={style.breackfast}>
                            <div className={style.img}></div>
                            <h1>Breakfast</h1>
                            <p>In the new era of technology we look in the future with certainty and pride for our life.</p>
                            <h3>Explore Menu</h3>
                        </div>
                        <div className={style.main}>
                            <div className={style.img}></div>
                            <h1>Main Dishes</h1>
                            <p>In the new era of technology we look in the future with certainty and pride for our life.</p>
                            <h3>Explore Menu</h3>
                        </div>
                        <div className={style.drinks}>
                            <div className={style.img}></div>
                            <h1>Drinks</h1>
                            <p>In the new era of technology we look in the future with certainty and pride for our life.</p>
                            <h3>Explore Menu</h3>
                        </div>
                        <div className={style.desserts}>
                            <div className={style.img}></div>
                            <h1>Desserts</h1>
                            <p>In the new era of technology we look in the future with certainty and pride for our life.</p>
                            <h3>Explore Menu</h3>
                        </div>
                    </div>
                </div>
                <div className={style.event}>
                    <div className={style.head}>We also offer unique services for your events</div>
                    <div className={style.block}>
                        <div className={style.caterings}>
                            <div className={style.img}></div>
                            <h1>Caterings</h1>
                            <p>In the new era of technology we look in the future with certainty for life.</p>
                        </div>
                        <div className={style.birthdays}>
                            <div className={style.img}></div>
                            <h1>Birthdays</h1>
                            <p>In the new era of technology we look in the future with certainty for life.</p>
                        </div>
                        <div className={style.weddings}>
                            <div className={style.img}></div>
                            <h1>Weddings</h1>
                            <p>In the new era of technology we look in the future with certainty for life.</p>
                        </div>
                        <div className={style.events}>
                            <div className={style.img}></div>
                            <h1>Events</h1>
                            <p>In the new era of technology we look in the future with certainty for life.</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}