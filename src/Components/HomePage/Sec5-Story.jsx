import style from '../../CSS/HomePage/Sec5-Story.module.css'
import { FilledButn } from '../Buttons'

const Sec5Story = () => {
  return <section id={style.Sec5Story}>
    <div className='flex'>
        <div id={style.storyLeft}>
            <p className='headingP'>A Legacy of 90 years</p>
            <h1 className='headingH1'>Our Story</h1>

            <p>
                I started VAHDAM® India with a vision to make available India's
                finest teas, spices & herbs - sourced direct from farmers, packaged
                fresh at origin and delivered to consumers globally without
                unnecessary middlemen. A process which helps retain value at
                source and ensures farmers get a better price for their produce in
                the long run.
                <br />
                <span>
                    And just in case you were wondering, VAHDAM is the reverse
                    anagram of my father's first name 'MADHAV'.
                </span>
            </p>
            <FilledButn title={"Read Our Entire story"}/>
        </div>
        <div id={style.storyRight} className='flex'>
            <img src={require("../../Assets/Our Story/our_story_bala.png")} alt="" />
            <div>
                <img src={require("../../Assets/Our Story/our_story_sign.png")} alt="" />
                <img src={require("../../Assets/Our Story/Bala Sarda Founder, VAHDAM® India 4th Generation Entrepreneur.png")} alt="" />
            </div>
        </div>
    </div>
  </section>
}

export default Sec5Story
