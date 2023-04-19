import { Alert, Table } from 'antd'
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

  if (error)
    return (
      <Alert
        data-testid="alert-msg"
        message="An error has occurred, try again..."
        type="error"
      />
    )
  return (
    <Table
      dataSource={data && data.docs}
      columns={columns}
      loading={isLoading}
    />
  )
}
