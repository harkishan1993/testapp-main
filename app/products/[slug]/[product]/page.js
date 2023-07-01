import React from 'react'
import Productdetail from './components/Productdetail'
import Pageheader from '@/components/Pageheader'
import "./globals.css"
import Description from './components/Description'
import Relativeprod from './components/Relativeprod'
function page({ params }) {
  const {product} = params
  return (
    <>
      <Pageheader pageTitle='Products' />
      <Productdetail/>
      <Description />
      <Relativeprod />
    </>
  )
}

export default page