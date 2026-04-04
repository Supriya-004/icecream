import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import PageTitle from "../../components/PageTitle/PageTitle";
import BodyContainer from "../../components/BodyContainer/BodyContainer";
import ProductCard from "../../components/ProductCard/ProductCard";
import { PRODUCTS } from "../../config";

function Home() {
  return (
    <div>
      <Navbar active="home" />
      <PageTitle title={"Welcome To Our ICECREAM Shop"} subtitle={"We are the best IceCreame providers in India"}/>

      <BodyContainer>
        <div className="products-container">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </BodyContainer>

      <Footer />
    </div>
  );
}

export default Home;