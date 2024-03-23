import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } },
) => {
  try {
    const userDataByid = await prisma.user.findUnique({
      where: { id: params.id },
      include: {
        Diaries: {
          orderBy: {
            id: 'desc',
          },
        },
      },
    });
    return NextResponse.json({ userDataByid }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};
