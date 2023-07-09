import Productcard from "@/app/products/[slug]/components/Productcard"
import Container from "@/components/Container"

function Relativeprod() {
    return (
        <Container>
            <div className="mb-4 text-center">
                <h3 className="productdetailTitle inline-block">Related products
                    <div className="h-[1px] w-full bg-orange-300"></div>
                </h3>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 gap-[20px] md:gap-[40px] grid-flow-dense'>
                <Productcard name='Hygro Thermometer – HTM-22' price='₹1,313 – ₹2,468' />
                <Productcard name='Hygro Thermometer – HTM-22' price='₹1,313 – ₹2,468' />
                <Productcard name='Hygro Thermometer – HTM-22' price='₹1,313 – ₹2,468' />
                <Productcard name='Hygro Thermometer – HTM-22' price='₹1,313 – ₹2,468' />
            </div>
        </Container>
    )
}

export default Relativeprod