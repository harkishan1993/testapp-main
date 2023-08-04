import React from 'react'
import MyLink from './Mylink'
import Myimage from './Myimage'
import Homecontainer from './Homecontainer'
function Homesectionone() {
  return (
    <Homecontainer>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='flex flex-col items-center justify-center gap-4 order-2 md:order-1'>
                <h1 className='headtext'></h1>
                <p className='textbase textset'>We provide a wide range of measuring products like temperature and humidity, airflow, dew point, liquid flow, differential pressure, pressure, liquid level, air quality, etc. Our products cover many industries, such as industrial processes, system integration, exhaust gas removal, compressed dry air, and HVAC.</p>
                <MyLink href='/products' className='capitalize btn'>
                    our products
                </MyLink>
            </div>
            <div className='order-1 md:order-2'>
                <Myimage src='/img/Front.png' width={500} height={500} className='w-[100%] h-auto rounded-lg shadow-xl' priority={false}/>
            </div>
        </div>
    </Homecontainer>
  )
}

export default Homesectionone