import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export const GET = async () => {
  try {
    const diaries = await prisma.diary.findMany({
      where: { userId: '0b3f8290-985f-4cc2-ac6d-ce2d314fab00' },
    });
    return NextResponse.json({ diaries }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};
