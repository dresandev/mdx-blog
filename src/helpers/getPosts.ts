import { cache } from 'react'
import matter from 'gray-matter'
import path from 'path'
import fs from 'fs/promises'
import type { Post } from '@types'

const getPosts = cache(async () => {
  const postsDirectory = path.resolve(process.cwd(), './src/posts/') // Obtener la ruta completa a la carpeta "posts"
  const posts = await fs.readdir(postsDirectory)

  return Promise.all(
    posts
      .filter(file => path.extname(file) === '.mdx')
      .map(async file => {
        const filePath = path.join(postsDirectory, file) // Utilizar path.join para construir la ruta completa del archivo
        const postContent = await fs.readFile(filePath, 'utf8')
        const { data, content } = matter(postContent)

        if (data.published === false) return null

        return { ...data, body: content } as Post
      })
  )
})

export const getPost = async (slug: string) => {
  const posts = await getPosts()
  return posts.find(post => post?.slug === slug)
}

export default getPosts