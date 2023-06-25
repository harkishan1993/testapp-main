import React from 'react'
import Productdetail from './components/Productdetail'
import Pageheader from '@/components/Pageheader'
import "./globals.css"
import Description from './components/Description'
function page({ params }) {
  const {product} = params
  return (
    <>
      <Pageheader pageTitle='Products' />
      <Productdetail/>
      <Description />
    </>
  )
}

export default page