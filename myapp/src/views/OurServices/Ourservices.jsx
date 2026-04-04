import "./OurServices.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import BodyContainer from "../../components/BodyContainer/BodyContainer";
import PageTitle from "../../components/PageTitle/PageTitle";
import { OUR_SERVICES } from "../../config";

function OurServices() {
    return <div> 
<Navbar active="our-services"/>
<PageTitle title={"Our Service"} subtitle={"We are commited to provide best service."}/>
   
    <BodyContainer>
        <div className="service-container">
         {OUR_SERVICES.map((serviceDetail,index) => {
        return (
            <div key={index} className="service-card"> 
            {serviceDetail.Icon}
            <h2 className="service-title">{serviceDetail.title}</h2>
                <p className="service-description">{serviceDetail.description}</p>
            </div>
        );
    })}
   </div>
    </BodyContainer>
    <Footer/>
</div>;
}

export default OurServices;