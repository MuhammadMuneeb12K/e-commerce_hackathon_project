import Image from 'next/image';
import row1box1 from '../images/Rectangle.png';
import row1box2 from '../images/Rectangle (1).png'
import row1box3 from "../images/Rectangle (2).png"
import row2box1 from "../images/row2box1.png"
import row2box2 from "../images/row2box2.png"
import row2box3 from "../images/row2box3.png"
import row3box1 from "../images/3row1.png"
import row3box2 from "../images/3row2.png"
import row3box3 from "../images/3row3.png"
import row4box1 from "../images/4row1.png"
import row4box2 from "../images/4row2.png"
import row4box3 from "../images/4row3.png"
import row5box1 from "../images/5row1.png"
import row5box2 from "../images/5row2.png"
import row5box3 from "../images/5row3.png"
import row6box1 from "../images/6row1.png"
import row6box2 from "../images/6row2.png"
import row6box3 from "../images/6row3.png"
import row7box1 from "../images/7row1.png"
import row7box2 from "../images/7row2.png"
import row7box3 from "../images/7row3.png"
import row8box1 from "../images/8ROW1.png"
import row8box2 from "../images/8roe2.png"
import row8box3 from "../images/8row3.png"
import row9box1 from "../images/9row1.png"
import row9box2 from "../images/9row2.png"
import row9box3 from "../images/9row3.png"
import row10box1 from "../images/10row1.png"
import row10box2 from "../images/10row2.png"
import row10box3 from "../images/10row3.png"
import downarrow from "../images/downarrow.png"
import filter from "../images/filter.png"



