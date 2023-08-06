import Pageheader from "@/components/Pageheader"
import Sectionone from "./components/Sectionone"
async function page() {
  let product = []
  try {
     product = await fetch(`${process.env.URL_BASE}/api/product`,{
      next:{
        revalidate:1
      }
     }).then((r)=>r.json()) 
  } catch (error) {
    console.log(error);
  }
  return (
    <>
       <Pageheader pageTitle='Products' />
       <Sectionone product = {product} />
    </>
  )
}

export default page