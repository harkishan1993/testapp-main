import Pageheader from '@/components/Pageheader'
import React from 'react'
import About from './components/About'

function page() {
  return (
    <>
      <Pageheader pageTitle='About Us' />
      <About />
    </>
  )
}

export default page