const products = [
  {
    image: row1box1,
    tag: 'Just In',
    name: 'Nike Air Force 1 Mid \'07',
    category: "Men's Shoes",
    colors: '1 Colour',
    price: '10 795'
  },
  {
    image: row1box2,
    tag: 'Just In', 
    name: 'Nike Court Vision Low Next Nature',
    category: "Men's Shoes",
    colors: '1 Colour',
    price: '4 995'
  },
  {
    image: row1box3,
    tag: 'Just In',
    name: 'Nike Air Force 1 PLT.AF.ORM',
    category: "Women's Shoes",
    colors: '1 Colour',
    price: '8 695'
  },
  {
    image: row2box1,
    tag: 'Just In',
    name: 'Nike Air Force 1 React',
    category: "Men's Shoes",
    colors: '1 Colour',
    price: '13 295'
  },
  {
    image: row2box2,
    tag: 'Promo Exclusion',
    name: 'Air Jordan 1 Elevate Low',
    category: "Women's Shoes",
    colors: '1 Colour',
    price: '11 895'
  },
  {
    image: row2box3,
    tag: 'Just In',
    name: 'Nike Standard Issue',
    category: "Women's Basketball Jersey",
    colors: '1 Colour',
    price: '2 895'
  },
  {
    image: row3box1,
    tag: 'Promo Exclusion',
    name: 'Nike Dunk Low Retro SE',
    category: "Men's Shoes",
    colors: '1 Colour',
    price: '9 695'
  },
  {
    image: row3box2,
    tag: 'Sustainable Materials',
    name: 'Nike Dri-FIT UV Hyverse',
    category: "Men's Short-Sleeve Graphic Fitness Top",
    colors: '1 Colour',
    price: "2 495"
  },
  {
    image: row3box3,
    tag: 'Just In',
    name: 'Nike Court Vision Low',
    category: "Men's Shoes",
    colors: '1 Colour',
    price: "5 695"
  },
  {
    image: row4box1,
    tag: 'Just In',
    name: 'Nike Dri-FIT Ready',
    category: "Men's Short-Sleeve Fitness Top",
    colors: '3 Colours',
    price: '2 495'
  },
  {
    image: row4box2,
    tag: 'Just In',
    name: 'Nike One Leak Protection: Period',
    category: "Women's Mid-Rise 18cm (approx.) Biker Shorts",
    colors: '2 Colours',
    price: '3 395'
  },
  {
    image: row4box3,
    tag: 'Just In',
    name: 'Nike Air Force 1 LV8 3',
    category: "Older Kids' Shoe",
    colors: '1 Colour',
    price: '7 495'
  },
  {
    image: row5box1,
    tag: 'Just In',
    name: 'Nike Blazer Low Platform',
    category: "Women's Shoes",
    colors: '1 Colour',
    price: '8 195'
  },
  {
    image: row5box2,
    tag: 'Just In',
    name: "Nike Air Force 1 '07",
    category: "Women's Shoes",
    colors: '2 Colours',
    price: '8 195'
  },
  {
    image: row5box3,
    tag: 'Just In',
    name: 'Nike Pro Dri-FIT',
    category: "Men's Tight-Fit Sleeveless Top",
    colors: '1 Colour',
    price: '1 495'
  },
  {
    image: row6box1,
    tag: 'Just In',
    name: 'Nike Dunk Low Retro',
    category: "Men's Shoes",
    colors: '1 Colour',
    price: '8 695'
  },
  {
    image: row6box2,
    tag: 'Just In',
    name: 'Nike Air Max SC',
    category: "Women's Shoes",
    colors: '2 Colours',
    price: '5 995'
  },
  {
    image: row6box3,
    tag: 'Just In',
    name: 'Nike Dri-FIT UV Miler',
    category: "Men's Short-Sleeve Running Top",
    colors: '1 Colour',
    price: '1 695'
  },
  {
    image: row7box1,
    tag: 'Just In',
    name: 'Nike Air Max SYSTM',
    category: "Older Kid's Shoes",
    colors: '1 Colour',
    price: '6 495'
  },
  {
    image: row7box2,
    tag: 'Just In',
    name: 'Nike Alate All U',
    category: "Women's Basketball Jersey",
    colors: '1 Colour',
    price: '2 195'
  },
  {
    image: row7box3,
    tag: 'Just In',
    name: 'Nike Court Legacy Lift',
    category: "Women's Shoes",
    colors: '2 Colours',
    price: '7 495'
  },
  {
    image: row8box1,
    tag: 'Just In',
    name: 'Nike Swoosh',
    category: "Women's Medium-support Padded Sports Bra Tank",
    colors: '2 Colours',
    price: '3 095'
  },
  {
    image: row8box2,
    tag: 'Just In',
    name: 'Nike SB Zoom Janoski OG+',
    category: "Shoes",
    colors: '1 Colour',
    price: '8 595'
  },
  {
    image: row8box3,
    tag: 'Just In',
    name: 'Nike Dri-FIT Run Division Rise 365',
    category: "Men's Running Tank",
    colors: '2 Colours',
    price: '3 495'
  },
  {
    image: row9box1,
    tag: 'Just In',
    name: 'Nike Dri-FIT Challenger',
    category: "Men's 18cm (approx.) 2-in-1 Versatile Shorts",
    colors: '1 Colour',
    price: '2 459'
  },
  {
    image: row9box2,
    tag: 'Just In',
    name: 'Jordan Series ES',
    category: "Men's Shoes",
    colors: '2 Colours',
    price: '7 495'
  },
  {
    image: row9box3,
    tag: 'Just In',
    name: 'Nike Outdoor Play',
    category: "Older Kids' Oversized Woven Jacket",
    colors: '1 Colour',
    price: '3 895'
  },
  {
    image: row10box1,
    tag: 'Just In',
    name: 'Nike Sportswear Trend',
    category: "Older Kids' (Girls') High-waisted Woven Shorts",
    colors: '2 Colours',
    price: '2 495'
  },
  {
    image: row10box2,
    tag: 'Just In',
    name: "Nike Blazer Low '77 Jumbo",
    category: "Women's Shoes",
    colors: '1 Colour',
    price: '8 595'
  },
  {
    image: row10box3,
    tag: 'Just In',
    name: 'Nike SB Force 58',
    category: "Skate Shoe",
    colors: '1 Colour',
    price: '5 995'
  },
  // Add more products
];

