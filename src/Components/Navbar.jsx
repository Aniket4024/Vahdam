import { useEffect, useState } from 'react';
import style from '../CSS/Navbar.module.css'

const Navbar = () => {

    const [navStyle,setNavStyle] = useState({})

    
    const listenScrollEvent = () => {
        window.scrollY > 10 ? 
        setNavStyle({
            backgroundColor:"white"
        }) 
        : 
        setNavStyle({
            // backgroundColor:"whitesmoke"
            backgroundColor:"transparent"
        });
    };

    useEffect(() => {
        // console.log(location)
        // setmenuOpen(false)

        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })

        listenScrollEvent()
        
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        }; 
    },[]);



  return <nav id={style.Navbar} style={navStyle}>
    <div className='flex'>

        <div id={style.NavLeft}>
            <img src={require("../Assets/Header/SHOP_mm_logo.png")} alt="vahdam_shop" />
        </div>

        <div id={style.NavMiddle}>
            <img src={require("../Assets/Header/Vahdam.png")} alt="vahdam-logo" />
        </div>

        <div id={style.NavRight} className='flex'>
            <img src={require("../Assets/Header/search.png")} alt="vahdam_search" />
            <img src={require("../Assets/Header/profile.png")} alt="vahdam_account" />
            <img src={require("../Assets/Header/shop.png")} alt="vahdam_shop" />
        </div>



    </div>
  </nav>
}

export default Navbar