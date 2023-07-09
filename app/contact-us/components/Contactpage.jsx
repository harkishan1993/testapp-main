import React from 'react'
import Container from '@/components/Container'
import Contactlink from './Contactlink'
import Contactform from './Contactform'
import {FaRegHandPointRight} from 'react-icons/fa'
function Contactpage() {
    return (
        <Container>
            <div className='mb-5'>
                <h1 className='text-lg font-medium tracking-wide text-emerald-700'><FaRegHandPointRight className='text-2xl text-blue-900 shrink-0 float-left mr-2' /> Feel free to send us a message with any questions or remarks you have. We are here to assist you.</h1>
            </div>
            <div className='flex gap-[60px] lg:gap-[30px] flex-col lg:flex-row'>
                <Contactlink />
                <Contactform />
            </div>
        </Container>
    )
}

export default Contactpage