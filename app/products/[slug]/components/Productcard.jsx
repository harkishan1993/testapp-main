import MyLink from "@/components/Mylink"
import Myimage from "@/components/Myimage"
import {FaRegHeart} from 'react-icons/fa'
function Productcard({ name, price, path = "/" }) {
    return (
        <div className="w-[100%] p-1 flex flex-col justify-center items-center rounded-[10px] shadowapply">
            <Myimage src='/img/product3.jpg' width={400} height={350} className='w-[100%] h-[250px] rounded-[10px]' priority={false} />
            <div className="p-4 flex flex-col justify-center text-center gap-2">
                <h3 className="productname"><MyLink href={path}>{name}</MyLink></h3>
                <span className="productprice">{price}</span>
                <MyLink href='/products/temperature-controllers/portable-thermometer-dtm-21' className="cartbtn">
                        view details
                </MyLink>
                <div className="flex items-center gap-2 text-emerald-800">
                    <FaRegHeart/>
                    <span>Add to Wishlist</span>
                </div>
            </div>
        </div>
    )
}

export default Productcard