import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';
// 新規ユーザー追加
export const POST = async (req: NextRequest) => {
  const { email, name } = await req.json();
  try {
    const userData = await prisma.user.create({
      data: {
        email,
        name,
        uid: 'ああああ',
      },
    });
    return NextResponse.json({ userData }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};
