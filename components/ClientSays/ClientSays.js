import React from 'react'
import classes from './ClientSays.module.css';
import clients from '../../assets/images/clients/clients.png';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const ClientSays = () => {
    return <>
        <section className={classes.clientSec}>
            <div className={classes['test-blk']}>
                <div className={classes['center-heading']}>
                    <h1>WHAT OUR <span className={classes['color-yellow']}>CLIENTS SAY</span></h1>
                </div>
                <div className={classes['test-contt']}>
                    <div className={classes['client-pic']}>
                        <img src={clients} />
                    </div>
                    <div className={classes['client-content']}>
                        <p>
                            "It is a long established fact that a reader will be
                            distracted by the readable content of a page
                            when looking at its layout. The point of using Lorem
                            Ipsum is that it has a more-or-less normal
                            distribution of letters, as opposed to using 'Content
                            here, content here', making it look like readable English".
                        </p>
                        <div className={classes['client-d']}>
                            <p className={classes['client-name']}>AHMED NADEEM JSL</p>
                            <p>Respectful Client</p>
                        </div>
                        <Box width={300}>

                            <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
                        </Box>
                    </div>
                </div>
            </div>
        </section>
    </>
}
export default ClientSays;