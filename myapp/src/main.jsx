import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import About from "./views/About/About";
import Contact from "./views/Contact/Contact";
import Home from "./views/Home/Home";
import NotFound from "./views/NotFound/NotFound";
import OurServices from "./views/OurServices/OurServices.jsx";

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/our-services" element={<OurServices />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);