import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";



const LayOut = () => {
    return (
        <div className="max-w-6xl mx-auto">
             <Header></Header>
             <Outlet></Outlet>
             <Footer></Footer>
        </div>
    );
};

export default LayOut;