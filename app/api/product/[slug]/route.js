import { NextResponse } from 'next/server'
import { prismaConnect, prismaDisconnect, getProductBySlug } from '@/prisma/db'

export const GET = async (req,{params:{slug}}) => {
    try {
        await prismaConnect();
        let data = await getProductBySlug(slug);
        await prismaDisconnect();
        return NextResponse.json({ message: 'ok', data }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}