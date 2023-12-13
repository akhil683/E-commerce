import Product from '../../assets/pd-1.png';
import { FaCartPlus } from 'react-icons/fa';

const ProductDetail = () => {

  return (
    <div className='flex flex-wrap max-w-[800px] justify-center  sm:my-8'>

      <div className=' w-full sm:max-w-[390px] p-8 bg-zinc-200 rounded-lg'>
        <img src={Product} alt="" className='hover:scale-110 duration-200' />
      </div>

      <div className='sm:w-[390px] w-full px-4 max-sm:mt-4'>

        <div className='flex flex-col gap-2 ext-lg sm:text-xl'>
          <h3>boAt Iris Pro | Round Dial Headphones, 40 House playback Battery life </h3>
          <span>$999</span>
          <p className='text-xs sm:text-sm text-zinc-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi voluptas distinctio obcaecati beatae? Dolores odio et maxime. Facilis id incidunt, corrupti non odio, eum maxime exercitationem mollitia, est eaque vero perspiciatis vitae explicabo magni dolorum esse rerum perferendis vel! Excepturi mollitia labore maxime pariatur asperiores.</p>
        </div>

        <div className='my-6 flex gap-4'>
          <div className='flex'>
            <span className='py-2 px-4 border'>-</span>
            <span className='py-2 px-4 border'>0</span>
            <span className='py-2 px-4 border'>+</span>
          </div>
          <button className='px-2 flex items-center text-white max-sm:text-sm bg-violet-700 hover:bg-violet-800'><FaCartPlus className='mr-2'/> ADD TO CART</button>
        </div>

        <hr />
        <p className='text-zinc-500 my-4'><span className='text-black'>Category:</span> Headphones</p>
      </div>

    </div>
  )
}

export default ProductDetail
