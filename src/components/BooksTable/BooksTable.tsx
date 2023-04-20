import { BookSummary } from '@/models/BookSummary'
import { Alert, Table } from 'antd'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import useSWR from 'swr'

interface BooksTableProps {
  search: string
}

export default function BooksTable(props: BooksTableProps) {
  const [page, setPage] = useState<number>(1)
  const { data, error, isLoading } = useSWR<BookSummary>(
    `/search.json?q=${props.search}&page=${page}`
  )
  const router = useRouter()

  useEffect(() => setPage(1), [props.search])

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
        data-testid='books-table-alert-msg'
        message='An error has occurred, try again...'
        type='error'
      />
    )

  return (
    <Table
      data-testid='books-table'
      rowClassName='books-table-row'
      onRow={(record) => {
        return {
          onClick: (_) => {
            router.push(record.key)
          },
        }
      }}
      dataSource={data && data.docs}
      columns={columns}
      loading={isLoading}
      pagination={{
        showSizeChanger: false,
        current: page,
        pageSize: 100,
        total: data?.num_found,
      }}
      onChange={(pag) => setPage(pag.current!)}
    />
  )
}
