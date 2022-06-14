import React from 'react'
import classes from './Trainer.module.css';
import constt1 from '../../assets/images/constt1.png';
import constt2 from '../../assets/images/constt2.png';
import constt3 from '../../assets/images/constt3.png';
import constt4 from '../../assets/images/constt4.png';
import constt5 from '../../assets/images/constt5.png';
import constt6 from '../../assets/images/constt6.png';
import constt7 from '../../assets/images/constt7.png';
import constt8 from '../../assets/images/constt8.png';
import constt9 from '../../assets/images/constt9.png';
import constt10 from '../../assets/images/constt10.png';
import constt11 from '../../assets/images/constt11.png';
import constt12 from '../../assets/images/constt12.png';


const Trainer = (props) => {

    const tariners = [
        {
            tarinerImg : constt1,
        },
        {
            tarinerImg : constt2,
        },
        {
            tarinerImg : constt3,
        },
        {
            tarinerImg : constt4,
        },
        {
            tarinerImg : constt5,
        },
        {
            tarinerImg : constt6,
        },
        {
            tarinerImg : constt7,
        },
        {
            tarinerImg : constt8,
        },
        {
            tarinerImg : constt9,
        },
        {
            tarinerImg : constt10,
        },
        {
            tarinerImg : constt11,
        },
        {
            tarinerImg : constt12,
        },
    ];

    return <>
        <section className={classes.trainerSec}>
            <div className={classes['trainer-pics margin100']}>
            <div className={classes['trainer-blk']}>

                {
                    tariners.map((prop) =>{
                        return(
                            <div className={classes['train-pics']}>
                                <img src={prop.tarinerImg} />
                            </div>
                        )
                    })
                }

               
            </div>
        </div>
        </section>
    </>
}
export default Trainer;