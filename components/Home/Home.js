import React from 'react'
import classes from './Home.module.css';
import { Link } from 'react-router-dom';
import Product from '../Products/Product';
import ChooseUs from '../ChooseUs/ChooseUs';
import WeAre from '../WhoAre/WeAre';
import Trainer from '../Trainer/Trainer';
import Pricing from '../ProgramPricing/Pricing';
import Coching from '../Coching/Coching';
import ClientSays from '../ClientSays/ClientSays';
import {tabtitle} from '../../useDocumentTitle'
 
const Home = () => {
   
    tabtitle('Our Gym')
    
    return <>
        {/* banner */}
        <section className='banner-sec'>
            <div className={classes.header}>
                <div className={classes['head-content']}>
                    <h1>KEEP YOUR BODY</h1>
                    <h2>FIT & <span className={classes['color-yellow']}>STRONG</span></h2>
                    <p>BLACKFIT–fitness health center where your body gets its shape!</p>
                    <p>Start training now to stay fit and healthy all year round!</p>
                    <div className={classes.margin50}>
                        <Link to="#" className={classes['main-button']}> LETS TRAIN</Link>
                    </div>
                </div>
            </div>
        </section>

        <Product/>

        <ChooseUs/>

        <WeAre/>

        <Trainer />

        <Pricing/>

        <Coching/>
       
       <ClientSays/>

    </>

}
export default Home;