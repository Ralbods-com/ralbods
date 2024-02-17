import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (req: NextRequest) => {
  const { email } = await req.json();
  try {
    const res = await prisma.user.findUnique({
      where: { email },
      include: { Diaries: true },
    });
    return NextResponse.json({ res }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};
