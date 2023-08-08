import React from 'react'
import Productdetail from './components/Productdetail'
import Pageheader from '@/components/Pageheader'
import "./globals.css"
import Description from './components/Description'
import Relativeprod from './components/Relativeprod'
const getProduct = async (product) => {
  let products = []
  try {
     products = await fetch(`https://tenaciousinstrument.in/api/product/${product}`,{
      cache:'no-cache'
      }).then((r)=>r.json()) 
    
  } catch (error) {
    console.log(error)
  }
  return products
}
async function page({ params:{slug} }) {
 
     const products = await getProduct(slug)
  return (
    <>
      <Pageheader pageTitle='Products' />
      <Productdetail product = {products} />
      <Description product = {products} />
      <Relativeprod productRel = {products} />
    </>
  )
}

export default page