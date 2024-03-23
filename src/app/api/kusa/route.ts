// import { prisma } from '@/lib/prisma';
// import { NextResponse } from 'next/server';

// export const GET = async (id: string) => {
//   try {
//     const diaries = await prisma.diary.findUnique({
//       where: { userId: id },
//     });
//     return NextResponse.json({ diaries }, { status: 201 });
//   } catch (error) {
//     return NextResponse.json({ error }, { status: 500 });
//   }
// };
