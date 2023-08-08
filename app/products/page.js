import Pageheader from "@/components/Pageheader"
import Sectionone from "./components/Sectionone"
const getProduct = async () => {
  let product = []
  try {
     product = await fetch(`https://tenaciousinstrument.in/api/product`,{
      cache:'no-cache'
     }).then((r)=>r.json()) 
    
  } catch (error) {
    console.log(error)
  }
  return product
}
export default async function page() {
  const product = await getProduct()
 
  return (
    <>
       <Pageheader pageTitle='Products' />
       <Sectionone product = {product} />
    </>
  )
}
