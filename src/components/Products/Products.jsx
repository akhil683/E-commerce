import Product from "./Product";

const Products = ({ heading }) => {
  return (
    <div className="my-6 max-w-[800px] m-auto"> 
        <h3 className="py-2 text-xl sm:text-3xl pl-4 mb-6 border-b-2 border-zinc-300">{heading}</h3>
      <div className="flex gap-1 flex-wrap justify-evenly items-center">
      <Product />      
      <Product />      
      <Product />      
      <Product />      
      <Product />      
      <Product />      
      <Product />      
      <Product />      
      </div>
    </div>
  )
}

export default Products;
