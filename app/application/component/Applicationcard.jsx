import Myimage from '@/components/Myimage'
import MyLink from '@/components/Mylink'
import { FaRegHeart, FaHeart } from 'react-icons/fa'
import React from 'react'

function Applicationcard({ path, name, img, smalldesc,likes, isLike }) {
    return (
        <div className="w-[100%] p-1 flex flex-col justify-between items-center rounded-[10px] shadowapply">
            <Myimage src={img} width={130} height={130} className='w-[100%] h-auto rounded-[10px]' priority={true} />
            <div className="p-4 lg flex flex-col gap-4">
                <h3 className="productname"><MyLink href={path}>{name}</MyLink></h3>
                <p className='othertext'>{smalldesc}</p>
                <div className='flex gap-4 justify-between'>
                    <div className="flex items-center gap-2 text-emerald-800">
                        {!isLike?<FaRegHeart className='cursor-pointer' />:<FaHeart />}
                        <span>{likes}</span>
                    </div>
                    <MyLink href={path} className="text-base font-bold tracking-wider block text-amber-600 hover:underline hover:underline-offset-4">
                        Read more
                    </MyLink>
                </div>
            </div>
        </div>
    )
}

export default Applicationcard