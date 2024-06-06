import style from '../CSS/Home.module.css'
import Sec1Hero from '../Components/HomePage/Sec1-Hero'
import Sec2Category from '../Components/HomePage/Sec2-Category'
import Sec3Product from '../Components/HomePage/Sec3-Product'

const Home = () => {
  return <div id={style.Home}>
    <Sec1Hero/>
    <Sec2Category/>
    <Sec3Product/>
  </div>
}

export default Home
