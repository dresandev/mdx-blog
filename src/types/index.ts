export interface Post {
  title: string
  slug: string
  publishedOn: string
  lastModified: string
  description: string
  body: string
  estimatedReadingTime: string
  published: boolean
}

export interface Heading {
  slug: string;
  title: string;
  level: number;
}
