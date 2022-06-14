import Banner from '../HomePage/banner/Banner';
import React from 'react'
import {tabtitle} from '../../useDocumentTitle';
import TopProduct from './topProduct/TopProduct';

const Homepage = () =>{
   tabtitle('HomePage')
   return<>
      
        <Banner/>
        <TopProduct/>
   </>
}
export default Homepage;