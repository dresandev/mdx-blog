import { Post } from '@types'
import { PostCard } from '@components/PostCard'
import styles from './PostList.module.css'

interface PostListProps {
  posts: Post[]
}

export const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <div className={styles.postsGrid}>
      {
        posts.map(post => (
          <PostCard
            key={post.slug}
            href={post.slug}
            {...post}
          />
        ))
      }
    </div>
  )
}
