import style from "../../CSS/HomePage/Sec1-Hero.module.css"
import { FilledButn } from "../Buttons"

const Sec1Hero = () => {
  return <section id={style.Sec1Hero}>
    <div id={style.heroTop}>
        <div>
            <h1>Spring is here!</h1>
            <p>Exclusive First Flush Teas from Darjeeling</p>
            <FilledButn title={"Shop Now"}/>
        </div>
    </div>
    <div id={style.heroMiddle} className="flex">
      <div className="flex">
        <p>4 Million Customers</p>
        <p>1,10,000+ 5 Star Ratings</p>
        <p>Oprah's Favorite Things 2018 & 2019</p>
        <p>Featured on the Elle's Sh</p>
      </div>
    </div>
    <div id={style.heroBottom} className="flex">
      <div className="flex">
        <p>"The freshest teas & spices directly from source In India".</p>
        <div className="flex">
          <img src={require("../../Assets/Header/New_York_Times-removebg-preview.png")} alt="" />
          <img src={require("../../Assets/Header/Forbes-removebg-preview.png")} alt="" />
          <img src={require("../../Assets/Header/Inc.png")} alt="" />
          <img src={require("../../Assets/Header/woman's health.png")} alt="" />
        </div>
      </div>
    </div>
  </section>
}

export default Sec1Hero
