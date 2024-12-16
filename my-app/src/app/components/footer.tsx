import Image from "next/image"
import facebook from "../images/facebook-logo.png"
import instagram from '../images/instagram-logo.png'
import twitter from '../images/twitter-logo.png'
import youtube from '../images/youtube-logo.png'
import map from '../images/map-icon.png'



import Link from 'next/link'; 

export default function Footer() {
    return (
        <footer className="bg-[#111111] text-white pb-[17px] pt-[48px] px-[40PX]">
            {/* Top Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-8">
                
                {/* Column 1: Find a Store */}
                <div>
                    <h3 className="text-sm font-semibold mb-4">FIND A STORE</h3>
                    <ul className="space-y-2 text-sm">
                        {/* Navigation Links */}
                        <li><Link href="#" className="hover:underline">BECOME LINK MEMBER</Link></li>
                        <li><Link href="#" className="hover:underline">SIGN UP FOR EMAIL</Link></li>
                        <li><Link href="#" className="hover:underline">SEND US FEEDBACK</Link></li>
                        <li><Link href="#" className="hover:underline">STUDENT DISCOUNTS</Link></li>
                    </ul>
                </div>

                {/* Column 2: Get Help */}
                <div>
                    <h3 className="text-sm font-semibold mb-4">GET HELP</h3>
                    <ul className="space-y-2 text-sm text-[#7E7E7E]">
                        {/* Help and Support Links */}
                        <li><Link href="#" className="hover:underline">Order Status</Link></li>
                        <li><Link href="#" className="hover:underline">Delivery</Link></li>
                        <li><Link href="#" className="hover:underline">Returns</Link></li>
                        <li><Link href="#" className="hover:underline">Payment Options</Link></li>
                        <li><Link href="#" className="hover:underline">Contact Us on Nike.com</Link></li>
                        <li><Link href="#" className="hover:underline">Contact Us on All Other Inquiries</Link></li>
                    </ul>
                </div>

                {/* Column 3: About Nike */}
                <div>
                    <h3 className="text-sm font-semibold mb-4">ABOUT NIKE</h3>
                    <ul className="space-y-2 text-sm text-[#7E7E7E]">
                        {/* About Links */}
                        <li><Link href="#" className="hover:underline">News</Link></li>
                        <li><Link href="#" className="hover:underline">Careers</Link></li>
                        <li><Link href="#" className="hover:underline">Investors</Link></li>
                        <li><Link href="#" className="hover:underline">Sustainability</Link></li>
                    </ul>
                </div>

                {/* Column 4: Social Media Icons */}
                <div className="flex justify-start lg:justify-end items-start gap-4">
                    {/* Social Media Links */}
                    <Image className="text-lg cursor-pointer hover:text-gray-400" src={twitter} alt="/" />
                    <Image className="text-lg cursor-pointer hover:text-gray-400" src={facebook} alt="/" />
                    <Image className="text-lg cursor-pointer hover:text-gray-400" src={youtube} alt="/" />
                    <Image className="text-lg cursor-pointer hover:text-gray-400" src={instagram} alt="/" />
                </div>
            </div>

            {/* Bottom Section */}
            <div className="mt-8 flex flex-wrap justify-between items-center text-xs text-[#7E7E7E]">
                {/* Country and Copyright */}
                <div className="flex mb-4 md:mb-0 gap-2">
                    <Image src={map} alt="/" />
                    <p className="text-[#FFFFFF]">India</p>
                    <p>© 2023 Nike, Inc. All Rights Reserved</p>
                </div>

                {/* Additional Links */}
                <div className="flex flex-wrap gap-4">
                    <Link href="#" className="hover:underline">Guides</Link>
                    <Link href="#" className="hover:underline">Terms of Sale</Link>
                    <Link href="#" className="hover:underline">Terms of Use</Link>
                    <Link href="#" className="hover:underline">Nike Privacy Policy</Link>
                </div>
            </div>
        </footer>
    );
}