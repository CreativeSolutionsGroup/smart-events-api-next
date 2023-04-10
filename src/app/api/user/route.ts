import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma'
import { User } from '@prisma/client';

const res = NextResponse

/**
 * Get all users.
 * GET /user
 */
export async function GET() {
  const users = await prisma.user.findMany()
  return res.json(users)
}

/**
 * Adds one user.
 * POST /user
 * Body:
 * {
 *  email
 *  name
 *  student_id
 *  phone
 *  reward_points
 * }
 */
export async function POST(req: Request){
  const { email, name, studentId, rewardPoints } = await req.json()

  try {
    const user = await prisma.user.create({
      data: {
        email: email,
        name: name,
        studentId: studentId,
        rewardPoints: parseInt(rewardPoints),
      }
    })
    return res.json(user)
  } catch (e) {
    console.error(e);
    return new res(e as string, {
      status: 500
    });
  }
}

