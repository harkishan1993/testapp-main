
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
                            <Myimage src='/img/1_Building Automation.jpg' width={150} height={80} className='w-[100%] h-auto rounded-[10px]' priority={false} />
                            <h3 className="productname mx-4 my-2"><MyLink href='/'>Building Automation</MyLink></h3>
                            {/* <MyLink href='/' className="linktext mx-4 my-2">read more</MyLink> */}
                        </div>
                        <div className="p-1 flex flex-col items-center rounded-[10px] shadowapply">
                            <Myimage src='/img/2_Server Room.jpg' width={150} height={80} className='w-[100%] h-auto rounded-[10px]' priority={false} />
                            <h3 className="productname mx-4 my-2"><MyLink href='/'>Server Room</MyLink></h3>
                            {/* <MyLink href='/' className="linktext mx-4 my-2">read more</MyLink> */}
                        </div>
                        <div className="p-1 flex flex-col items-center rounded-[10px] shadowapply">
                            <Myimage src='/img/3_Pharma Lab.jpg' width={150} height={80} className='w-[100%] h-auto rounded-[10px]' priority={false} />
                            <h3 className="productname mx-4 my-2"><MyLink href='/'>Pharma Lab</MyLink></h3>
                            {/* <MyLink href='/' className="linktext mx-4 my-2">read more</MyLink> */}
                        </div>
                </div>
            </div>
        </Container>
    )
}

export default Homesectionthree