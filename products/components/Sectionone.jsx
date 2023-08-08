
import Container from "@/components/Container"
import Productcard from "./Productcard"
function Sectionone({product}) {
    return (
        <Container>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 gap-[20px] md:gap-[40px] grid-flow-dense'>
            {
                product?.data?.map((product, index)=>{
                   return <Productcard key={index} name={product?.name} path={product?.image} slug = {product?.slug} />
                })
            }
            </div>
        </Container>
    )
}
export default Sectionone