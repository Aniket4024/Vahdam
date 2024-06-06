import style from '../CSS/CustomerCard.module.css'

const CustomerCard = ({id,name,image,review}) => {
  return <div className={style.CustomerCard}>
    <div className={style.photo} style={{backgroundImage:`url(${image})`}}></div>
    <div className='flex'>
        <img src={require("../Assets/Our Community/Icon Star.png")} alt="" />
        <img src={require("../Assets/Our Community/Icon Star.png")} alt="" />
        <img src={require("../Assets/Our Community/Icon Star.png")} alt="" />
        <img src={require("../Assets/Our Community/Icon Star.png")} alt="" />
        <img src={require("../Assets/Our Community/Icon Star.png")} alt="" />
    </div>
    <p>"{review}"</p>
    <h5>{name}</h5>
  </div>
}

export default CustomerCard
