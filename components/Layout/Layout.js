
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Layout = ({ children }) =>{
    return<>
    <div>
        <div>
            <Header />
        </div>
        <div>
            {children}
        </div>
        <div>
            <Footer/>
        </div>
    </div>
    
    </>
}
export default Layout;