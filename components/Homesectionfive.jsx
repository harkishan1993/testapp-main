import React from 'react'
import Container from './Container'
import Myimage from './Myimage'
import Sectiontitle from './Sectiontitle'
function Homesectionfive() {
    return (
        <Container>
            <div className='flex flex-col justify-center items-center gap-4'>
            <Sectiontitle>Our Strengths</Sectiontitle>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 gap-[20px] md:gap-[40px] grid-flow-dense'>
                    <div className='flex flex-col justify-center items-center p-4 border-[1.5px] shadow-md rounded-[10px] group'>
                        <div className='min-h-[150px] flex justify-center items-center'>
                            <Myimage src='/img/product1.jpg' width={100} height={100} className='w-[100px] h-[100px] transition-all rounded-full group-hover:-translate-y-2' />
                        </div>
                        <div className='flex flex-col justify-center items-center gap-3'>
                            <h4 className='text-xl font-semibold'>Latest Technology</h4>
                            <p className='othertext'>We use the latest available and accessible technology for long lasting and trouble-free field performance.</p>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center p-4 border-[1.5px] shadow-md rounded-[10px] group'>
                        <div className='min-h-[150px] flex justify-center items-center'>
                            <Myimage src='/img/product4.jpg' width={100} height={100} className='w-[100px] h-[100px] transition-all rounded-full group-hover:-translate-y-2' />
                        </div>
                        <div className='flex flex-col justify-center items-center gap-3'>
                            <h4 className='text-xl font-semibold'>Latest Technology</h4>
                            <p className='othertext'>We use the latest available and accessible technology for long lasting and trouble-free field performance.</p>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center p-4 border-[1.5px] shadow-md rounded-[10px] group'>
                        <div className='min-h-[150px] flex justify-center items-center'>
                            <Myimage src='/img/product3.jpg' width={100} height={100} className='w-[100px] h-[100px] transition-all rounded-full group-hover:-translate-y-2' />
                        </div>
                        <div className='flex flex-col justify-center items-center gap-3'>
                            <h4 className='text-xl font-semibold'>Latest Technology</h4>
                            <p className='othertext'>We use the latest available and accessible technology for long lasting and trouble-free field performance.</p>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center p-4 border-[1.5px] shadow-md rounded-[10px] group'>
                        <div className='min-h-[150px] flex justify-center items-center'>
                            <Myimage src='/img/product1.jpg' width={100} height={100} className='w-[100px] h-[100px] transition-all rounded-full group-hover:-translate-y-2' />
                        </div>
                        <div className='flex flex-col justify-center items-center gap-3'>
                            <h4 className='text-xl font-semibold'>Latest Technology</h4>
                            <p className='othertext'>We use the latest available and accessible technology for long lasting and trouble-free field performance.</p>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center p-4 border-[1.5px] shadow-md rounded-[10px] group'>
                        <div className='min-h-[150px] flex justify-center items-center'>
                            <Myimage src='/img/product2.jpg' width={100} height={100} className='w-[100px] h-[100px] transition-all rounded-full group-hover:-translate-y-2' />
                        </div>
                        <div className='flex flex-col justify-center items-center gap-3'>
                            <h4 className='text-xl font-semibold'>Latest Technology</h4>
                            <p className='othertext'>We use the latest available and accessible technology for long lasting and trouble-free field performance.</p>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center p-4 border-[1.5px] shadow-md rounded-[10px] group'>
                        <div className='min-h-[150px] flex justify-center items-center'>
                            <Myimage src='/img/product3.jpg' width={100} height={100} className='w-[100px] h-[100px] transition-all rounded-full group-hover:-translate-y-2' />
                        </div>
                        <div className='flex flex-col justify-center items-center gap-3'>
                            <h4 className='text-xl font-semibold'>Latest Technology</h4>
                            <p className='othertext'>We use the latest available and accessible technology for long lasting and trouble-free field performance.</p>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center p-4 border-[1.5px] shadow-md rounded-[10px] group'>
                        <div className='min-h-[150px] flex justify-center items-center'>
                            <Myimage src='/img/product1.jpg' width={100} height={100} className='w-[100px] h-[100px] transition-all rounded-full group-hover:-translate-y-2' />
                        </div>
                        <div className='flex flex-col justify-center items-center gap-3'>
                            <h4 className='text-xl font-semibold'>Latest Technology</h4>
                            <p className='othertext'>We use the latest available and accessible technology for long lasting and trouble-free field performance.</p>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center p-4 border-[1.5px] shadow-md rounded-[10px] group'>
                        <div className='min-h-[150px] flex justify-center items-center'>
                            <Myimage src='/img/product4.jpg' width={100} height={100} className='w-[100px] h-[100px] transition-all rounded-full group-hover:-translate-y-2' />
                        </div>
                        <div className='flex flex-col justify-center items-center gap-3'>
                            <h4 className='text-xl font-semibold'>Latest Technology</h4>
                            <p className='othertext'>We use the latest available and accessible technology for long lasting and trouble-free field performance.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Homesectionfive