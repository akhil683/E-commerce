import { MdClose } from 'react-icons/md';
import { BsCartX } from 'react-icons/bs';
import CartItem from './CartItem';

const Cart = ({ setShowCart }) => {

  return (
    <>
      <div  
      onClick={() => setShowCart(false)}
      className='absolute w-full h-screen bg-black top-0 left-0 opacity-40 z-50' ></div>   

      <div className='sm:w-[340px] w-full h-screen px-2 py-4 bg-white absolute top-0 right-0 z-50 animate-cart'>
        <div className='flex justify-between items-center mb-4 border-b-2 pb-2'>
          <span className='text-2xl'>Shopping Cart</span>
          <button onClick={() => setShowCart(false)} className=' right-2 p-1 bg-zinc-500 hover:bg-zinc-600 text-white rounded-full'>
            <MdClose className='text-xl sm:text-2xl' />
          </button>
        </div>
        
        {/* <div className='flex flex-col mt-20 items-center gap-4 h-full'>
          <BsCartX className='text-9xl text-zinc-400' />
          <span>No Products in the Cart.</span>
          <button className='p-2 bg-violet-600 hover:bg-violet-700 text-white rounded-md'>RETURN TO SHOP</button>
        </div> */}
        <div className='flex flex-col justify-between sm:h-[90%] h-[94%]'>
          <CartItem />
          <div>
            <div className='flex sm:text-lg text-base p-2 justify-between my-4 border-y-2 border-violet-100'>
              <span>SUBTOTAL:</span>
              <span className='text-violet-700'>$2999</span>
            </div>
            <button className='w-full bg-violet-600 hover:bg-violet-700 rounded-md text-white p-2'>Checkout</button>
          </div>
        </div>
      </div>

    </>
  )
}

export default Cart;
