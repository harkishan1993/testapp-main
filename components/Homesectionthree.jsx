import Container from "./Container"
import Myimage from "./Myimage"
import Sectiontitle from "./Sectiontitle"
import MyLink from "./Mylink"
function Homesectionthree() {
    return (
        <Container>
            <div className="flex flex-col justify-center items-center gap-4">
                <Sectiontitle>Our Applications</Sectiontitle>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[100%] gap-[20px] md:gap-[40px]">
                        <div className="p-1 flex flex-col items-center justify-between rounded-[10px] shadowapply">
                            <Myimage src='/img/product3.jpg' width={500} height={120} className='w-[100%] h-[120px] rounded-[10px]' priority={false} />
                            <h3 className="productname mx-4 my-2"><MyLink href='/'>SCR Power Regulators</MyLink></h3>
                            <MyLink href='/' className="linktext mx-4 my-2">read more</MyLink>
                        </div>
                        <div className="p-1 flex flex-col items-center rounded-[10px] shadowapply">
                            <Myimage src='/img/product4.jpg' width={500} height={120} className='w-[100%] h-[120px] rounded-[10px]' priority={false} />
                            <h3 className="productname mx-4 my-2"><MyLink href='/'>SCR Triggering Cards for OEM</MyLink></h3>
                            <MyLink href='/' className="linktext mx-4 my-2">read more</MyLink>
                        </div>
                        <div className="p-1 flex flex-col items-center rounded-[10px] shadowapply">
                            <Myimage src='/img/product2.jpg' width={500} height={120} className='w-[100%] h-[120px] rounded-[10px]' priority={false} />
                            <h3 className="productname mx-4 my-2"><MyLink href='/'>Thyristor Power Switches</MyLink></h3>
                            <MyLink href='/' className="linktext mx-4 my-2">read more</MyLink>
                        </div>
                </div>
            </div>
        </Container>
    )
}

export default Homesectionthree