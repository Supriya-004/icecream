import "./NotFound.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import BodyContainer from "../../components/BodyContainer/BodyContainer";


function NotFound() {
    return <div>  
       <Navbar active="notfound"/>
    <BodyContainer>
            <h1>NotFound</h1>
        </BodyContainer>
         <Footer/>
            
       
    </div>;
}

export default NotFound;