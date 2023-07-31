import Image from 'next/image'
import Link from 'next/link'
import getPosts from '@helpers/getPosts'
import { sortPosts } from '@helpers/sortPosts'
import { Separator } from '@components/Separator'
import { PostList } from '@components/PostList'
import { PostCard } from '@components/PostCard'
import readerImg from '@assets/images/reader-3d.png'
import styles from './page.module.css'

export default async function Home() {
  const posts = await getPosts()

  if (posts.length <= 1) {
    throw new Error('Se necesitan minimo dos publicaciones para que la UI tenga sentido en este sitio')
  }

  const sortedPosts = sortPosts({ posts: posts as [] })
  const latestPost = sortedPosts.shift()

  const {
    title,
    description,
    publishedOn,
    estimatedReadingTime,
    slug,
  } = latestPost!

  return (
    <>
      <h1 className={styles.h1Title}>Dresan Blog</h1>
      <p className={styles.description}>
        Si deseas conocer las tecnologías usadas en este sitio y demás recursos, puedes hacerlo en <Link className='link' href='/about'>esta página.</Link>
      </p>

      <section className={styles.latestPost}>
        <div>
          <h2 className={styles.h2Title}>Última publicación</h2>
          <PostCard
            title={title}
            description={description}
            publishedOn={publishedOn}
            estimatedReadingTime={estimatedReadingTime}
            href={slug}
          />
        </div>
        <Image
          className={styles.imageDecoration}
          src={readerImg}
          alt='Imagen 3d de un lector'
          draggable={false}
        />
      </section>
      <Separator />
      <section className={styles.posts}>
        <h2 className={styles.h2Title}>Publicaciones</h2>
        <PostList posts={sortedPosts} />
      </section>
    </>
  )
}
