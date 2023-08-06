import {NextResponse} from 'next/server'
import {prismaConnect, prismaDisconnect, getSliderimage} from '@/prisma/db'

export const GET = async () => {
   try {
        await prismaConnect();
        let data = await getSliderimage();
        await prismaDisconnect();
        return NextResponse.json({message:'ok', data },{status:200})
   } catch (error) {
       console.log(error);
       return NextResponse.json({error:"Internal Server Error"}, {status:500});
   }
}