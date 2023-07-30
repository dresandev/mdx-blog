import Image from 'next/image'
import getPosts from '@helpers/getPosts'
import { sortPosts } from '@helpers/sortPosts'
import { CustomSearchBar } from '@components/CustomSearchBar'
import { Separator } from '@components/Separator'
import { PostList } from '@components/PostList'
import { PostCard } from '@components/PostCard'
import readerImg from '@assets/images/reader-3d.png'
import styles from './page.module.css'

export default async function Home() {
  const posts = await getPosts()
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
      <div className={styles.header}>
        <h1 className={styles.headerTitle}>
          Dresan Blog
        </h1>
        <CustomSearchBar className={styles.searchBar} />
      </div>

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
