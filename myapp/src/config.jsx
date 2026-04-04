import Img1 from "./assets/ice1.png";
import Img2 from "./assets/ice2.png";
import Img3 from "./assets/ice3.png";
import Img4 from "./assets/ice4.png";
import Img5 from "./assets/ice5.png";
import Img6 from "./assets/ice6.png";
import Img7 from "./assets/ice7.png";

import {UtensilsCrossed,Cuboid,Truck,ChefHat} from "lucide-react";

const PRODUCTS=[
  {
    id:1,
    title:"Icecreame Sandwich",
    price:40,
    description:"A delicious ice cream sandwich made with two soft cookies and a generous scoop of creamy ice cream in between. Perfect for satisfying your sweet tooth and cooling down on a hot day.",
    image:Img1
},

{
  id:2,
  title:"Chocolate Icecream",
  price:50,
  description:"Indulge in the rich and creamy delight of chocolate ice cream, made with high-quality cocoa and a velvety texture that melts in your mouth. Perfect for chocolate lovers seeking a sweet treat.",
  image:Img2

},

{
  id:3,
  title:"Vanilla Icecream",
  price:45,
  description:"Experience the classic and timeless flavor of vanilla ice cream, crafted with real vanilla beans for a smooth and creamy taste that is both comforting and delicious. Perfect for any occasion.",
  image:Img3
},
{
  id:4,
  title:"Strawberry Icecream",
  price:50,
  description:"Savor the sweet and fruity flavor of strawberry ice cream, made with fresh strawberries and a creamy base for a refreshing and delightful treat. Perfect for those who love the taste of summer.",
  image:Img4
},

{
  id:5,
  title:"Mint Chocolate Chip Icecream",
  price:55,
  description:"Enjoy the refreshing combination of mint and chocolate with our mint chocolate chip ice cream, made with a creamy mint base and loaded with rich chocolate chips for a perfect balance of flavors. Perfect for mint lovers.",
  image:Img5
},
{
  id:6,
  title:"Cookie Dough Icecream",
  price:60,
  description:"Indulge in the irresistible combination of creamy ice cream and chunks of cookie dough with our cookie dough ice cream, made with a rich vanilla base and loaded with delicious cookie dough pieces for a sweet and satisfying treat. Perfect for cookie lovers.",
  image:Img6
},
{
  id:7,
  title:"Pistachio Icecream",
  price:55,
  description:"Savor the rich and nutty flavor of pistachio ice cream, made with real pistachio nuts and a creamy base for a luxurious and indulgent treat. Perfect for those who love the taste of nuts.",
  image:Img7
},
];

const OUR_SERVICES=[
{
 id:1,
    title:"Dine-In",
    description:
    "Enjoy our delicious ice cream in a cozy and welcoming atmosphere at our shop. Our dine-in service offers a comfortable space to relax and savor your favorite flavors with friends and family.",
    Icon: <UtensilsCrossed height={"70px"} width={"70px"} />,
},

{
    id:2,
    title:"Takeaway",
    description:
    "Craving our delicious ice cream on the go? Our takeaway service allows you to conveniently order and enjoy our delectable flavors wherever you are. Perfect for a quick treat or a sweet indulgence on the move.",
    Icon: <Cuboid height={"70px"} width={"70px"} />,
},

{
    id:3,
    title:"Home Delivery",
    description:
    "Experience the convenience of our home delivery service, bringing our delicious ice cream right to your doorstep. Perfect for those who want to enjoy our delectable flavors from the comfort of their own home.",
    Icon: <Truck height={"70px"} width={"70px"} />,
},

{
    id:4,
    title:"Catering",
    description:
    "Make your special events even sweeter with our catering service, offering a variety of our delicious ice cream flavors to delight your guests. Perfect for parties, weddings, and corporate events.",
    Icon: <ChefHat height={"70px"} width={"70px"} />,
}
];
export {PRODUCTS , OUR_SERVICES};

export const CONTACT = {
  phone: "+91 9876543210",
  email: "icecreamshop@gmail.com",
  address: "Sangamner, Maharashtra",
};

export const ABOUT = [
  {
    id: 1,
    title: "Who We Are",
    description:
      "We are passionate about making delicious ice creams with love and high-quality ingredients."
  },
  {
    id: 2,
    title: "Our Mission",
    description:
      "To deliver happiness through every scoop and maintain top quality in every product."
  },
  {
    id: 3,
    title: "Our Vision",
    description:
      "To become the most loved ice cream brand by offering unique and tasty flavors."
  },
  {
    id: 4,
    title: "Quality Ingredients",
    description:
      "We use only fresh and natural ingredients to ensure the best taste and health."
  },
  {
    id: 5,
    title: "Customer Love",
    description:
      "Our customers are our priority and we strive to make every visit memorable."
  }
];