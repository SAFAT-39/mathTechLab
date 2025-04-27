'use server';

import { compile } from '@mdx-js/mdx';
import { run } from '@mdx-js/mdx';
import * as runtime from 'react/jsx-runtime';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export async function renderMDX(content: string) {
  const compiled = await compile(content, {
    outputFormat: 'function-body',
    useDynamicImport: true,
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  });

  const { default: Content } = await run(compiled.value, {
    ...runtime,
  });

  return Content;
}
