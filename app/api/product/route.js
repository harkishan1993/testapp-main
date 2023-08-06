import { NextResponse } from 'next/server'
import { prismaConnect, prismaDisconnect, getProductAll } from '@/prisma/db'

export const GET = async () => {
    try {
        await prismaConnect();
        let data = await getProductAll();
        await prismaDisconnect();
        console.log(data);
        return NextResponse.json({ message: 'ok', data }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}