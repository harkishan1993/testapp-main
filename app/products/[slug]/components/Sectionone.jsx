import Container from "@/components/Container"
import {Productdetails} from '@/data/productpage'
import Productcard from "./Productcard"
function Sectionone({productSlug}) {
     const getResult = Productdetails.filter((product, index)=>{
         return product.category == productSlug
     })
  return (
    <Container>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 gap-[20px] md:gap-[40px] grid-flow-dense'>
             {
             getResult?.[0]?.product?.map((product, index)=>{
                return <Productcard key={index} name={product?.name} price={product?.price} />
             })
             }
        </div>
    </Container>
  )
}

export default Sectionone