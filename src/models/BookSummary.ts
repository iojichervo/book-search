export interface BookSummary {
  num_found: number
  docs: {
    key: string
    title: string
    author_name?: string[]
    first_publish_year: number
  }[]
}
