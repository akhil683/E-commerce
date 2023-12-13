import Products from "../Products/Products";
import ProductDetail from "./ProductDetail";

const SingleProduct = () => {
  return (
    <div className="max-w-[800px] m-auto">
      <ProductDetail />
        <Products heading="Related Products" />
    </div>
  )
}

export default SingleProduct;
