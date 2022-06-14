import classes from './Products.module.css';
import { Link } from 'react-router-dom';
import gsWhey from '../../assets/images/products/gsWhey.png'
import spartan from '../../assets/images/products/spartan.png'
import triple from '../../assets/images/products/triple.png'
import seriousmass from '../../assets/images/products/seriousmass.png'
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from 'react';
import axios from 'axios';


const Product = (props) => {
    // const product = [
    //     {
    //         productimg: gsWhey,
    //         firstTitle: ' ON (Optimum Nutrition) Gold',
    //         secondTitle : 'Standard 100%',
    //         sale : 'Sale',
    //         actualPrice : 'Rs.4,200',
    //         delPrice : '3,800',
    //         review : '(112 Reviews)'
            
    //     },
    //     {
    //         productimg: spartan,
    //         firstTitle: 'ON (Optimum Nutrition) Gold',
    //         secondTitle : 'Standard 100%',
    //         sale : 'Sale',
    //         actualPrice : 'Rs.4,200',
    //         delPrice : '3,800',
    //         review : '(112 Reviews)'
    //     },
    //     {
    //         productimg: triple,
    //         firstTitle: 'ON (Optimum Nutrition) Gold',
    //         secondTitle : 'Standard 100%',
    //         sale : 'Sale',
    //         actualPrice : 'Rs.4,200',
    //         delPrice : '3,800',
    //         review : '(112 Reviews)'
    //     },
    //     {
    //         productimg: seriousmass,
    //         firstTitle: 'ON (Optimum Nutrition) Gold',
    //         secondTitle : 'Standard 100%',
    //         sale : 'Sale',
    //         actualPrice : 'Rs.4,200',
    //         delPrice : '3,800',
    //         review : '(112 Reviews)'
    //     },
    // ];

    const [AllPro, setAllProduct] = useState([])

    useEffect(()=>{
        async function getAllData(){
            try{
                const Products = await axios.get(`https://dev.musclebarfitness.com/api/products`, {
                    Headers: {
                    'Content-Type': 'application/json'
                    }
                    
                });
                setAllProduct(Products.data.products)
                console.log(Products.data.products)
            }
            catch(error){
                console.log(error);
            }
        }
        getAllData();
    },[])
   
    console.log(AllPro)



    return <>
        {/* our product */}
        <section className={classes['product-sec']}>
            <div className={classes['products-section margin100']}>
                <div className={classes['center-heading']}>
                    <h1>OUR <span className={classes['color-yellow']}>PRODUCTS</span></h1>
                </div>

                <div className={classes['products-box']}> 
                {/* <img  src={process.env.REACR_IMAGE_BASE_PATH + AllPro.images} /> */}

                    {
                        AllPro.length !== 0 && AllPro.map((pro,val) => {
                           
                            return (
                                <div className={classes.product}> 
                               
                                    <div className={classes['product-pic']}>
                                        <img src={process.env.REACT_APP_IMAGE_BASE_PATH + pro.images[0].path} alt="" />
                                       
                                    </div>
                                    <div className={classes['product-det']}>
                                        <div className={classes['product-name']}>
                                            <p>{pro.name}</p>
                                            <p>{pro.slug}</p>
                                        </div>
                                        <div className={classes['product-rating']}>
                                            <span><FontAwesomeIcon icon={faStar} /></span>
                                            <span><FontAwesomeIcon icon={faStar} /></span>
                                            <span><FontAwesomeIcon icon={faStar} /></span>
                                            <span><FontAwesomeIcon icon={faStar} /></span>
                                            <span><FontAwesomeIcon icon={faStarHalf} /></span>
                                            <p className={classes['review-1']}>
                                                {pro.review}
                                            </p>
                                        </div>
                                        <div className={classes['product-footer']}>
                                            <div className={classes['price']}>
                                                <p>{pro.actualPrice}
                                                    <span className={classes['dis_price']}><s>{pro.delPrice}</s></span>
                                                </p>
                                            </div>
                                            <div className={classes['sale-tag']}>
                                                <Link to="">
                                                    <p>{pro.sale}</p>
                                                </Link>
                                               
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            )
                        })
                    }


                </div>



                {/* <!-- view all product button --> */}
                <div className={classes['all-products-b']}>
                    <Link className={classes['main-button']} to="#">
                        VIEW ALL
                    </Link>
                </div>
            </div>
        </section>

    </>
}
export default Product;