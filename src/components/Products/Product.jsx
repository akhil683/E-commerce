import ProductImg from '../../assets/pd-1.png';
const Product = () => {
  return (
    <div>
      <div className='max-w-[190px] h-56 overflow-hidden bg-zinc-300 rounded-lg'>
        <img src={ProductImg} alt="" className='w-[90%] m-auto object-cover duration-200 hover:scale-110' />
      </div>
      <div className='my-1 w-[190px]'>
        <p className='text-zinc-600 text-ellipsis whitespace-nowrap overflow-hidden'>Samsung Buds Pro</p>
        <span className='text-lg font-medium'>&#8377;500</span>
      </div>
    </div>
  )
}

export default Product
