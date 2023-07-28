import Link from 'next/link'
import styles from './PostCard.module.css'

interface PostCardProps {
  title: string
  description: string
  publishedOn: string
  estimatedReadingTime: string
  href: string
}

export const PostCard: React.FC<PostCardProps> = ({
  title,
  description,
  publishedOn,
  estimatedReadingTime,
  href
}) => {
  return (
    <Link className={styles.postCard} href={href}>
      <h3 className={styles.h3Title}>{title}</h3>
      <p>{description}</p>
      <p className={styles.time}>
        {publishedOn} — {estimatedReadingTime}
      </p>
    </Link>
  )
}
