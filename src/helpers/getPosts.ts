import { cache } from 'react'
import matter from 'gray-matter'
import path from 'path'
import fs from 'fs/promises'
import type { Post } from '@types'

const getPosts = cache(async () => {
  const relativeFilePath = './posts/'
  const posts = await fs.readdir(relativeFilePath)

  return Promise.all(
    posts
      .filter(file => path.extname(file) === '.mdx')
      .map(async file => {
        const filePath = `${relativeFilePath}${file}`
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
