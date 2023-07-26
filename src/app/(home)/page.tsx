import Image from 'next/image'
import { CustomSearchBar } from '@components/CustomSearchBar'
import { PostCard } from '@components/PostCard'
import { Separator } from '@components/Separator'
import readerImg from '@assets/images/reader-3d.png'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <div className={styles.header}>
        <h1 className={styles.headerTitle}>
          Dresan Blog
        </h1>
        <CustomSearchBar />
      </div>
      <section className={styles.latestPost}>
        <div>
          <h2 className={styles.h2Title}>Última publicación</h2>
          <PostCard
            title='Por qué debería seguir aprendiendo estructuras de datos y algoritmos'
            description='Con el surgimiento generalizado de la inteligencia artificial, muchos ahora asumen que hay menos razones paratos y algoritmos es muy útil.'
            date='18 enero 2023'
            estimatedReadingTime='5 min'
          />
        </div>
        <Image
          className={styles.imageDecoration}
          src={readerImg}
          alt='reader image 3d'
          draggable={false}
        />
      </section>

      <Separator />

      <section className={styles.posts}>
        <h2 className={styles.h2Title}>Publicaciones</h2>
        <div className={styles.postsGrid}>
          <PostCard
            title='Por qué debería seguir aprendiendo estructuras de datos y algoritmos'
            description='Con el surgimiento generalizado de la inteligencia artificial, muchos ahora asumen que hay menos razones para aprender estructuras de datos.'
            date='18 enero 2023'
            estimatedReadingTime='5 min'
          />
          <PostCard
            title='Por qué debería seguir aprendiendo estructuras de datos y algoritmos'
            description='Con el surgimiento generalizado de la inteligencia artificial, muchos ahora asumen que hay menos razones para aprender estructuras de datos.'
            date='18 enero 2023'
            estimatedReadingTime='5 min'
          />
          <PostCard
            title='Por qué debería seguir aprendiendo estructuras de datos y algoritmos'
            description='Con el surgimiento generalizado de la inteligencia artificial, muchos ahora asumen que hay menos razones para aprender estructuras de datos.'
            date='18 enero 2023'
            estimatedReadingTime='5 min'
          />
        </div>
      </section>

    </>
  )
}
