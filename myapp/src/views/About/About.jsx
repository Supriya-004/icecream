import "./About.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import PageTitle from "../../components/PageTitle/PageTitle";
import BodyContainer from "../../components/BodyContainer/BodyContainer";
import { ABOUT } from "../../config";
import { IceCream, Heart, Star } from "lucide-react";

function About() {
  return (
    <div>
      <Navbar active="about" />

      <PageTitle 
        title="About Our Ice Cream Shop 🍦"
        subtitle="Sweetness in every scoop"
      />

      <BodyContainer>
        <div className="about-container">
          {ABOUT.map((item) => {
            return (
              <div className="about-card" key={item.id}>
                <IceCream className="about-icon" />
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            );
          })}
        </div>
      </BodyContainer>

      <Footer />
    </div>
  );
}

export default About;