import Cat1 from '../assets/Category/Cat-1.jpg';
import Cat2 from '../assets/Category/Cat-2.jpg';
import Cat3 from '../assets/Category/Cat-3.jpg';
import Cat4 from '../assets/Category/Cat-4.jpg';
const Category = () => {
  return (
    <div className='my-12'>
      <div className='grid md:grid-cols-4 grid-cols-2 gap-4 m-autoa  max-w-[800px]'>
        <div>
          <div className='bg-red-400 max-w-[190px] duration-100 hover:scale-110 m-auto rounded-md text-zinc-300 leading-[112px] relative h-28 overflow-hidden'>
            <img src={Cat1} className='absolute h-28 w-full object-cover' alt="" />
            <h3 className='absolute text-center w-full uppercase'>headphones</h3>
          </div>
        </div>
        <div>
          <div className='bg-red-400 max-w-[190px] duration-100 m-auto hover:scale-110 rounded-md text-zinc-300 leading-[112px] relative h-28 overflow-hidden'>
            <img src={Cat2} className='absolute h-28 w-full object-cover' alt="" />
            <h3 className='absolute text-center w-full uppercase'>smart watches</h3>
          </div>
        </div>
        <div>
          <div className='bg-red-400 max-w-[190px] duration-100 hover:scale-110 rounded-md text-zinc-300 m-auto leading-[112px] relative h-28 overflow-hidden'>
            <img src={Cat3} className='absolute h-28 w-full object-cover' alt="" />
            <h3 className='absolute text-center w-full uppercase'>Bluetooth speaker</h3>
          </div>
        </div>
        <div>
          <div className='bg-red-400 max-w-[190px] duration-100 m-auto hover:scale-110 rounded-md text-zinc-300 leading-[112px] relative h-28 overflow-hidden'>
            <img src={Cat4} className='absolute h-28 w-full object-cover' alt="" />
            <h3 className='absolute text-center w-full uppercase'>wireless earbuds</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Category;
