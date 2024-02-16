'use client';

import MarkdownIt from 'markdown-it';

export default function SmallMarkDown({ body } : { body: string }) {
  const md = MarkdownIt();
  const mdData = md.render(body);

  return (
    <div dangerouslySetInnerHTML={{ __html: mdData }} className='md-small-container' />
  );
}
