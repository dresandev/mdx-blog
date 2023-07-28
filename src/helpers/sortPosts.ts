import { Post } from '@types'

interface SortPostsProps {
  posts: Post[],
  descMode?: boolean
}

export const sortPosts = ({ posts, descMode = true }: SortPostsProps): Post[] => {
  if (posts.length === 0) return []

  const sortedPosts = posts.sort((postA, postB) => {
    const dateA = new Date(postA.publishedOn)
    const dateB = new Date(postB.publishedOn)
    return descMode
      ? dateB.getTime() - dateA.getTime()
      : dateA.getTime() - dateB.getTime()
  })

  return sortedPosts
}
