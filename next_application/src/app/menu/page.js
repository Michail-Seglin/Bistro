import Image from "next/image";
import style from "./style.module.css";
import eggs from "./assets/eggs.png";
import pizza from "./assets/pizza.png";
import coctail from "./assets/coctail.png";
import cake from "./assets/cake.png";
import vine from "./assets/vine.png";
import ice from "./assets/ice.png";
import burger from "./assets/burger.png";
import cheescake from "./assets/cheescake.png";

export default function Menu() {
    const foodItem = [
        {
            img: eggs,
            alt: "eggs",
            price: "$ 9.99",
            title: "Fried Eggs",
            description: "Made with eggs, lettuce, salt, oil and other ingredients.",
        },
        {
            img: pizza,
            alt: "pizza",
            price: "$ 15.99",
            title: "Hawaiian Pizza",
            description: "Made with eggs, lettuce, salt, oil and other ingredients.",
        },
        {
            img: vine,
            alt: "vine",
            price: "$ 7.25",
            title: "Martinez Cocktail",
            description: "Made with eggs, lettuce, salt, oil and other ingredients.",
        },
        {
            img: cheescake,
            alt: "cheescake",
            price: "$ 20.99",
            title: "Butterscotch Cake",
            description: "Made with eggs, lettuce, salt, oil and other ingredients.",
        },
        {
            img: coctail,
            alt: "coctail",
            price: "$ 5.89",
            title: "Mint Lemonade",
            description: "Made with eggs, lettuce, salt, oil and other ingredients.",
        },
        {
            img: ice,
            alt: "ice",
            price: "$ 18.05",
            title: "Chocolate Icecream",
            description: "Made with eggs, lettuce, salt, oil and other ingredients.",
        },
        {
            img: burger,
            alt: "burger",
            price: "$ 12.55",
            title: "Cheese Burger",
            description: "Made with eggs, lettuce, salt, oil and other ingredients.",
        },
        {
            img: cake,
            alt: "cake",
            price: "$ 12.99",
            title: "Classic Waffles",
            description: "Made with eggs, lettuce, salt, oil and other ingredients.",
        },
    ];
    return (
        <>
            <div className={style.Container}>
                <div className={style.Wrapper}>
                    <div className={style.Title}>
                        <h1>Our Menu</h1>
                        <p>
                            We consider all the drivers of change gives you the components you need
                            to change to create a truly happens.
                        </p>
                    </div>

                    <div className={style.FoodItemsContainer}>
                        {foodItem.map((el, index) => (
                            <div className={style.FoodItemsBox} key={index}>
                                <Image src={el.img} alt={el.alt}></Image>

                                <p className={style.foodPrice}>{el.price}</p>
                                <p className={style.foodTitle}>{el.title}</p>
                                <p className={style.foodDescription}>{el.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}