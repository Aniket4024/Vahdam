import style from '../../CSS/HomePage/Sec7-Reviews.module.css'
import ReviewsCard from '../ReviewsCard'

const data = [
    {
        id:1,
        image:require("../../Assets/Reviews/1.png"),
        highlight:"Amazing Flavour",
        username:"@beextravegant",
        review:"Their teas and spices have found a permanent place in my kitchen. From fragrant chai tea blends to the vibrant Turmeric Spice, each sip and taste takes me on a journey to my homeland. ☕✨"
    },
    {
        id:2,
        image:require("../../Assets/Reviews/2.png"),
        highlight:"MY Favourite Tea",
        username:"@tarinimanchanda",
        review:"My favourite part is that you can sample any of their signature blends before making your purchase.I do recommend you go experience the brand and immerse yourself in the world of tea!"
    },
    {
        id:3,
        image:require("../../Assets/Reviews/3.png"),
        highlight:"Love it!",
        username:"@piperlandon",
        review:"VAHDAM has my heart with its incredible range of turmeric-infused herbal teas, latte powders, spices, and so much more. 💛✨ Their dedication to quality and authenticity is unmatched!"
    },

]

const Sec7Reviews = () => {
  return <section id={style.Sec7Reviews}>
    <p className='headingP'>Loved By Everyone</p>
    <h1 className='headingH1'>250,000+ Reviews (4.6/5 Stars)</h1>
    <div className='flex'>
        {
            data.map((e)=>{
                return <ReviewsCard {...e} key={e?.id} />
            })
        }
    </div>
  </section>
}

export default Sec7Reviews
