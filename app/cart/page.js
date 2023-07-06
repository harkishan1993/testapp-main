import Container from '@/components/Container'
import React from 'react'
import Cartcard from './components/Cartcard'
import Checkoutbtn from './components/Checkoutbtn'
function page() {
    return (
        <Container>
            <div className='flex flex-col lg:flex-row gap-3'>
                <div className='flex flex-col gap-3'>
                    <Cartcard />
                    <Cartcard />
                </div>
                <div className='p-4 w-full md:w-1/2 lg:w-96 h-[280px] border-2 flex flex-col justify-between'>
                    <div className='flex justify-between items-center border-b-2'>
                        <div className='capitalize text-base font-semibold'>Subtotal</div>
                        <div className='text-base'>₹6,300</div>
                    </div>
                    <div>
                        <div className='flex justify-between items-center border-b-2 gap-5'>
                            <div className='capitalize font-semibold'>Shipping</div>
                            <div className='text-sm text-gray-600 text-right'>Shipping costs are calculated during checkout.</div>
                        </div>
                    </div>
                    <div>
                        <div className='flex justify-between items-center border-b-2 gap-5'>
                            <div className='capitalize font-semibold'>Total</div>
                            <div className='text-xl font-bold md:text-2xl md:font-extrabold tracking-wider line-clamp-2'>₹12,000</div>
                        </div>
                    </div>
                   <Checkoutbtn />
                </div>
            </div>
        </Container>
    )
}

export default page