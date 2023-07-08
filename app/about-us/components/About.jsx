import Container from '@/components/Container'
import Myimage from '@/components/Myimage'
import React from 'react'

function About() {
    return (
        <Container>
            <div className='flex flex-col gap-12'>
                <div className='flex justify-center'>
                    <Myimage src='/img/logo.png' width={400} height={200} className='w-full lg:w-1/2 h-auto border-b-2 border-blue-900' priority={true} />
                </div>
                <div className='flex flex-col gap-4 border shadow-xl p-5'>
                    <p>If it is a matter of Quality….</p>
                    <p>Tenacious is born in 21st century is Driven by young youth and new generation. Our goal is made in India and make in India.</p>
                    <p>
                        Tenacious offer a wide range of measurement and control instruments for humidity, temperature, pressure, flow and Gas for a wide range of applications: We provide services for Industrial Data Analysis with IOT Hardware and Web Platform also we provide customize sensor and controller for OEM as per their applications.
                    </p>
                </div>
            </div>
        </Container>
    )
}

export default About