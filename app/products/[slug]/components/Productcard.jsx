
import Myimage from '@/components/Myimage'
import MyLink from '@/components/Mylink'
import {FaRegHeart} from 'react-icons/fa'
function Productcard({ name, path, image }) {
    
    let image1 = !!image?.[0]?.url ? JSON.parse(image?.[0]?.url) : []
    let url = image1?.[0]?.secure_url || '/'
    return (
        <div className="w-[100%] p-1 flex flex-col justify-between items-center rounded-[10px] shadowapply">
            <Myimage src={url} width={130} height={130} className='w-[100%] h-auto rounded-[10px]' priority={true} />
            <div className="p-4 flex flex-col justify-center text-center gap-2">
                <h3 className="productname"><MyLink href={`/products/${path}`}>{name}</MyLink></h3>
                {/* <span className="productprice">{price}</span> */}
                <MyLink href={`/products/${path}`} className="cartbtn">
                        view details
                </MyLink>
                <div className="flex items-center justify-center gap-2 text-emerald-800">
                    <FaRegHeart/>
                    {/* <span>Add to Wishlist</span> */}
                </div>
            </div>
        </div>
    )
}

export default Productcard