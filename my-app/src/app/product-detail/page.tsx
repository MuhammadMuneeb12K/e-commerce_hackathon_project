import Image from "next/image"
import product_Image from '../images/product-detail-1.png'
import Group from "../images/Group.png";


export default function Product_Detail(){
    return(
        <div className="flex pt-[158px] pb-[362px] pl-[98px] pr-[177px] gap-x-[137px]">
            <Image src={product_Image} alt="product-Image/"/>
            <div className="">
                <h1 className="typography19 mb-[34px] w-[367px] h-[96px]">Nike Air Force 1 <br /> PLT.AF.ORM</h1>
                <p className="typography20 mb-[32px]">Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its "inside out"-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.</p>
                <h2 className="mb-[26px] typography21">₹ 8 695.00</h2>
                <button className="py-[7.5px] px-[23px] bg-[#111111] flex gap-x-[10px] rounded-[30px]">
                    <Image src={Group} alt="/"/>
                    <p className="typography13">Add To Cart</p>
                </button>
            </div>
        </div>
    )
}

