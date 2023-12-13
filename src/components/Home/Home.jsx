import Category from "./Category";
import Banner from "../Header/Banner";
import Products from "../Products/Products";

const Home = () => {
  return (
    <div className="">
      <Banner />
      <Category />
      <Products heading="Popular Products" />
    </div>
  )
}

export default Home;
