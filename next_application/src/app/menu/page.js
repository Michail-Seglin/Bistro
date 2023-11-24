import style from './style.module.css'

export default function Menu() {
    return (
        <>
            <div className={style.wrapper}>
                <h1>Our Menu</h1>
                <p>We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>
                <div className={style.items}>
                    <div className={style.item1}>
                        <div className={style.img}></div>
                        <h2>$ 9.99</h2>
                        <h3>Fried Eggs</h3>
                        <p>Made with eggs, lettuce, salt, oil and other ingredients.</p>
                    </div>
                    <div className={style.item2}>
                        <div className={style.img}></div>
                        <h2>$ 15.99</h2>
                        <h3>Hawaiian Pizza</h3>
                        <p>Made with eggs, lettuce, salt, oil and other ingredients.</p>
                    </div>
                    <div className={style.item3}>
                        <div className={style.img}></div>
                        <h2>$ 7.25</h2>
                        <h3>Martinez Cocktail</h3>
                        <p>Made with eggs, lettuce, salt, oil and other ingredients.</p>
                    </div>
                    <div className={style.item4}>
                        <div className={style.img}></div>
                        <h2>$ 20.99</h2>
                        <h3>Butterscotch Cake</h3>
                        <p>Made with eggs, lettuce, salt, oil and other ingredients.</p>
                    </div>
                    <div className={style.item5}>
                        <div className={style.img}></div>
                        <h2>$ 5.89</h2>
                        <h3>Mint Lemonade</h3>
                        <p>Made with eggs, lettuce, salt, oil and other ingredients.</p>
                    </div>
                    <div className={style.item6}>
                        <div className={style.img}></div>
                        <h2>$ 18.05</h2>
                        <h3>Chocolate Icecream</h3>
                        <p>Made with eggs, lettuce, salt, oil and other ingredients.</p>
                    </div>
                    <div className={style.item7}>
                        <div className={style.img}></div>
                        <h2>$ 12.55</h2>
                        <h3>Cheese Burger</h3>
                        <p>Made with eggs, lettuce, salt, oil and other ingredients.</p>
                    </div>
                    <div className={style.item8}>
                        <div className={style.img}></div>
                        <h2>$ 12.99</h2>
                        <h3>Classic Waffles</h3>
                        <p>Made with eggs, lettuce, salt, oil and other ingredients.</p>
                    </div>
                </div>
            </div>
        </>
    )
}