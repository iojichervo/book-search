export interface Book {
  title: string
  covers: number[]
  description: string
  first_publish_date: string
  authors: { author: { key: string } }[]
}
