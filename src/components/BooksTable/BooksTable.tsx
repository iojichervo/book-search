import { fetcher } from '@/util/fetcher'
import { Table } from 'antd'
import useSWR from 'swr'

interface BooksTableProps {
  search: string
}

export default function BooksTable(props: BooksTableProps) {
  const { data, error, isLoading } = useSWR('/search.json?q=' + props.search)

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
