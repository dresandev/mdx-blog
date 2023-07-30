import { notFound } from 'next/navigation'
import getPosts, { getPost } from '@helpers/getPosts'
import { getHeadings } from '@helpers/getHeadings'
import { PostBody } from '@mdx/PostBody'
import { TableOfContents } from '@components/TableOfContents'
import styles from './page.module.css'
import '@styles/markdown.css'

interface BlogProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogProps) {
  const post = await getPost(params.slug)
  return {
    title: post?.title
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

  if (!post) return notFound()

  const headings = getHeadings(post.body)

  return (
    <>
      <div className={styles.titleWrapper}>
        <div className='container'>
          <div className={styles.spacer}></div>
          <h1 className={styles.title}>{post.title}</h1>
        </div>
      </div>

      <div className={styles.contentContainer}>
        <article className={styles.content}>
          <h2 id='introduccion' className='hideElement'>
            Introducción
          </h2>
          <PostBody>
            {post.body}
          </PostBody>
        </article>
        <aside className={styles.asideContainer}>
          <TableOfContents
            className={styles.tableOfContents}
            headings={headings}
          />
        </aside>
      </div>
    </>
  )
}
