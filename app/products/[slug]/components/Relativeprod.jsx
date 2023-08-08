import Container from "@/components/Container"
import Productcard from "@/products/components/Productcard"

function Relativeprod({productRel}) {
    return (
        <Container>
            <div className="mb-4 text-center">
                <h3 className="productdetailTitle inline-block">Related products
                    <div className="h-[1px] w-full bg-orange-300"></div>
                </h3>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 gap-[20px] md:gap-[40px] grid-flow-dense'>
                {
                     productRel?.data?.[0]?.CategoriesOnCategorys?.[0]?.category?.CategoriesOnCategorys?.map((value, index)=>{
                        return <Productcard key={index} name={value?.producs?.name} path={value?.producs?.slug} image={value?.producs?.image} />
                     })   
                }
            </div>
        </Container>
    )
}

export default Relativeprod