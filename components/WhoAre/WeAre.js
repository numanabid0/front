import React from 'react'
import classes from './WeAre.module.css';
import { Link } from 'react-router-dom';
import videoImg from '../../assets/images/videoImg.png';
import playBtn from '../../assets/images/playBtn.png';


const WeAre = () => {
    return <>

        <section className={classes.weareSec}>
            <div className={classes.wwa}>
                <div className={classes['center-heading']}>
                    <h1>WHO WE <span className={classes['color-yellow']}>ARE</span></h1>
                </div>
                <div className={classes['text-centr']}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                        gravida. Risus commodo viverra Maecenas accumsan lacus vel facilisis.
                    </p>
                </div>
            </div>
            <div className={classes['video-section margin100']}>
                <div className={classes['video-thumbnail']} id="overlay">
                    <img src={videoImg} />
                    <div className={classes['play-btn']}>
                        <img src={playBtn} />
                    </div>
                </div>
                <div className={classes['all-products-b']}>
                    <Link to="#" className={classes['main-button']}>Free Consultation</Link>
                </div>
            </div>

        </section>
    </>
}
export default WeAre;