import React from 'react'
import Container from './Container'
import MyLink from './Mylink'
import Myimage from './Myimage'
function Homesectionone() {
  return (
    <Container>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='flex flex-col items-center justify-center gap-4 order-2 md:order-1'>
                <h1 className='headtext'>Partners in Measurement $ Control</h1>
                <p className='textbase'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima error adipisci consequatur consectetur delectus dolore, nam, nihil quo architecto vero voluptatem, quia dolor dignissimos laborum perferendis! Modi fugit repudiandae ratione.</p>
                <MyLink href='/products' className='capitalize btn'>
                    our product
                </MyLink>
            </div>
            <div className='order-1 md:order-2'>
                <Myimage src='/img/product1.jpg' width={500} height={500} className='w-[100%] rounded-lg shadow-xl' priority={false}/>
            </div>
        </div>
    </Container>
  )
}

export default Homesectionone