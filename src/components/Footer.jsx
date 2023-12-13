import {
  FaMobileAlt,
  FaEnvelope,
  FaLocationArrow
} from 'react-icons/fa';
import PaymentMethod from '../assets/PaymentMethod.jpg';

const Footer = () => {
  return (
    <footer className='p-12 text-zinc-500'>
      <div className='flex justify-between flex-wrap gap-4 text-xs leading-7 max-w-[800px] m-auto'>
        <div className='sm:max-w-[200px] w-full leading-normal'>
          <h4 className='text-xl text-black mb-2'>About</h4>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam voluptatem ex atque fugit, dignissimos dolores. Cumque odio quis nobis eos perferendis optio corporis dicta quo incidunt? Odio nihil exercitationem consectetur.</p>
        </div>
        <div className='sm:max-w-[200px] w-full leading-normal'>
          <h4 className='text-xl text-black mb-2'>Contact</h4>
          <div>
            <p className='flex gap-2 mb-2'><span className='my-auto'><FaLocationArrow /></span>National Institute of Technology, Hamirpur, Himachal Pradesh</p>
            <p className='flex gap-2 mb-2'><span className='my-auto'><FaMobileAlt /></span>Phone: +91 8219649129</p>
            <p className='flex gap-2'><span className='my-auto'><FaEnvelope /></span>Email: store@outstore.com</p>
          </div>
        </div >
        <div className='sm:max-w-[200px]'>
          <h4 className='text-xl text-black mb-2'>Categories</h4>
          <ul>
            <li>Headphones</li>
            <li>Smartwatches</li>
            <li>Bluetooth Speakers</li>
            <li>Wireless Earbuds</li>
            <li>Home Theatre</li>
            <li>Projectors</li>
          </ul>
        </div>
        <div className='sm:max-w-[200px]'>
          <h4 className='text-xl text-black'>Pages</h4>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Privacy Policy</li>
            <li>Returns</li>
            <li>Terms & Conditions</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
      <hr className='m-2' />
      <div className='max-w-[800px] m-auto uppercase flex justify-between'>
        <span className='text-[10px]'>Our Store Pvt. Ltd. All Copyright Reserved</span>
        <img className='h-6' src={PaymentMethod} alt="" />
      </div>
    </footer>
  )
}

export default Footer;
