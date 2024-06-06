import style from '../CSS/BottomBar.module.css'

const BottomBar = () => {
  return <div id={style.BottomBar} className='flex'>
    <div className='flex'>
        <p>4 Million Customers</p>
        •
        <p>1,10,000+ 5 Star Ratings</p>
        •
        <p>Oprah's Favorite Things 2018 & 2019</p>
        •
        <p>Featured on the Elle's Sh</p>
        </div>
  </div>
}

export default BottomBar
