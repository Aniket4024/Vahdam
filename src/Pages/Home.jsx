import style from '../CSS/Home.module.css'
import BottomBar from '../Components/BottomBar'
import Sec1Hero from '../Components/HomePage/Sec1-Hero'
import Sec2Category from '../Components/HomePage/Sec2-Category'
import Sec3Product from '../Components/HomePage/Sec3-Product'
import Sec4Community from '../Components/HomePage/Sec4-Community'
import Sec5Story from '../Components/HomePage/Sec5-Story'
import Sec6Care from '../Components/HomePage/Sec6-Care'
import Sec7Reviews from '../Components/HomePage/Sec7-Reviews'
import Sec8Sale from '../Components/HomePage/Sec8-Sale'
import Sec9Instagram from '../Components/HomePage/Sec9-Instagram'

const Home = () => {
  return <div id={style.Home}>
    <Sec1Hero/>
    <Sec2Category/>
    <Sec3Product/>
    <Sec4Community/>
    <Sec5Story/>
    <Sec6Care/>
    <Sec7Reviews/>
    <Sec8Sale/>
    <Sec9Instagram/>
    <BottomBar/>
  </div>
}

export default Home
