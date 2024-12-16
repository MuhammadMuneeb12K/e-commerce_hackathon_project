
import Image from 'next/image';
import logo from '../images/Frame.png';
import nike from "../images/Vector.png";
import search_icon from "../images/search-icon.png";
import icon1 from "../images/icon1.png";
import icon2 from "../images/icon2.png"

export default function Navbar() {
  return (
     <header className='w-full h-[96px]'>
        <div className="w-full h-[36px] bg-[#F5F5F5]">
          <div className="max-w-[1336px] mx-auto h-full flex items-center justify-between">
            <div className="h-full flex items-center pt-[6px] pl-[64px]">
               <Image src={logo} alt="Logo" />
            </div>
             <div className="flex items-center gap-6 pr-[44px]">
              <div className="flex items-center gap-4">
                <a href="/all-products"><span className="text-sm font-medium text-gray-900">Find a Store</span></a>
                 <span className="text-sm font-normal text-gray-900">|</span>
               </div>
               <div className="flex items-center gap-4">
               <a href="/help"><span className="text-sm font-medium text-gray-900">Help</span></a>
                 <span className="text-sm font-normal text-gray-900">|</span>
               </div>
               <div className="flex items-center gap-4">
                 <a href="/join-us"><span className="text-sm font-medium text-gray-900">Join Us</span></a>
                 <span className="text-sm font-normal text-gray-900">|</span>
                 <a href="/login"><span className="text-sm font-medium text-gray-900">Sign In</span></a>
               </div>
              </div>
            </div>
         </div>



         <div className='w-full h-[60px]  bg-[#FFFFFF] flex items-center justify-between '>
            <div className='pl-[38.26px] '>
                <Image src={nike} alt='/'/>
            </div>
            <div className=' h-[60px] flex gap-x-[150px] pr-[50px]'>
                <div className='flex gap-[16px] font-medium w-full items-center'>
                <a href="">New & Featured</a>
                <a href="">Men</a>
                <a href="">Women</a>
                <a href="">Kids</a>
                <a href="">Sale</a>
                <a href="">SNKRS</a>
                </div>
                <div className='items-center flex gap-x-[50px]  '>
                <div className="flex items-center px-4 py-3 rounded-[100px] overflow-hidden h-[40px] w-[160px] bg-[#F5F5F5] gap-[8px]">
                    <Image src={search_icon} alt='/' className='w-[24px] h-[24px]'/>
                    <input type="text" placeholder="Search"
                    className="w-full outline-none bg-transparent text-gray-600 text-sm" />
                </div>
                <div className='w-[84px] h-[60px] py-[12px] gap-[30px] flex'>
                    <Image src={icon1} alt='/'className='w-[24px] h-[24px]' />
                    <Image src={icon2} alt='/' className='w-[24px] h-[24px]' />
                </div>
                </div>
                </div>
        </div>
      </header> 
  );
}


