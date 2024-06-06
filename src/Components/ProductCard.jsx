import style from '../CSS/ProductCard.module.css'
import { FilledButn } from './Buttons'

const ProductCard = ({id,image,ratings,reviews,title,desc,currency,price}) => {
  return <div className={style.ProductCard}>
    <img src={image} alt="" />
    <div className={`flex ${style.ratings}`}>
        <div className='flex'>
            <img src={require("../Assets/Our Community/Icon Star.png")} alt="" />
            <img src={require("../Assets/Our Community/Icon Star.png")} alt="" />
            <img src={require("../Assets/Our Community/Icon Star.png")} alt="" />
            <img src={require("../Assets/Our Community/Icon Star.png")} alt="" />
            <img src={require("../Assets/Our Community/Icon Star.png")} alt="" />
        </div>
        <p> {reviews} Reviews</p>
    </div>
    <h3>{title}</h3>
    <p>{desc}</p>
    <p>{currency} {price}</p>
    <br />
    <FilledButn title={"Add To Cart"}/>
  </div>
}

export default ProductCard
