import { MdClose } from 'react-icons/md';
import ProductImg from '../../assets/pd-1.png';
const CartItem = () => {
  return (
    <>
      <div className='flex gap-4 p-1 hover:bg-zinc-100 items-center'>
        <div className='w-20 h-20 p-2 rounded-md bg-zinc-300'>
          <img src={ProductImg} className='h-full w-full' alt="" />
        </div>
        <div className='w-full'>
          <div className='flex items-center justify-between mb-2 w-full'>
            <span className=' text-ellipsis max-sm:text-xl whitespace-nowrap overflow-hidden'>Product Name</span>
            <MdClose />
          </div>
          <div className='flex text-sm'>
            <span className='px-4 py-2 sm:px-2 sm:py-1 border border-zinc-300 cursor-pointer'>-</span>
            <span className='px-4 py-2 sm:px-2 sm:py-1 border-y boder-zinc-300'>0</span>
            <span className='px-4 py-2 sm:px-2 sm:py-1 border border-zinc-300 cursor-pointer'>+</span>
          </div>
          <div className='my-2'>
            <span>4</span>
            <span className='px-1'>x</span>
            <span className='text-violet-600'>&#8377;4599</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartItem;
