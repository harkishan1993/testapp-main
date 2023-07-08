import React from 'react'
import Container from '@/components/Container'
import Contactlink from './Contactlink'
import Contactform from './Contactform'
function Contactpage() {
    return (
        <Container>
             <div className='flex gap-[60px] lg:gap-[30px] flex-col lg:flex-row'>
                    <Contactlink />
                    <Contactform />
                </div>
        </Container>
    )
}

export default Contactpage