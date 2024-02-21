import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (
  req: NextRequest,
  { params }: { params: { uid: string } },
) => {
  try {
    const userDataByid = await prisma.user.findUnique({
      where: { uid: params.uid },
      include: {
        Diaries: true,
      },
    });
    return NextResponse.json({ userDataByid }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};