const sidebarCategories = [
  { name: 'Shoes', link: '#heraklion' },
  { name: 'Sports Bras', link: '#chania' },
  { name: 'Tops & T-Shirts', link: '#rethymno' },
  { name: 'Hoodies & Sweatshirts', link: '#elounda' },
  { name: 'Jackets', link: '#agios-nikolaos' },
  { name: 'Trousers & Tights', link: '#agios-nikolaos' },
  { name: 'Shorts', link: '#balos-lagoon' },
  { name: 'Tracksuits', link: '#samaria-gorge' },
  { name: 'Jumpsuits & Rompers', link: '#matala' },
  { name: 'Skirts & Dresses', link: '#gortyna' },
  { name: 'Socks', link: '#spinalonga' },
  { name: 'Accessories & Equipment', link: '#spinalonga' }
];

const relatedCategories = [
  'Best Selling Products',
  'Best Shoes',
  'New Basketball Shoes',
  'New Football Shoes',
  'New Men\'s Shoes',
  'New Running Shoes',
  'Best Men\'s Shoes',
  'New Jordan Shoes',
  'Best Women\'s Shoes',
  'Best Training & Gym'
];

const NikeProductsPage: React.FC = () => {
  return (

    <div className='px-[48px]'>

    <div className='flex pb-[40px] pt-[80px] justify-between'>
        <h2 className="text-xl font-bold mb-4">New (500)</h2>
        <div className='flex gap-x-[15px]'>
          <div className='flex items-center gap-x-[8px]'>
            <p>Hide Filters</p>
            <Image src={filter} alt="" />
          </div>
          <div className='flex items-center gap-x-[8px]'>
            <p>Sort By</p>
            <Image src={downarrow} alt="" />
          </div>
        </div>
    </div>

    <div className="flex ">

      {/* Sidebar */}
      <div className="w-1/5">
        
        
        <div className="mb-4">
          {sidebarCategories.map((category, index) => (
            <a 
              key={index} 
              href={category.link} 
              className="block py-1 hover:text-blue-600"
            >
              {category.name}
            </a>
          ))}
        </div>

        <div className="mb-4">
          <h3 className="font-semibold mb-2">Show Gender Options</h3>
          <div className="flex flex-col">
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2">Male</span>
            </label>
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2">Female</span>
            </label>
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2">Unisex</span>
            </label>
          </div>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold mb-2">Kids</h3>
          <div className="flex flex-col">
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2">Girl</span>
            </label>
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2">Boy</span>
            </label>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Shop by Prices</h3>
          <div className="flex flex-col">
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2">Under ₹ 2,500.00</span>
            </label>
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2">₹ 2,501.00 - ₹ 7,500.00</span>
            </label>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col w-4/5 gap-y-[100px]">
        <div className="grid grid-cols-3 gap-x-[16px] gap-y-[18px]">
          {products.map((product, index) => (
            
            <div 
              key={index} 
              className="bg-white overflow-hidden pb-[42px]"
            >
              <a href="/product-detail">
              <Image 
                src={product.image} 
                alt={product.name} 
                width={400} 
                height={400} 
                className="object-cover"
              />
              <div className="mt-[9px]">
                <div className=" typography34">{product.tag}</div>
                <h3 className="typography35">{product.name}</h3>
                <p className="typography37">{product.category}</p>
                <div className="flex flex-col mt-[5px] gap-y-[19px]">
                  <span className="typography37 ">{product.colors}</span>
                  <span className="typography36">MRP : ₹ {product.price}.00</span>
                </div>
              </div>
              </a>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-y-[25px] pt-[62px] pb-[72px] border-t-[1px] border-[#E5E5E5]">
          <h2 className="typography39 mb-4">Related Categories</h2>
          <div className="flex flex-wrap gap-2">
            {relatedCategories.map((category, index) => (
              <button 
                key={index} 
                className="hover:bg-gray-100 px-[23px] py-[8px] rounded-[20px] typography38 border-[1px] border-[#CCCCCC]"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default NikeProductsPage;

