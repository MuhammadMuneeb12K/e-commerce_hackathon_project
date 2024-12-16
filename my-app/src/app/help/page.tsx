import Image from "next/image"
import search_icon_grey from "../images/search-icon-grey.png"
import good from "../images/good.png";
import bad from "../images/bad.png";
import phone from "../images/phone-image.png"
import mail from '../images/mail-image.png'
import message from '../images/message-image.png'
import location from '../images/location-image.png'



export default function ContactUs(){
    return(
        <div className="flex flex-col pt-[48px] pb-[54px] px-[93.5px] gap-y-[48px] ">

            {/* Search Bar */}
            
            <div className=" flex flex-col items-center gap-y-[20px]">
                <h1 className="typography22">GET HELP</h1>
                <div className="flex items-center px-[12px] py-[19px] border-[1px] rounded-[8px] overflow-hidden gap-[8px] gap-x-[210px] border-[#757575]">
                    <input type="text" placeholder="What can we help you with?"
                    className="typography23" />
                    <Image src={search_icon_grey} alt='/' className=''/>
                </div>
            </div>


            <div className="typography30 flex">


                {/* Left Side */}

                <div className=" flex flex-col gap-y-[30px] pr-[17px]">
                    
                    <h1 className="typography25">WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?</h1>
                    
                    {/* Payment Methods */}

                    <div className="flex flex-col gap-y-[31px]">
                        <p>We want to make buying your favourite Nike shoes and gear online fast and easy, and we accept the following payment options:</p>
                        <div className="flex flex-col gap-y-[23px] pl-[32px]">
                            <p>Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro</p>
                            <p>If you enter your PAN information at checkout, you'll be able to pay for your order with PayTM or a local credit or debit card.</p>
                            <p>Apple Pay</p>
                        </div>
                        <div className="flex flex-col gap-y-[22px]">
                            <p> <span className="typography26">Nike Members</span> can store multiple debit or credit cards in their profile for faster checkout. If you're not already a Member, <span className="typography26">join us</span> today.</p>
                            <div className="flex gap-x-[16px] typography24">
                                <button className="flex py-[7.5px] px-[21px] rounded-[30px] bg-[#111111]">JOIN US</button>
                                <button className="flex py-[7.5px] px-[21px] rounded-[30px] bg-[#111111]">SHOP NIKE</button>
                            </div>
                        </div>
                    </div>

                    {/* FAQs */}

                    <div className="flex flex-col gap-y-[17px]">
                        <h2 className="typography27">FAQs</h2>
                        <div className="flex flex-col gap-y-[26px]">
                            <div>
                                <h3 className="typography28">Does my card need international purchases enabled?</h3>
                                <p>Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout if international purchases need to be enabled.
                                <br /><br />
                                Please note, some banks may charge <span className="typography26">a small transaction fee</span> for international orders.
                                </p>
                            </div>
                            <div>
                                <h3 className="typography28">Can I pay for my order with multiple methods?</h3>
                                <p>No, payment for Nike orders can't be split between multiple payment methods.</p>
                            </div>
                            <div>
                                <h3 className="typography28">What payment method is accepted for SNKRS orders?</h3>
                                <p>You can use any accepted credit card to pay for your SNKRS order.</p>
                            </div>
                            <div>
                                <h3 className="typography28">Why don't I see Apple Pay as an option?</h3>
                                <p>To see Apple Pay as an option in the Nike App or on Nike.com, you'll need to use a compatible Apple device running the latest OS, be signed in to your iCloud account and have a supported card in your Wallet. Additionally, you'll need to use Safari to use Apple Pay on Nike.com.</p>
                            </div>
                        </div>
                    </div>

                    {/* Ask */}

                    <div>
                        <p className="typography20">Was this answer helpful?</p>
                        <div className="flex px-[6px] py-[3.75px] gap-x-[12px] mt-[6px] mb-[12px]">
                            <Image src={good} alt='/' className=''/>
                            <Image src={bad} alt='/' className=''/>
                        </div>
                        <h4 className="typography29">RELATED</h4>
                        <div className="ml-[32px] mt-[25px] typography31">
                            <p>WHAT ARE NIKE'S DELIVERY OPTIONS?</p>
                            <p>HOW DO I GET FREE DELIVERY ON NIKE ORDERS?</p>
                        </div>
                    </div>

                </div>


                {/* Right Side */}

                <div className="pl-[50px] shaddow_X1">

                <div className="flex flex-col gap-[34px] items-center ">
                    <h1 className="typography25">CONTACT US</h1>
                    <div className="flex flex-col gap-y-[53px]">

                        {/* Phone */}

                        <div className="flex flex-col items-center ">
                            <Image className="mb-[29px]" src={phone} alt="/"/>
                            <h6 className="typography32">000 800 919 0566</h6>
                            <p  className="typography33 ">
                                Products & Orders: 24 hours a day, 7 days a week Company Info & Enquiries: 07:30 16:30, Monday - Friday
                            </p>
                        </div>

                        {/* Message */}

                        <div className="flex flex-col items-center ">
                            <Image className="mb-[29px]" src={message} alt="/"/>
                            <h6 className="typography32">24 hours a day</h6>
                            <p className="typography33">7 days a week</p>
                        </div>

                        {/* Mail */}

                        <div className="flex flex-col items-center">
                            <Image className="mb-[29px]" src={mail} alt="/"/>
                            <h6  className="typography32">We'll reply within</h6>
                            <p  className="typography33">five business days</p>
                        </div>

                        {/* Location */}

                        <div className="flex flex-col items-center">
                            <Image className="mb-[29px]" src={location} alt="/"/>
                            <h6  className="typography32">STORE LOCATOR</h6>
                            <p  className="typography33">Find Nike retail stores near you</p>
                        </div>

                    </div>
                </div>
                </div>

            </div>

        </div>
    )
}