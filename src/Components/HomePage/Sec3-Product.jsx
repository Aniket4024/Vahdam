import { useState } from 'react'
import style from '../../CSS/HomePage/Sec3-Product.module.css'
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


const Sec3Product = () => {

    const [active,setActive] = useState("BS")

  return <div id={style.Sec3Product}>
    <p>Discover your Favorite</p>
    <h1>Shop by Product</h1>

    <div id={style.tabs} className='flex'>
        <p className={active==="BS"?style.activeTab:style.deActiveTab} onClick={()=>setActive("BS")}>Best Sellers</p>
        <p className={active==="NEW"?style.activeTab:style.deActiveTab} onClick={()=>setActive("NEW")}>New</p>
        <p className={active==="OE"?style.activeTab:style.deActiveTab} onClick={()=>setActive("OE")}>Online Exclusive</p>
    </div>

    <div className='flex' id={style.ProductCarousel}>
        <ProductCarousel data={data}/>
    </div>

    <p>View All Products</p>
  </div>
}

export default Sec3Product
