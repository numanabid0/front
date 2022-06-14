import classes from './TopProduct.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const TopProduct = () => {

    const [topPro, settopPro] = useState([])

    useEffect(() => {
        const getAllData = async () => {
            try {
                const topProducts = await axios.get(`http://dev.musclebarfitness.com/api/products/top?limit=8`, {
                    Headers: {
                        'Content-Type': 'application/json'
                    }

                })
                settopPro(topProducts.data.product)
                console.log(topProducts.data.product)
            }
            catch (error) {
                console.log(error)
            }
        }
        getAllData();
    }, [])


    return <>
        <div className={classes['products-section']}>
            <div className={classes['center-heading']}>
                <h1>OUR TOP <span>PRODUCTS</span></h1>
            </div>
            <div className={classes['products-box']}>
                {
                    topPro.map((pro) => {
                        return (
                            <div className={classes['product']}>
                                <div className={classes['product-pic']}>
                                    <img src={process.env.REACT_APP_IMAGE_BASE_PATH + pro.images[0].path} alt="" />
                                </div>
                                <div className={classes['product-det']}>
                                    <div className={classes['product-name']}>
                                        <h6>{pro.name}</h6>
                                        <p>{pro.slug}</p>
                                    </div>
                                    <div className={classes['product-rating']}>
                                        <span><i class="fas fa-star"></i></span>
                                        <span><i class="fas fa-star"></i></span>
                                        <span><i class="fas fa-star"></i></span>
                                        <span><i class="fas fa-star"></i></span>
                                        <span><i class="fas fa-star-half"></i></span>
                                        <p className={classes['review-1']}>
                                            (112 Reviews)
                                        </p>
                                    </div>
                                    <div className={classes['product-footer']}>
                                        <div className={classes['price']}>
                                            <p>Rs.4,200
                                                <span className={classes['dis_price']}><s>3,800</s></span>
                                            </p>
                                        </div>
                                        <div className={classes['sale-tag']}>
                                            <a href="#">
                                                <p>Sale</p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }


            </div>

            <div className={classes['all-products-b']}>
                <Link className={classes['main-button']} to="#">
                    VIEW ALL
                </Link>
            </div>
        </div>
    </>
}
export default TopProduct;