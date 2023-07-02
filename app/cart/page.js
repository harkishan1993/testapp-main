import Container from '@/components/Container'
import React from 'react'
import Cartcard from './components/Cartcard'
function page() {
    return (
        <Container>
            <div className='flex flex-col lg:flex-row gap-3'>
                <div className='flex flex-col gap-3'>
                    <Cartcard />
                    <Cartcard />
                </div>
                <div className='p-4 w-full md:w-80 border-2'></div>
            </div>
        </Container>
    )
}

export default page