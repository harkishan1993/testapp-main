import Myimage from "./Myimage"
import MyLink from "./Mylink"

function Slidechilds({ children }) {
    return (
        <div className="pb-1">
            <div className="w-[100%] p-1 flex flex-col justify-center items-center rounded-[10px] shadowapply">
                <Myimage src='/img/THW-1.jpg' width={400} height={350} className='w-[100%] h-auto rounded-[10px]' priority={false}/>
                <div className="p-4 flex flex-col justify-center text-center gap-2">
                    <h3 className="productname"><MyLink href='/'>Single Phase Thyristor Power Switch – POW-1-ZC</MyLink></h3>
                    <span className="productprice"><span>₹2000</span> - <span>₹3000</span></span>
                </div>
            </div>
        </div>
    )
}

export default Slidechilds