
import Container from "./Container"
import Myimage from "./Myimage"
import MyLink from "./Mylink"
import Sectiontitle from "./Sectiontitle"
function Law() {
    return (
        <Container>
            <div className="flex flex-col justify-center items-center gap-4">
                <Sectiontitle>{`We purely abide by Ω's Law!`}</Sectiontitle>
                <div className="grid grid-cols-1 grid-rows-1 min-[825px]:grid-cols-5 min-[825px]:grid-rows-1 gap-4">
                    <div className="flex justify-center">
                        <Myimage src='/img/law.jpg' width={100} height={100} className='w-[125px] h-[125px] rounded-full' priority={false}/>
                    </div>
                    <div className="min-[825px]:col-span-4 flex flex-col gap-4">
                        <p className="textbase">We provide comprehensive solutions for accurate measurement and control of Humidity, Pressure, Flow, Level, pH, Speed, and more. Our products are reliable and of excellent quality, meeting the EN61010 International Safety Standards.</p>
                        <MyLink href='/' className="linktext">Know Us Better</MyLink>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Law