import { prisma } from '@/lib/prisma';
import { NextResponse, NextRequest } from 'next/server';

// postDiary
export const POST = async (
  req: NextRequest,
  { params }: { params: { uid: string } },
) => {
  const {
    userId, date, title, body, mind, tags,
  } = await req.json();

  try {
    const diaryData = await prisma.diary.create({
      data: {
        date,
        title,
        body,
        mind,
        publishedAt: new Date(),
        userId,
        tags: {
          createMany: {
            data: tags.map((tag: string) => (
              { name: tag }
            )),
          },
        },
      },
      include: {
        tags: true,
        user: true,
      },
    });
    return NextResponse.json({ diaryData }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};
