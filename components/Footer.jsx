import Container from "./Container"
import MyLink from "./Mylink"
function Footer() {
    return (
        <Container>
            <div className="grid grid-cols-3 bg-black text-white p-12">
                <div className="flex flex-col justify-center items-start gap-5">
                    <h4 className='text-xl font-semibold'>Useful Links</h4>
                    <div className="flex flex-col gap-4 justify-center items-start">
                        <MyLink href='/' className="text-gray-400 font-bold text-sm hover:text-white">Careers</MyLink>
                        <MyLink href='/' className="text-gray-400 font-bold text-sm hover:text-white">Quality Policy</MyLink>
                        <MyLink href='/' className="text-gray-400 font-bold text-sm hover:text-white">Privacy Policy</MyLink>
                        <MyLink href='/' className="text-gray-400 font-bold text-sm hover:text-white">Shipping Policy</MyLink>
                        <MyLink href='/' className="text-gray-400 font-bold text-sm hover:text-white">Cancellation Policy</MyLink>
                        <MyLink href='/' className="text-gray-400 font-bold text-sm hover:text-white">Return & Refund Policy</MyLink>
                        <MyLink href='/' className="text-gray-400 font-bold text-sm hover:text-white">Terms of Service</MyLink>
                    </div>
                </div>
                <div></div>
                <div></div>
            </div>
        </Container>
    )
}

export default Footer