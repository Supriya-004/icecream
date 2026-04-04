import "./Contact.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import PageTitle from "../../components/PageTitle/PageTitle";
import BodyContainer from "../../components/BodyContainer/BodyContainer";
import { CONTACT } from "../../config";

function Contact() {
  return (
    <div>
      <Navbar active="contact" />

      <PageTitle 
        title="Contact Us"
        subtitle="We would love to hear from you 😊"
      />

      <BodyContainer>
        <div className="contact-container">
          
          <p><b>📞 Phone:</b> {CONTACT.phone}</p>
          <p><b>📧 Email:</b> {CONTACT.email}</p>
          <p><b>📍 Address:</b> {CONTACT.address}</p>

        </div>
      </BodyContainer>

      <Footer />
    </div>
  );
}

export default Contact;