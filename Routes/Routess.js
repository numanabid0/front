import Layout from '../components/Layout/Layout';
import { render } from "react-dom";
import React from 'react';
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "../components/Home/Home";
import Homepage from '../components/HomePage/HomeComponent';



class Routess extends React.Component {
    render() {
        return (
            <Router>
                <Layout>
                    <Routes>

                       
                        <Route path="/"  exact element={<Homepage />} />
                        <Route path="/Home"  exact element={<Home />} />
                        
                    </Routes>
                </Layout>

            </Router>
        )

    }


}
export default Routess;