import style from '../../CSS/HomePage/Sec6-Care.module.css'



const data = [
    {
        id:1,
        image:require("../../Assets/WeCare/we_care_for_LstJTR.png"),
        title:"Education our Farmers' Children",
        desc:"1% of revenue is directed towards the education of our farmers' children in India"
    },
    {
        id:2,
        image:require("../../Assets/WeCare/we_care_for_pgeJX2.png"),
        title:"Climate & Plastic Neutral®",
        desc:"We offset our entire carbon footprint via investments in renewable energy. Additionally, we recover & recycle an amount of plastic equivalent to our packaging."
    },
    {
        id:3,
        image:require("../../Assets/WeCare/we_care_for__8543uw.png"),
        title:"Certified for social and environmental performance.",
        desc:"We meets high standards of social and environmental impact."
    },
]

const Sec6Care = () => {
  return <div id={style.Sec6Care}>
    <div className='flex'>
        <div id={style.careLeft}>

        </div>
        <div id={style.careRight}>
            <p className='headingP'>We care for</p>
            <h1 className='headingH1'>You, Our Farmers & The Environment</h1>

            <div >
                {
                    data?.map((e)=>{
                        return <div className={`${style.item} flex`} key={e?.id}>
                            <img src={e?.image} alt="" />
                            <p>
                                {e?.title}
                                <br />
                                <span>
                                    {e?.desc}
                                </span>
                            </p>
                        </div>
                    })
                }
            </div>

            <div className='flex'>
                <img src={require("../../Assets/WeCare/we_care_for_teach_me.png")} alt="" />
                <img src={require("../../Assets/WeCare/we_care_for_climate_neutral.png")} alt="" />
                <img src={require("../../Assets/WeCare/we_care_for_plastic_neutral.png")} alt="" />
                <img src={require("../../Assets/WeCare/we_care_for__Isolation_certified_corporation.png")} alt="" />
            </div>
        </div>
    </div>
  </div>
}

export default Sec6Care
