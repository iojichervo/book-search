import { Spin, Table } from 'antd'
import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then((r) => r.json())

interface BooksTableProps {
  search: string
}

export default function BooksTable(props: BooksTableProps) {
  const { data, error, isLoading } = useSWR(
    'https://openlibrary.org/search.json?q=' + props.search,
    fetcher
  )

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Author Name',
      dataIndex: 'author_name',
      key: 'author_name',
    },
    {
      title: 'First Publish Year',
      dataIndex: 'first_publish_year',
      key: 'first_publish_year',
    },
  ]

  if (error) return <p>An error has occurred...</p>
  return (
    <Table
      dataSource={data && data.docs}
      columns={columns}
      loading={isLoading}
    />
  )
}
