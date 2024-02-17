import { prisma } from '@/lib/prisma';
import { NextResponse, NextRequest } from 'next/server';
import { dateFormat } from '@/lib/function/DateFormat/dateFormat';

export const GET = async (req: NextRequest, { params }: { params: { uid: String } }) => {
  const today = dateFormat(new Date());
  try {
    const DiaryDataByuserIdBydate = await prisma.diary.findFirst({
      where: {
        userId: String(params.uid),
        date: today,
      },
    });
    return NextResponse.json({ DiaryDataByuserIdBydate }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};
