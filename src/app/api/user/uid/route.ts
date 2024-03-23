import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';

// uid作成
export async function PATCH(req: NextRequest) {
  const { uid } = await req.json();
  const session = await getServerSession(authOptions);

  const haveUIDUser = await prisma.user.findUnique({ where: { uid } });

  if (haveUIDUser) {
    return NextResponse.json({ message: '既に使用されています' }, { status: 409 });
  } else {
    try {
      const res = await prisma.user.update({
        where: { id: session?.user.id },
        data: {
          uid,
          name: uid,
        },
      });

      return NextResponse.json({ res }, { status: 201 });
    } catch (e) {
      return NextResponse.json({ e }, { status: 500 });
    }
  }
}
