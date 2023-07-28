import { Code } from 'bright'
import { MDXComponents } from 'mdx/types'
import NextImage from 'next/image'
import { MDXImage } from './MdxImage'

export const mdxComponents: MDXComponents = {
  // @ts-expect-error types
  img: MDXImage,
  // @ts-expect-error types
  Image: NextImage,
  pre: ({ children, ...props }: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLPreElement
  >) => (
    <Code {...props} theme='material-darker'>
      {children as any}
    </Code>
  ),
}
