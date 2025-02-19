import { prisma } from '@/lib/prisma';
import { NextResponse, NextRequest } from 'next/server';

export const GET = async (req: NextRequest, { params }: { params: { id: string } }) => {
  try {
    const kusaData = await prisma.diary.findMany({
      where: { userId: params.id },
    });
    return NextResponse.json({ kusaData }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};
