import React from 'react'
import choose from './ChooseUs.module.css';
import dumble from '../../assets/images/icons/dumble.png';
import fitness from '../../assets/images/icons/fitness.png';
import cardio from '../../assets/images/icons/cardio.png';
import crossfit from '../../assets/images/icons/crossfit.png';
import dotImg from '../../assets/images/dotImg.png';


const ChooseUs = () => {
    return <>
        <section className={choose['choose-sec']}>
            <div className={choose['choose-us']}>
                <div className={choose['choose-ls']}>
                    <div className={choose['left-side']}>
                        <div className={choose['left-heading']}>
                            <h1>WHY <span className={choose['color-yellow']}>CHOOSE</span> US</h1>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliquam.
                        </p>
                    </div>
                    <div>
                        <div className={choose['numeric-details']}>
                            <div className={choose['numeric-section']}>
                                <div className={choose.num}>
                                    <p>12</p>
                                </div>
                                <p className={choose['num-detail']}>Training Programs</p>
                            </div>
                            <div className={choose['numeric-section']}>
                                <div className={choose.num}>
                                    <p>14</p>
                                </div>
                                <p className={choose['num-detail']}>Years Experience</p>
                            </div>
                        </div>
                        <div className={choose['numeric-details']}>
                            <div className={choose['numeric-section']}>
                                <div className={choose.num}>
                                    <p>357</p>
                                </div>
                                <p className={choose['num-detail']}>Happy clients</p>
                            </div>
                            <div className={choose['numeric-section']}>
                                <div className={choose.num}>
                                    <p>14</p>
                                </div>
                                <p className={choose['num-detail']}>Best Trainers</p>
                            </div>
                        </div>
                        <div className={choose['d-button']}>
                            <a className={choose['main-button']}>Register Now</a>
                        </div>
                    </div>
                </div>
                {/* <!-- "Why choose us" section (right hand side)--> */}
                <div className={choose['choose-rs']}>
                    {/* <!-- feature boxes --> */}
                    <div className={choose['choose-rs-ls']}>
                        {/* <!-- Body Building --> */}
                        <div className={choose['feature-box']}>
                            <div className={choose['feature-contt']}>
                                <div className={choose['feature-img']}>
                                    <img src={dumble} />
                                </div>
                                <div className={choose['feature-heading']}>
                                    <h2>BODY BUILDING</h2>
                                </div>
                                <p>Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit,
                                    sed do eiusmod tempor
                                    incididunt ut labore et
                                    dolore magna aliquam.
                                </p>
                            </div>
                        </div>
                        {/* <!-- fitness --> */}
                        <div className={choose['feature-box']}>
                            <div className={choose['feature-contt']}>
                                <div className={choose['feature-img']}>
                                    <img src={fitness}/>
                                </div>
                                <div className={choose['feature-heading']}>
                                    <h2>FITNESS</h2>
                                </div>
                                <p>Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit,
                                    sed do eiusmod tempor
                                    incididunt ut labore et
                                    dolore magna aliquam.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={choose['choose-rs-ls']}>
                        <div className={choose['feature-contt center-text']}>
                            <img src={dotImg}/>
                        </div>
                        {/* <!-- CROSS FIT --> */}
                        <div className={choose.crossfit}>
                            <img src={crossfit}/>
                            <h2>CROSSFIT</h2>
                        </div>
                        {/* <!-- CARDIO --> */}
                        <div className={choose['feature-box']}>
                            <div className={choose['feature-contt']}>
                                <div className={choose['feature-img']}>
                                    <img src={cardio} />
                                </div>
                                <div className={choose['feature-heading']}>
                                    <h2>CARDIO</h2>
                                </div>
                                <p>Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit,
                                    sed do eiusmod tempor
                                    incididunt ut labore et
                                    dolore magna aliquam.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
       
    </>
}
export default ChooseUs;