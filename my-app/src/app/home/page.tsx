import Image from 'next/image';
import image from '@/app/images/Image.png';
import Image1 from '@/app/images/Image (1).png';
import Image2 from '@/app/images/Image (2).png';
import Image3 from '@/app/images/Image (3).png';
import Image4 from '@/app/images/Image (4).png';
import Image5 from '@/app/images/Image (5).png';
import Image6 from '@/app/images/Image (6).png';
import Image7 from '@/app/images/Image (7).png';
import Image8 from '@/app/images/Image (8).png';
import Image9 from '@/app/images/Image (9).png';
import Image10 from '@/app/images/Image (10).png';
import Image11 from '@/app/images/Image (11).png';
import Image12 from '@/app/images/Image (12).png';
import Vector from '@/app/images/vector3.png';
import Vector1 from '@/app/images/Vector (1).png';


export default function Home() {
  return (
  <div className='flex flex-col items-center'>

    <div className='shaddow_Y-1 w-full h-[58px] bg-[#F5F5F5] '>
      <div className='flex flex-col pt-[10px] 	'>
        <h1 className='typography '>Hello Nike App</h1>
        <p className='typography2'>Download the app to access everything Nike. <span className='span-typography'><a href="">Get Your Great</a></span></p>
      </div>
    </div>

  <div className='flex flex-col justify-center px-[48px] gap-y-[84px] pb-[56px]'>

    <div className=''>
        <Image src={Image1} alt="" />
        <div className='flex flex-col pt-[48px]'>
        <p className='typography3 '>First Look</p>
           <h1 className='large-typography mt-[4px]'>Nike Air Max Pulse</h1>
           <p className='typography4 mt-[24px]'>
          Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse <br />
          —designed to push you past your limits and help you go to the max.
           </p>
          <div className='flex button-text gap-x-[6px] justify-center mt-[24px] pt-[6px]'>
            <button className='h-[39px] px-[22px] py-[7.5px] bg-[#111111] rounded-[30px]'>Notify Me</button>
            <button className='h-[39px] px-[22px] py-[7.5px] bg-[#111111] rounded-[30px]'>Shop Air Max</button>
           </div>
          </div>
    </div>
    <div className='flex flex-col gap-y-[12px]'>
      <div className='flex items-center justify-between'>
        <h1 className='typography5'>Best of Air Max</h1>
        <div className='flex items-center gap-x-[12.5px]'>
          <p className='typography3'>Shop</p>
          <button className='flex w-[48px] h-[48px] rounded-[24px] bg-[#F5F5F5] justify-center items-center'>
            <Image src={Vector} alt="" />
          </button>
          <button className=' flex w-[48px] h-[48px] rounded-[24px] bg-[#E5E5E5] justify-center items-center'>
          <Image src={Vector1} alt="" />
          </button>
        </div>
      </div>

      <div className='flex mb-[30px] gap-x-[12px]'>  
        <div>
        <Image src={image} alt="" />
        <div className='flex mt-[21px] mr-[16px] justify-between'>
          <p className='typography3'>Nike Air Max Pulse <br /> <span className='typography8'>Women's Shoes</span></p>
          <p className='typography9'>₹ 13 995</p>
        </div>
        </div>

        <div>
        <Image src={Image2} alt="" />
        <div className=' flex mt-[21px] mr-[16px] justify-between'>
          <p className='typography3'>Nike Air Max Pulse <br /> <span className='typography8'>Men's Shoes</span></p>
          <p className='typography9'>₹ 13 995</p>
        </div>
        </div>

        <div>
        <Image src={Image3} alt="" />
        <div className='flex mt-[21px] mr-[16px] justify-between'>
          <p className='typography3'>Nike Air Max 97 SE<br /> <span className='typography8'>Men's Shoes</span></p>
          <p className='typography9'>₹ 13 995</p>
        </div>
        </div>
        </div>
      </div>

      <div className='flex flex-col gap-y-[25px]'>
        <p className='typography10'>Featured</p>
        <div className='flex flex-col gap-y-[48px]'>
          <Image src={Image4} alt="" />
          <div className='flex flex-col items-center' >
            <h1 className='typography11'>STEP INTO WHAT FEELS GOOD</h1>
            <p className='typography12 mt-[24px] mb-[30px]'>Cause everyone should know the feeling of running in that perfect pair.</p>
            <button className='px-[23px] py-[7.5px] typography13 bg-[#111111] rounded-[30px]'>Find Your Shoe</button>
          </div>
        </div>
      </div>
       <div className='flex flex-col gap-y-[25px]'>
      
        <div className='flex items-center justify-between'>
          <h1 className='typography10'>Gear Up</h1>
        </div>
            <div className='flex mb-[54px] gap-x-[66px]'>

          <div className='flex flex-col gap-y-[12px]'>

          <div className='flex items-center gap-x-[12.5px] justify-end pr-[48px] '>
            <p className='typography3'>Shop Men's</p>
            <button className='flex w-[48px] h-[48px] rounded-[24px] bg-[#F5F5F5] justify-center items-center'>
              <Image src={Vector} alt="" />
            </button>
            <button className=' flex w-[48px] h-[48px] rounded-[24px] bg-[#E5E5E5] justify-center items-center'>
              <Image src={Vector1} alt="" />
            </button>
          </div>

          <div className='flex gap-x-[12px]'>  
            <div>
              <Image src={Image5} alt="" />
              <div className='flex mt-[21px] mr-[16px] justify-between'>
                <p className='typography3'>Nike Dri-FIT ADV TechKnit Ultra<br /> <span className='typography8'>Men's Short-Sleeve <br /> Running Top</span></p>
                <p className='typography9'>₹ 13 995</p>
              </div>
            </div>
            <div>
              <Image src={Image6} alt="" />
              <div className='flex mt-[21px] mr-[16px] justify-between'>
                <p className='typography3'>Nike Dri-FIT Challenger <br /> <span className='typography8'>Men's 18cm (approx.) 2- <br /> in-1 Versatile Shorts</span></p>
                <p className='typography9'>₹ 13 995</p>
              </div>
            </div>
          </div>
      </div>
        
          <div className='flex flex-col gap-y-[12px]'>

          <div className='flex items-center gap-x-[12.5px] ml-[48px] justify-end pr-[48px]'>
            <p className='typography3'>Shop Women's</p>
            <button className='flex w-[48px] h-[48px] rounded-[24px] bg-[#F5F5F5] justify-center items-center'>
              <Image src={Vector} alt="" />
            </button>
            <button className=' flex w-[48px] h-[48px] rounded-[24px] bg-[#E5E5E5] justify-center items-center'>
              <Image src={Vector1} alt="" />
            </button>
          </div>

          <div className='flex gap-x-[12px]'>  
            <div>
              <Image src={Image7} alt="" />
              <div className='flex mt-[21px] mr-[16px] justify-between'>
                <p className='typography3'>Nike Dri-FIT ADV Run Division <br /> <span className='typography8'>Women's Long-Sleeve <br /> Running Top</span></p>
                <p className='typography9'>₹ 13 995</p>
              </div>
            </div>
            <div>
              <Image src={Image8} alt="" />
              <div className='flex mt-[21px] mr-[16px] justify-between'>
                <p className='typography3'>Nike Fast <br /> <span className='typography8'>Women's Mid-Rise 7/8 Running <br /> Leggings with Pockets</span></p>
                <p className='typography9'>₹ 13 995</p>
              </div>
            </div>
          </div>
          </div>

        </div>
        
      </div>

      <div>
        <div>
          <p className='typography15'>Don't Miss</p>
        </div>
        <Image src={Image9} alt="" className='mt-[25px] mb-[48px]' />
        <div className='flex flex-col items-center '>
          <h1 className='typography16'>FLIGHT ESSENTIALS</h1>
          <p className='typography12 mt-[24px] mb-[30px]'>Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.</p>
          <button className='typography13 bg-[#111111] py-[7.5px] px-[23px] rounded-[30px]'>Shop</button>
        </div>
      </div>

     

      <div className='flex flex-col gap-y-[25px]'>
        <h1 className='typography10'>The Essentials</h1>
        <div className='flex gap-x-[12px]'>
          <div className='relative '>
            <Image className='' src={Image10} alt="" />
            <button className='absolute bottom-[48px] left-[48px] bg-[#FFFFFF] py-[7.5px] px-[21px] rounded-[30px] typography3'>Men's</button>
          </div>
          <div className='relative '>
            <Image className='' src={Image11} alt="" />
            <button className='absolute bottom-[48px] left-[48px] bg-[#FFFFFF] py-[7.5px] px-[21px] rounded-[30px] typography3'>Women's</button>
          </div>
          <div className='relative '>
            <Image className='' src={Image12} alt="" />
            <button className='absolute bottom-[48px] left-[48px] bg-[#FFFFFF] py-[7.5px] px-[21px] rounded-[30px] typography3'>Kid's</button>
          </div>
        </div>
      </div>


      <div className='flex justify-between w-[880px] self-center'>

        <div className='flex flex-col gap-y-[24px]'>
            <h1 className='flex typography3 justify-start'>Icons</h1>
           <div className='flex flex-col gap-y-[12px] typography18 '>
            <p>Air Force 1</p>
            <p>Huarache</p>
            <p>Air Max 90</p>
            <p>Air Max 95</p>
          </div>
        </div>

        <div className='flex flex-col gap-y-[24px]'>
            <h1 className='flex typography3 justify-start'>Shoes</h1>
             <div className='flex flex-col gap-y-[12px] typography18 '>
              <p>All Shoes</p>
              <p>Custom Shoes</p>
              <p>Jordan Shoes</p>
              <p>Running Shoes</p>
             </div>
         </div>
      <div className='flex flex-col gap-y-[24px]'>
          <h1 className='flex typography3 justify-start'>Clothing</h1>
          <div className='flex flex-col gap-y-[12px] typography18 '>
               <p>Modest Wear</p>
               <p>All Clothing</p>
               <p>Hoodies & Pullovers</p>
               <p>Shirts & Tops</p>
         </div>
        </div>

        <div className='flex flex-col gap-y-[24px]'>
          <h1 className='flex typography3 justify-start'>Kid's</h1>
          <div className='flex flex-col gap-y-[12px] typography18 '>
            <p>Infant & Toddler Shoes</p>
            <p>Kids' Shoes</p>
            <p>Kids' Jordan Shoes</p>
            <p>Kids' Basketball Shoes</p>
          </div>

        </div>
      </div>

    </div>
  </div>
  );
}
