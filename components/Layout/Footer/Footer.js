import React from 'react'
import classes from './Footer.module.css';
import logo from '../../../assets/images/logo.png';
import footimg1 from '../../../assets/images/footimg1.png';
import footimg2 from '../../../assets/images/footimg2.png';
import footimg3 from '../../../assets/images/footimg3.png';
import footimg4 from '../../../assets/images/footimg4.png';
import footimg5 from '../../../assets/images/footimg5.png';
import footimg6 from '../../../assets/images/footimg6.png';
import footimg7 from '../../../assets/images/footimg7.png';
import footimg8 from '../../../assets/images/footimg8.png';
import footimg9 from '../../../assets/images/footimg9.png';
import { Link } from 'react-router-dom';


const Footer = () => {

    const data = [
        {
            footimg : footimg1,
        },
        {
            footimg : footimg2,
        },
        {
            footimg :footimg3,
        },
        {
            footimg : footimg4,
        },
        {
            footimg : footimg5,
        },
        {
            footimg : footimg6,
        },
        {
            footimg : footimg7,
        },
        {
            footimg : footimg8,
        },
        {
            footimg : footimg9
        },
    ];

    return <>
        <footer className={classes['footer-section']}>
            <div className={classes['footer-logo']}>
                <img src={logo}/>
            </div>
            {/* <!-- Footer left-section--> */}
            <div className={classes['footer-main']}>
                <div className={classes.footer1}>
                    <div className={classes['foot-contt']}>
                        <h4>Address:</h4>
                        <p>Faisal Ghuman Rd, N B Villas, Lahore</p>
                        <p>Punjab 54800</p>
                    </div>
                    <div className={classes['foot-contt']}>
                        <h4> Phones:</h4>
                        <p>+92301 1114567</p>
                    </div>
                    <div className={classes['foot-contt']}>
                        <h4>Email:</h4>
                        <p>support@musclebarfitness.com</p>
                    </div>
                </div>
                {/* <!-- Footer middle-section--> */}
                <div className={classes.footer1}>
                    <div className={classes['foot-contt']}>
                        <h4> INSTAGRAM:</h4>
                        <div className={classes['footer-imagesblk']}>
                            {
                                data.map((prop =>{
                                    return(
                                        <div className={classes['foot-img']}>
                                            <img src={prop.footimg} />
                                        </div>
                                    )
                                }))
                            }
                           
                        </div>
                    </div>
                </div>
                {/* <!-- Footer right-section--> */}
                <div className={classes['footer2']}>
                    <div className={classes['thrd-foot foot-contt']}>
                        <div className={classes['flex-jst']}>
                            <div>
                                <h4>WORKING HOURS:</h4>
                                <div className={classes['wh-contt']}>
                                    <p>Gents : 5AM To 9AM</p>
                                    <p>Ladies : 9AM To 4PM</p>
                                    <p>Combine : 4PM To 11PM</p>
                                </div>
                            </div>
                            <div className={classes.width35}>
                                <h4>SOCIAL LINKS:</h4>
                                <div className={classes['social-icns']}>
                                    <div className={classes['soc-icn']}>
                                        <Link to="#">
                                            <i className="fab fa-facebook-f"></i>
                                        </Link>
                                        
                                    </div>
                                    <div className={classes['soc-icn']}>
                                        <Link to="#">
                                        <i className="fab fa-twitter"></i>
                                        </Link>
                                        
                                    </div>
                                    <div className={classes['soc-icn']}>
                                        <Link to="#">
                                        <i className="fab fa-instagram"></i>
                                        </Link>
                                        
                                    </div>
                                    <div className={classes['soc-icn']}>
                                        <Link to="#">
                                        <i className="fab fa-linkedin-in"></i>
                                        </Link>
                                        
                                    </div>
                                    <div className={classes['soc-icn']}>
                                        <Link to="#">
                                        <i className="fab fa-youtube"></i>
                                        </Link>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className={classes['foot-contt']}>
                                <h4>NEWSLETTER</h4>
                                <form>
                                    <div className={classes['nl-main']}>
                                        <div className={classes['nl-email']}>
                                            <input type="email" placeholder="Enter Your Email" />
                                        </div>
                                        <div className={classes['nl-submit']}>
                                            <input type="submit" placeholder="Enter Your Email" value="SUBMIT" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Copyright section --> */}
            <div className={classes['copy-rite']}>
                <p>© MUSCLE BAR GYM. CRAFTED BY CODEX TECHNOLOGIE</p>
            </div>
        </footer>
    </>
}
export default Footer;