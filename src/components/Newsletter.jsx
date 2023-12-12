import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa';

const Newsletter = () => {

  return (
    <div className='flex relative h-80 flex-col items-center justify-center'>

      <img src="https://images.unsplash.com/photo-1526642738196-ad8ed2d50805?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""
      className='w-full h-80 object-cover absolute' />

      <div className='absolute p-6 flex flex-col gap-2 justify-center items-center'>
        <span className=' max-sm:text-sm text-gray-600'>NEWSLETTER</span>
        <span className='text-2xl sm:text-3xl text-center'>Sign Up for latest updates and offers</span>
        <div className='my-6'>
          <input type="text" placeholder='Your email address' className='p-2 w-[200px] sm:w-[300px] outline-none border-2 border-transparent focus:border-green-500' />
          <button className='p-2 bg-green-500 border-2 border-green-500 text-white hover:bg-green-600 hover:border-green-600 duration-200'>Subscribe</button>
        </div>
        <div>
          <p className='text-xs sm:text-sm text-gray-600 mb-4'>Will be used in accordance with our Privacy Policy</p>
          <ul className='flex gap-4 justify-center'>
            <li className='p-2 sm:p-3 text-white bg-gray-800 hover:bg-green-600 duration-200 rounded-full'><FaFacebookF /></li>
            <li className=' p-2 sm:p-3 text-white bg-gray-800 hover:bg-green-600 duration-200 rounded-full'><FaInstagram /></li>
            <li className='p-2 sm:p-3 text-white bg-gray-800  hover:bg-green-600 duration-200 rounded-full'><FaTwitter /></li>
            <li className='p-2 sm:p-3 text-white bg-gray-800 hover:bg-green-600 rounded-full'><FaLinkedin /></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Newsletter;
