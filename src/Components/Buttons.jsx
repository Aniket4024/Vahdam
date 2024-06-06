import style from "../CSS/Button.module.css"


export const FilledButn = ({title})=>{
    return <button className={style.ShopNowButn}>
        {title}
    </button>
}