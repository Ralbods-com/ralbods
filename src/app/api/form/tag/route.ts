import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

// タグ取得
export const GET = async () => {
  try {
    const tags = await prisma.tag.findMany({});
    return NextResponse.json({ tags }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};

// タグ追加
export const POST = async (req: NextRequest) => {
  const { name } = await req.json();
  try {
    await prisma.tag.create({
      data: { name },
    });
    return NextResponse.json({ name }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};
