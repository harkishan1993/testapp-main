import React from 'react'
import Myimage from '@/components/Myimage'
import {FaWindowClose} from 'react-icons/fa'
function Cartcard() {
    return (
        <div className='relative'>
            <div className='grid grid-flow-row md:grid-flow-col gap-3 py-2 px-3 border-2' >
                <div className='flex flex-col items-center md:items-start md:justify-between gap-2 col-span-2 md:border-r pr-3'>
                    <span className='text-black text-2xl font-semibold tracking-wider capitalize' >Product</span>
                    <div className='flex flex-col justify-center items-center gap-2 min-[1199px]:gap-1 min-[1199px]:flex-row'>
                        <Myimage src='/img/THW-1.jpg' width={80} height={80} className='w-28 h-auto' />
                        <div className='flex flex-col justify-center items-center min-[1199px]:items-start'>
                            <h3 className='text-base md:text-sm text-gray-800'>Portable Thermometer - DTM-21</h3>
                            <div className='flex text-base md:text-sm text-gray-600 mt-3'><span>Select Part No:- </span><span> 1001-1</span></div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center md:items-start gap-2 border-r pr-3'>
                    <span className='text-black text-2xl font-semibold tracking-wider capitalize'>Price</span>
                    <div className='flex text-base md:text-xl text-emerald-800'><span>₹6000</span></div>
                </div>
                <div className='flex flex-col items-start gap-2 md:border-r pr-3'>
                    <span className='text-black text-2xl font-semibold tracking-wider capitalize'>Quantity</span>
                    <div className="py-3">
                        <input type="number" size="4" min='1' step='1' defaultValue='1' inputMode="numeric" autoComplete="off" className="form-input w-full rounded-[6px] border-none shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] text-gray-500 focus:ring-0 focus:shadow-[0px_0px_8px_0px_rgba(40,70,255,0.3)]" />
                    </div>
                </div>
                <div className='flex flex-col items-center md:items-start gap-2'>
                    <span className='text-black text-2xl font-semibold tracking-wider capitalize'>subprice</span>
                    <div className='flex text-base md:text-xl text-emerald-800'><span>₹6000</span></div>
                </div>
                <div className='w-7 h-7 rounded-full'></div>
            </div>
            <div className='absolute right-0 top-0 cursor-pointer'>
                <FaWindowClose className='text-xl' />
            </div>
        </div>
    )
}

export default Cartcard