import Container from "@/components/Container"
import Productcard from "./Productcard"
import { products } from "@/data/productpage"
function Sectionone() {
    return (
        <Container>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 gap-[20px] md:gap-[40px] grid-flow-dense'>
            {
                products.map((product, index)=>{
                   return <Productcard key={index} name={product?.name} path={product?.path} qty={product?.qty}/>
                })
            }
            </div>
        </Container>
    )
}

export default Sectionone