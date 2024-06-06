import style from '../../CSS/HomePage/Sec9-Instagram.module.css'

const Sec9Instagram = () => {
  return <section id={style.Sec9Instagram}>
    <p  className='headingP'>Follow us on</p>
    <h1 className='headingH1'>Instagram</h1>

    <div className='flex'>
        <img src={require("../../Assets/cup-with-tea-mint.jpg")} alt="" />
        <img src={require("../../Assets/cup-with-tea-mint.jpg")} alt="" />
        <img src={require("../../Assets/cup-with-tea-mint.jpg")} alt="" />
        <img src={require("../../Assets/cup-with-tea-mint.jpg")} alt="" />
        <img src={require("../../Assets/cup-with-tea-mint.jpg")} alt="" />
        <img src={require("../../Assets/cup-with-tea-mint.jpg")} alt="" />
    </div>
  </section>
}

export default Sec9Instagram
