import getPosts from '@helpers/getPosts'

export default async function sitemap() {
  const posts = await getPosts()
  const baseUrl = 'https://dresan-blog.vercel.app/'

  const blogs = posts.map(post => ({
    url: `${baseUrl}${post!.slug}`,
    lastModified: new Date(post!.lastModified).toISOString().split('T')[0],
  }))

  const routes = ['/', '/about'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...blogs]
}
