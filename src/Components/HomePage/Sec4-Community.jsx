import style from '../../CSS/HomePage/Sec4-Community.module.css'
import CustomerCard from '../CustomerCard'

const data = [
  {
    id:1,
    name:"Oprah Winfrey",
    image:require("../../Assets/Our Community/community_oprah_winfrey.png"),
    review:"I'm in love, I'm in love, I'm in love with a wonderful chai! Shipped directly from India."
  },
  {
    id:2,
    name:"Ellen Degeneres",
    image:require("../../Assets/Our Community/community_ellen_degeneres.jpeg"),
    review:"Repeat after me: BEST. TEA. EVER. They provide the best tea in the business. Can't beat that."
  },
  {
    id:3,
    name:"Mahria Carey",
    image:require("../../Assets/Our Community/community_mariah_carey.png"),
    review:"If you know me, you know how much I love good tea! Find your tea, dahlings!"
  }
]

const Sec4Community = () => {
  return <div id={style.Sec4Community}>
    <p className='headingP'>Our community is growing</p>
    <h1 className='headingH1'>4 million+ customers</h1>

    <div id={style.customers} className='flex'>
      {
        data?.map((e)=>{
          return <CustomerCard key={e?.id} {...e} />
        })
      }
    </div>
  </div>
}

export default Sec4Community
