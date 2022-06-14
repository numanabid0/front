import React from 'react'
import classes from './Pricing.module.css';
import { Link } from 'react-router-dom';

const Pricing = (props) => {

    const price = [
        {
            oldPrice: 'Registration Fee 2500',
            newPrice: 'RS 7000',
            duration: 'for 3 months',
            firstList: 'Membership Card',
            secondList: 'Quarterly Package Per Person',
            thirdList: 'Diet Plan Included',
            order: 'For Consultation'
        },
        {
            oldPrice: 'Registration Fee 2500',
            newPrice: 'RS 11500',
            duration: 'for 3 months',
            firstList: 'Membership Card',
            secondList: 'Half Yearly Package (Only Strength)',
            thirdList: 'Diet Plan Included',
            order: 'For Consultation'
        },
        {
            oldPrice: 'Registration Fee 2500',
            newPrice: 'RS 11500',
            duration: 'for 3 months',
            firstList: 'Membership Card',
            secondList: 'Half Yearly Package (Only Strength)',
            thirdList: 'Diet Plan Included',
            order: 'For Consultation'
        },
    ];

    return <>
        <section className={classes.pricingSec}>
            <div className={classes['pricing-section']}>
                <div className={classes['center-heading']}>
                    <h1>PROGRAM <span>PRICING</span></h1>
                </div>
                <div className={classes['pricing-main']}>

                    {
                        price.map((prop) => {
                            return (
                                <div className={classes['pricing-box-1']}>
                                    <div className={classes['pricing-box']}>
                                        <p className={classes['del-reg-fee']}><s>{prop.oldPrice}</s></p>
                                        <div className={classes['price-sum']}>
                                            <h3>{prop.newPrice}</h3>
                                            <p>{prop.duration}</p>
                                        </div>
                                        <div className={classes['price-facility']}>
                                            <ul className={classes['price-fac']}>
                                                <li>{prop.firstList}</li>
                                                <li>{prop.secondList}</li>
                                                <li>{prop.thirdList}</li>
                                            </ul>
                                        </div>
                                        <div className={classes['consultation-btn']}>
                                            <Link to="#" className={classes['main-button']}>{prop.order}</Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }


                </div>
            </div>
        </section>
    </>
}
export default Pricing;