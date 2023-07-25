import Link from 'next/link'
import styles from './PostCard.module.css'

interface PostCardProps {
  title: string
  description: string
  date: string
  estimatedReadingTime: string
}

export const PostCard: React.FC<PostCardProps> = ({
  title,
  description,
  date,
  estimatedReadingTime
}) => {
  return (
    <Link className={styles.postCard} href='/'>
      <h3 className={styles.h3Title}>{title}</h3>
      <p>{description}</p>
      <p className={styles.time}>{date} — {estimatedReadingTime}</p>
    </Link>
  )
}
