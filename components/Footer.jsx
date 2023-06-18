'use client'
import Container from "./Container"
import Download from "./Download"
import MyLink from "./Mylink"
import {
    FaLinkedin, FaFacebookSquare, FaInstagram, FaTwitterSquare,
    FaYoutubeSquare, FaWhatsappSquare, FaRegHandPointRight
} from 'react-icons/fa'
function Footer() {
    return (
        <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-6 bg-black text-white p-4 sm:p-12">
                <div className="flex flex-col justify-start items-start md:items-center gap-3 md:gap-5">
                    <h4 className='text-xl font-semibold flex justify-center items-center gap-3'><span><FaRegHandPointRight /></span> Useful Links</h4>
                    <div className="flex flex-col gap-4">
                        <MyLink href='/' className="text-gray-400 font-bold text-sm hover:text-white">Careers</MyLink>
                        <MyLink href='/' className="text-gray-400 font-bold text-sm hover:text-white">Quality Policy</MyLink>
                        <MyLink href='/' className="text-gray-400 font-bold text-sm hover:text-white">Privacy Policy</MyLink>
                        <MyLink href='/' className="text-gray-400 font-bold text-sm hover:text-white">Shipping Policy</MyLink>
                        <MyLink href='/' className="text-gray-400 font-bold text-sm hover:text-white">Cancellation Policy</MyLink>
                        <MyLink href='/' className="text-gray-400 font-bold text-sm hover:text-white">Return & Refund Policy</MyLink>
                        <MyLink href='/' className="text-gray-400 font-bold text-sm hover:text-white">Terms of Service</MyLink>
                    </div>
                </div>
                <div className="flex flex-col justify-start items-start md:items-center gap-3 md:gap-5">
                    <h4 className='text-xl font-semibold flex gap-3 justify-center items-center'><span><FaRegHandPointRight /></span> Contact Us</h4>
                    <div className="flex flex-col gap-4">
                        <span className="text-sm capitalize">Landline: <span className="text-gray-400">02828-999999</span></span>
                        <span className="text-sm capitalize">Mobile: <span className="text-gray-400">02828-999999</span>, <span className="text-gray-400">02828-999999</span></span>
                        <span className="text-sm capitalize">Mobile: <span className="text-gray-400 text-justify">exampleexampel1@gamil.com</span>, <span className="text-gray-400">exampleexampel1@gamil.com</span></span>
                        <span className="text-sm capitalize">
                            501,502,503 mahadev industrial estate,
                            krishna palace park road,vatva, ahamdabad(100001),
                            gujrat,india
                        </span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h5 className="font-bold">We are Social!</h5>
                        <div className="flex text-3xl flex-wrap gap-1">
                            <MyLink href='/' className="hover:text-[#4267B2]"><FaFacebookSquare /></MyLink>
                            <MyLink href='/' className="hover:text-[#0072b1]"><FaLinkedin /></MyLink>
                            <MyLink href='/' className="transition-all hover:-translate-y-[2px]"><FaInstagram /></MyLink>
                            <MyLink href='/' className="hover:text-[#1DA1F2]"><FaTwitterSquare /></MyLink>
                            <MyLink href='/' className="hover:text-[#FF0000]"><FaYoutubeSquare /></MyLink>
                            <MyLink href='/' className="hover:text-[#25D366]"><FaWhatsappSquare /></MyLink>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-start items-start md:items-center gap-3 md:gap-5">
                    <h4 className='text-xl font-semibold flex gap-3 justify-center items-center'><span><FaRegHandPointRight /></span> Product Catalog</h4>
                    <Download />
                    <MyLink href='/' className="text-gray-400 font-bold text-sm hover:text-white">Whatsapp me the Product Catalog</MyLink>

                </div>
            </div>
        </Container>
    )
}

export default Footer