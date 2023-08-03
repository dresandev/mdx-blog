import { notFound } from 'next/navigation'
import getPosts, { getPost } from '@helpers/getPosts'
import { getHeadings } from '@helpers/getHeadings'
import { Spacer } from '@components/Spacer'
import { PostBody } from '@mdx/PostBody'
import { TableOfContents } from '@components/TableOfContents'
import '@styles/markdown.css'
import styles from './page.module.css'

interface BlogProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogProps) {
  const post = await getPost(params.slug)
  return {
    title: post?.title,
    description: post?.description
  }
}

export async function generateStaticParams() {
  const posts = await getPosts()

  return posts.map(post => (
    {
      params: { slug: post?.slug }
    } as BlogProps))
}

export default async function Blog({ params }: BlogProps) {
  const post = await getPost(params.slug)

  if (!post) notFound()

  const headings = getHeadings(post.body)

  return (
    <>
      <div className={styles.titleWrapper}>
        <div className='container'>
          <Spacer height='6rem' />
          <h1 className={styles.title}>{post.title}</h1>
        </div>
      </div>

      <div className={styles.contentContainer}>
        <aside className={styles.aside}>
          <TableOfContents
            className={styles.tableOfContents}
            headings={headings}
          />
        </aside>
        <article className={styles.content}>
          <h2 id='introduccion' className='hideElement'>
            Introducción
          </h2>
          <PostBody>
            {post.body}
          </PostBody>
        </article>
      </div>
    </>
  )
}
