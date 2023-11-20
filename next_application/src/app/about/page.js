import style from './style.module.css'

export default function About() {
    return (
        <>
            <section className={style.main}>
                <div className={style.wrapper}>
                    <div className={style.imgText}></div>
                    <div className={style.aboutText}>
                        <h1>We provide healthy food for your family.</h1>
                        <h2>Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in city's rich culinary culture, we aim to honor our local roots while infusing a global palate.</h2>
                        <p>At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.</p>
                    </div>
                </div>
                <div className={style.wrapper2}>
                    <div className={style.left}>
                        <h1>A little information for our valuable guest</h1>
                        <h3>At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.    </h3>
                        <div className={style.block}>
                            <div className={style.item_1}>
                                <h2>3</h2>
                                <p>Locations</p>                                </div>
                            <div className={style.item_2}>
                                <h2>1995</h2>
                                <p>Founded</p>
                            </div>
                            <div className={style.item_3}>
                                <h2>65+</h2>
                                <p>Staff Members</p>
                            </div>
                            <div className={style.item_4}>
                                <h2>100%</h2>
                                <p>Satisfied Customers</p>
                            </div>
                        </div>
                    </div>
                    <div className={style.img}></div>
                </div>



            </section>
        </>
    )
}