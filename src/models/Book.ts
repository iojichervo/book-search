export interface Book {
  title: string
  covers: number[]
  description: { value: string } | string
  first_publish_date: string
  authors: { author: { key: string } }[]
}
