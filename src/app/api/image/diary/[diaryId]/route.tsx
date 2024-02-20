import { exampleDiaryData } from '@/lib/data/example/exampleData';
import { returnDiaryBgOGPColor } from '@/lib/function/color/returnDiaryOGPBgColor';
import { ImageResponse } from '@vercel/og';

export const runtime = 'edge';

export async function GET() {
  const diaryData = await exampleDiaryData;

  if (diaryData) {
    const bgColor = returnDiaryBgOGPColor(diaryData.mind);

    return new ImageResponse(
      (
        <div
          style={{
            boxSizing: 'border-box',
            width: 1200,
            height: 630,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '30px',
            backgroundColor: bgColor,
          }}
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              padding: '30px',
              fontSize: '40px',
              fontWeight: '800',
              backgroundColor: '#ffffff',
              borderRadius: '20px',
            }}
          >
            {diaryData.title}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    );
  } else {
    return new Response('Not Found', { status: 404 });
  }
}
