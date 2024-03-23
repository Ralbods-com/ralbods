import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest, { params }: { params: { uid: string,
  diaryId: number } }) => {
  try {
    const diaryDetail = await prisma.diary.findUnique({
      where: {
        id: Number(params.diaryId),
      },
      include: {
        user: true,
      },
    });
    return NextResponse.json({ diaryDetail }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};
