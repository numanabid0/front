import React from 'react'
import classes from './Coching.module.css';
import Sohaibkhan from '../../assets/images/coaches/Sohaibkhan.png';
import Kaleemshah from '../../assets/images/coaches/Kaleemshah.png';
import Fizaalamgir from '../../assets/images/coaches/Fizaalamgir.png';
import Alishbarao from '../../assets/images/coaches/Alishbarao.png';

const Coching = (props) => {

    const coch = [
        {
            cochImg: Sohaibkhan,
            cochName: 'SOHAIB KHAN',
            category: 'GYM TRAINER'
        },
        {
            cochImg: Kaleemshah,
            cochName: 'KALEEM SHAH',
            category: 'GYM TRAINER'
        },
        {
            cochImg: Fizaalamgir,
            cochName: 'FIZA ALAMGIR',
            category: 'GYM TRAINER'
        },
        {
            cochImg: Alishbarao,
            cochName: 'ALISHBA RAO',
            category: 'GYM TRAINER'
        },
    ];

    return <>
        <section className={classes.cochingSec}>
            <div className={classes['Our-coaches']}>
                <div className={classes['center-heading']}>
                    <h1>Our <span className={classes['color-yellow']}>Coaches</span></h1>
                </div>
                <div className={classes['text-centr']}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>

                <div className={classes['coach-blk']}>

                    {
                        coch.map((prop) => {
                            return (
                                <div className={classes['coach-contt']}>
                                    <div className={classes['coach-pic']}>
                                        <img src={prop.cochImg} />
                                    </div>
                                    <div>
                                        <p className={classes['coach-name']}>{prop.cochName}</p>
                                        <p className={classes['coach-title']}>{prop.category}</p>
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
export default Coching;