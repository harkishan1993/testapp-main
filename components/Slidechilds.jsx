import Myimage from "./Myimage"
import MyLink from "./Mylink"

function Slidechilds({ name, path, image }) {
    let image1 = !!image?.[0]?.url ? JSON.parse(image?.[0]?.url): []
    let url = image1?.[0]?.secure_url || '/'
    return (
        <div className="pb-1">
            <div className="w-[100%] p-1 flex flex-col justify-between items-center rounded-[10px] shadowapply">
                <Myimage src={url} width={400} height={350} className='w-[100%] h-auto rounded-[10px]' priority={false}/>
                <div className="p-4 flex flex-col justify-center text-center gap-2">
                    <h3 className="productname"><MyLink href={!!path ? `/products/product/${path}`:'/'}>{name}</MyLink></h3>
                    {/* <span className="productprice">{price}</span> */}
                    <MyLink href={!!path ? `/products/product/${path}`:'/'} className="cartbtn">
                        view
                </MyLink>
                </div>
            </div>
        </div>
    )
}

export default Slidechilds