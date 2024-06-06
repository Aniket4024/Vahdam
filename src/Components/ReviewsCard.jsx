import style from '../CSS/ReviewsCard.module.css'
import { FaCirclePlayIcon } from './Icons'

const ReviewsCard = ({id,image,highlight,review,username}) => {
  return <div className={style.ReviewsCard}>
    <div style={{backgroundImage:`url(${image})`}} className='flex'>
      <FaCirclePlayIcon/>
    </div>

    <p className={style.highlight}>{highlight}</p>
    <p className={style.username}>{username}</p>
    <p className={style.review}>"{review}"</p>
  </div>
}

export default ReviewsCard
