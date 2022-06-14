import classes from './Banner.module.css';
import prodheadimg from '../../../assets/images/products/prod-head-img.png';

const Banner = () => {
    return <>
        <section className={classes['category-header']}>
        
          
            <div className={classes['pdthead-contt']}>
                <div className={classes['categoryhead-content']}>
                    <h2>ALL NEW PROTEIN  <span>SUPPLIMENTS</span>  FOR YOUR WORKOUT
                    </h2>
                    <a className={classes['main-button']}>SHOP NOW</a>
                </div>
                <div className={classes['producthead-pic']}>
                    <img src={prodheadimg} />
                </div>
            </div>
        </section>
    </>
}
export default Banner;