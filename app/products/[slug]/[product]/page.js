import React from 'react'
import Productdetail from './components/Productdetail'
import Pageheader from '@/components/Pageheader'
import "./globals.css"
import Description from './components/Description'
import Relativeprod from './components/Relativeprod'
async function page({ params:{product} }) {
  let products = await fetch(`https://tenaciousinstrument.in/api/product/${product}`,{
      next:{
        revalidate:1
      }
     }).then((r)=>r.json()) 
 
  return (
    <>
      <Pageheader pageTitle='Products' />
      <Productdetail product = {products} />
      <Description product = {products} />
      <Relativeprod productRel = {products?.data?.[0]?.CategoriesOnCategorys} />
    </>
  )
}

export default page