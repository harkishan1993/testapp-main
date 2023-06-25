
import React from 'react'
import Myimage from '@/components/Myimage'
import MyLink from '@/components/Mylink'
function Productcard({name, path="/", qty}) {
    return (
        <div className="w-[100%] p-1 flex flex-col rounded-[10px] shadowapply">
            <Myimage src='/img/product3.jpg' width={400} height={350} className='w-[100%] h-[250px] rounded-[10px]' priority={false} />
            <div className="p-4 flex flex-col justify-center text-center gap-2">
                <h3 className="productname"><MyLink href={path}>{name} <span className="text-gray-500">({qty})</span></MyLink></h3>
            </div>
        </div>
    )
}

export default Productcard