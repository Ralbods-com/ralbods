import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

// 投稿用
export const POST = async (req: NextRequest) => {
  const {
    userId, date, title, body, publishedAt, tags,
  } = await req.json();
  try {
    const diaryData = await prisma.diary.create({
      data: {
        userId,
        date,
        title,
        publishedAt,
        body,
        mind: 'aaaa',
        tags,
      },
    });
    return NextResponse.json({ diaryData }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};
