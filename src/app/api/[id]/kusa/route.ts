import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { useParams } from 'next/navigation';

export const GET = async () => {
  const params = useParams<{ id: string }>();
  try {
    const kusaData = await prisma.diary.findMany({
      where: { userId: params.id },
    });
    return NextResponse.json({ kusaData }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};
