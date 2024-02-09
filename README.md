# Ralbods
開発日記アプリ【Ralbods】のWebアプリケーション。

## 技術構成

- Next.js (フロントエンド)
- TypeScript
- Sass (スタイリング)
- Prisma (ORM)
- PlanetScale (DB)

## ファイル構成

    .
    ├── public/
    │   ├── next.svg
    │   └── vercel.svg
    │
    ├── public/
    │   ├── schema.prisma
    │   └── seed.ts
    │
    ├── src/
    │   ├── app/
    │   │   ├── layout.js
    │   │   ├── template.js
    │   │   ├── page.js
    │   │   ├── global.scss
    │   │   ├── page.module.scss
    │   │   ├── favicon.ico
    │   │   ├── apple-touch-icon.png
    │   │   ├── opengraph-image.png
    │   │   └── twitter-image.png
    │   │
    │   ├── components/（以下のファイルは頭文字大文字）
    │   │   ├── XXX/ (XXXに関するコンポーネント)
    │   │   │
    │   │   └── UI/ (ボタンなど細々したUI)
    │   │       ├── Animation/（Lottieのコンポーネント）
    │   │       ├── Button/
    │   │       ├── Menu/
    │   │       ├── Modal/
    │   │       └── Screen/
    │   │
    │   ├── lib/（配列や関数などの処理）
    │   │   ├── Function/（関数）
    │   │   ├── Image/（画像配列）
    │   │   ├── Key/（ローカルストレージなどのkey）
    │   │   └── Site/（メディアのURL）
    │   │
    │   └── types/ (型定義)
    │
    ├── .eslintrc.json
    ├── .gitignore
    ├── next-env.d.ts
    ├── next.config.js
    ├── package.json
    ├── package-lock.json
    ├── README.md
    └── tsconfig.json

