import { Routes, Route } from "react-router-dom";
import About from "./About";
import Home from "./views/Home/Home";  // 

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;