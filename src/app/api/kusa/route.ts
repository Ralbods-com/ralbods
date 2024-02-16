import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export const GET = async () => {
  try {
    const diaries = await prisma.diary.findMany({
      where: { userId: 'bb6ee393-f11e-44e7-b1db-f6aaf706a3e0' },
    });
    return NextResponse.json({ diaries }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};
