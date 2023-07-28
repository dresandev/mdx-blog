import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import { mdxComponents } from './components/MdxComponents'

interface PostBodyProps {
  children: string
}

export function PostBody({ children }: PostBodyProps) {
  return (
    <MDXRemote
      source={children}
      options={{
        mdxOptions: {
          remarkPlugins: [
            remarkGfm,
          ],
          rehypePlugins: [
            rehypeSlug,
            rehypeAutolinkHeadings
          ],
        },
      }}
      components={mdxComponents}
    />
  )
}
