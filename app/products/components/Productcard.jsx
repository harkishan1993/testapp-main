
import React from 'react'
import Myimage from '@/components/Myimage'
import MyLink from '@/components/Mylink'
function Productcard({ name, path, slug }) {

    let image = !!path?.[0]?.url ? JSON.parse(path?.[0]?.url) : []
    let url = image?.[0]?.secure_url || '/'
    return (
        <div className="w-[100%] p-1 flex flex-col justify-between items-center rounded-[10px] shadowapply">
            <Myimage src={url} width={130} height={130} className='w-[100%] h-auto rounded-[10px]' priority={true} />
            <div className="p-4 flex flex-col justify-center items-end text-center gap-2">
                <h3 className="productname"><MyLink href={`/products/${slug}`}>{name}
                    {/* <span className="text-gray-500">({qty})</span> */}
                </MyLink></h3>
                <MyLink href={`/products/${slug}`} className="cartbtn">
                    view
                </MyLink>
            </div>
        </div>
    )
}

export default Productcard