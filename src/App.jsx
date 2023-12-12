import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./components/Home";
import Category from "./components/Category";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";
import SingleProduct from "./components/SingleProduct";

const App = () => {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/product/:id" element={<SingleProduct />} />
      </Routes>
      <Newsletter />
      <Footer />
    </>
  )
}

export default App;
