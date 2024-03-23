import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest, { params }: { params: { uid: string,
  diaryId: number } }) => {
  try {
    const diary = await prisma.user.findUnique({
      where: {
        id: String(params.uid),
      },
      include: {
        Diaries: {
          select: {
            id: true,
            date: true,
            title: true,
            body: true,
            mind: true,
            createdAt: true,
            publishedAt: true,
            updatedAt: true,
            userId: true,
          },
          where: {
            id: Number(params.diaryId),
          },
        },
      },
    });
    return NextResponse.json({ diary }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};
