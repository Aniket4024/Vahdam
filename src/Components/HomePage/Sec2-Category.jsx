import style from '../../CSS/HomePage/Sec2-Category.module.css'

const data = [
    {
        id:1,
        image:require("../../Assets/Category/shop_by_category_teas.jpeg"),
        title:"Teas"
    },
    {
        id:2,
        image:require("../../Assets/Category/shop_by_category_spices.jpeg"),
        title:"Spices"
    },
    {
        id:3,
        image:require("../../Assets/Category/shop_by_category_gifts.jpeg"),
        title:"Gifts"
    },
]

const Sec2Category = () => {
  return <section id={style.Sec2Category}>
    <p>Something For Everyone</p>
    <h1>Shop by Category</h1>

    <div className='flex' id={style.categoryBoxes}>
        {
            data?.map((e)=>{
                return <div key={e?.id} className={style.CategoryBox}>
                    <div style={{backgroundImage:`url(${e?.image})`}}>

                    </div>
                    <p>{e?.title}</p>
                </div>
            })
        }
    </div>
  </section>
}

export default Sec2Category
