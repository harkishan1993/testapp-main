import Pageheader from "@/components/Pageheader"
import Sectionone from "./components/Sectionone"
async function page() {
  let product = await fetch(`https://tenaciousinstrument.in/api/product`,{
      cache:'no-cache'
     }).then((r)=>r.json()) 
 
  return (
    <>
       <Pageheader pageTitle='Products' />
       <Sectionone product = {product} />
    </>
  )
}

export default page