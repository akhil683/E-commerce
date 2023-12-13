import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import CategoryDetails from "./components/Category/CategoryDetails";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";
import SingleProduct from "./components/ProductDetails/SingleProduct";

const App = () => {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:id" element={<CategoryDetails />} />
        <Route path="/product/:id" element={<SingleProduct />} />
      </Routes>
      <Newsletter />
      <Footer />
    </>
  )
}

export default App;
