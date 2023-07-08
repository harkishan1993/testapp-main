import { MdLocationOn } from 'react-icons/md'
import { FaPhoneAlt, FaEnvelope, FaShareAlt, FaFacebookSquare, FaTwitterSquare, FaInstagram, FaYoutubeSquare } from 'react-icons/fa'
function Contactlink() {
    return (
        <div className='flex flex-col gap-5 order-2 lg:order-1'>
            <div className='w-[100%] border-2 border-emerald-800 rounded-[10px] p-4 sm:p-[30px]'>
                <div className='flex gap-[17px]'>
                    <div className='w-[61px] h-[61px] border shrink-0 flex items-center justify-center border-emerald-800 rounded-[10px]'>
                        <MdLocationOn className='text-[41px] leading-[55px] text-emerald-800' />
                    </div>
                    <div className='flex flex-col justify-between'>
                        <span className='font-sans text-[20px] leading-[26px] font-medium text-emerald-800 capitalize'>Address</span>
                        <span className='font-mono text-[18px] leading-[23px] text-black'>Gujrat, India</span>
                    </div>
                </div>
            </div>
            <div className='w-[100%] border-2 border-blue-900 rounded-[10px] p-4 sm:p-[30px]'>
                <div className='flex gap-[17px]'>
                    <div className='w-[61px] h-[61px] border flex items-center shrink-0 justify-center border-blue-900 rounded-[10px]'>
                        <FaPhoneAlt className='text-[30px] leading-[35px] text-blue-900' />
                    </div>
                    <div className='flex flex-col justify-between'>
                        <span className='font-sans text-[20px] leading-[26px] font-medium text-blue-900 capitalize'>Phone</span>
                        <span className='font-mono text-[18px] leading-[23px] text-black'>+91-7984840004</span>
                    </div>
                </div>
            </div>
            <div className='w-[100%] border-2 border-blue-900 rounded-[10px] p-4 sm:p-[30px]'>
                <div className='flex gap-[17px] break-all'>
                    <div className='w-[61px] h-[61px] border flex items-center justify-center border-blue-900 shrink-0 rounded-[10px]'>
                        <FaEnvelope className='text-[30px] leading-[35px] text-blue-900' />
                    </div>
                    <div className='flex flex-col justify-between'>
                        <span className='font-sans text-[20px] leading-[26px] font-medium text-blue-900 capitalize'>Email</span>
                        <span className='font-mono text-[18px] leading-[23px] block text-black'>tenacious.instrumet@gmail.com</span>
                    </div>
                </div>
            </div>
            <div className='w-[100%] border-2 border-blue-900 rounded-[10px] p-4 sm:p-[30px]'>
                <div className='flex gap-[17px]'>
                    <div className='w-[61px] h-[61px] border flex items-center shrink-0 justify-center border-blue-900 rounded-[10px]'>
                        <FaShareAlt className='text-[30px] leading-[35px] text-blue-900' />
                    </div>
                    <div className='flex flex-col justify-between'>
                        <span className='font-sans text-[20px] leading-[26px] font-medium text-blue-900 capitalize'>Follow Us</span>
                        <span className='font-mono text-[18px] leading-[23px] flex gap-[15px] text-black flex-wrap'>
                            <FaFacebookSquare className='text-[20px] leading-[23px]' />
                            <FaTwitterSquare className='text-[20px] leading-[23px]' />
                            <FaInstagram className='text-[20px] leading-[23px]' />
                            <FaYoutubeSquare className='text-[20px] leading-[23px]' />
                            <FaEnvelope className='text-[20px] leading-[23px] ' />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contactlink