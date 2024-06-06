import style from '../../CSS/HomePage/Sec8-Sale.module.css'
import ProductCarousel from '../ProductCarousel'


const data = [
    {
        id:1,
        title:"Double Spice Masala Chai tea, 7.06 oz",
        desc:"Loose Leaf | 100 Cups",
        price:9.99,
        currency:"$",
        reviews:115,
        ratings:5,
        image:require("../../Assets/on_sale_product_tilex.png")
    },
    {
        id:2,
        title:"Double Spice Masala Chai tea, 7.06 oz",
        desc:"Loose Leaf | 100 Cups",
        price:9.99,
        currency:"$",
        reviews:115,
        ratings:5,
        image:require("../../Assets/on_sale_product_tilex.png")
    },
    {
        id:3,
        title:"Double Spice Masala Chai tea, 7.06 oz",
        desc:"Loose Leaf | 100 Cups",
        price:9.99,
        currency:"$",
        reviews:115,
        ratings:5,
        image:require("../../Assets/on_sale_product_tilex.png")
    },
    {
        id:4,
        title:"Double Spice Masala Chai tea, 7.06 oz",
        desc:"Loose Leaf | 100 Cups",
        price:9.99,
        currency:"$",
        reviews:115,
        ratings:5,
        image:require("../../Assets/on_sale_product_tilex.png")
    },
    {
        id:5,
        title:"Double Spice Masala Chai tea, 7.06 oz",
        desc:"Loose Leaf | 100 Cups",
        price:9.99,
        currency:"$",
        reviews:115,
        ratings:5,
        image:require("../../Assets/on_sale_product_tilex.png")
    },
    {
        id:6,
        title:"Double Spice Masala Chai tea, 7.06 oz",
        desc:"Loose Leaf | 100 Cups",
        price:9.99,
        currency:"$",
        reviews:115,
        ratings:5,
        image:require("../../Assets/on_sale_product_tilex.png")
    },
]


const Sec8Sale = () => {
  return <section id={style.Sec8Sale}>
    <p className='headingP'>Buy Before It goes</p>
    <h1 className='headingH1'>On Sale</h1>
    <div className='flex' id={style.productCarousel}>
        <ProductCarousel data={data}/>
    </div>
    <p>View All Products</p>
  </section>
}

export default Sec8Sale
