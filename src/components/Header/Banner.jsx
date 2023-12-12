import BannerImg from '../../assets/banner.png';

const Banner = () => {
  return (
    <div className='flex relative bg-gradient-to-r from-violet-600 to-blue-600 bg-gray-800 text-white py-4'>
    <div className=' min-h-[94vh] flex flex-col justify-center m-auto max-sm:gap-12 md:flex-row'>
      <div className='sm:w-[425px] w-full flex flex-col items-center justify-center'>
        <h1 className='text-5xl sm:text-8xl font-semibold'>SALES</h1>
        <p className='max-w-[340px] max-sm:text-center text-sm my-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eligendi voluptatum ipsam consecteturcorporis rerum laborum</p>
        <div className='max-w-[340px] flex gap-6'>
          <button className='p-2 font-semibold duration-200 border-2 border-white'>READ MORE</button>
          <button className='p-2 border-2 duration-200 border-white bg-white font-semibold text-blue-600'>SHOP NOW</button>
        </div>
      </div>
      <div className='sm:w-[425px] w-full p-4 flex flex-col justify-center'>
        <img src={BannerImg} alt='' className='' />  
      </div>      
    </div>
    </div>
  )
}

export default Banner;
