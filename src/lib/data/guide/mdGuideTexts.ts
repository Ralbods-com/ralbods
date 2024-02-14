export const mdGuideTexts = [
  {
    kind: 'h1',
    sign: '#',
    text: 'タイトル',
    description: '行頭で「#」と「半角スペース」の後に文字列を入力',
  },
  {
    kind: 'h2',
    sign: '##',
    text: '見出し',
    description: '行頭で「##」と「半角スペース」の後に文字列を入力',
  },
  {
    kind: 'h3',
    sign: '###',
    text: '小見出し',
    description: '行頭で「###」と「半角スペース」の後に文字列を入力',
  },
  {
    kind: 'code',
    sign: '``',
    text: 'コード',
    description: '「``」で文字列を囲む',
  },
  {
    kind: 'list',
    sign: '-',
    text: 'リスト',
    description: '行頭で「-」と「半角スペース」の後に文字列を入力',
  },
  {
    kind: 'numList',
    sign: '1.',
    text: '番号リスト',
    description:
      '行頭で「1.」と「半角スペース」の後に文字列を入力。二つ目以降は「1.」を「番号.」に変更',
  },
  {
    kind: 'quote',
    sign: '>',
    text: '引用',
    description: '行頭で「>」と「半角スペース」の後に文字列を入力',
  },
];
