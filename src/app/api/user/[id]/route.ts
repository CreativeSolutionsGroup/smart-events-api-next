import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma'

const res = NextResponse


export async function GET(req: Request, {params}: {params:{id:string}}) {
  const id = params.id
  const user = await prisma.user.findFirst({ where: { id } })
  return res.json(user)
}

