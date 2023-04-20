import { Author } from '@/models/Author'
import { Spin, Card, Typography } from 'antd'
import useSWR from 'swr'

const { Paragraph } = Typography

interface AuthorDetail {
  id: string
}

export default function AuthorDetail(props: AuthorDetail) {
  const { data, error, isLoading } = useSWR<Author>(`/authors/${props.id}.json`)

  return (
    <>
      {error && <p>There was an error while loading the Author</p>}
      {isLoading && <Spin />}
      {data && (
        <Card title={data.name} style={{ width: 300 }}>
          <Paragraph ellipsis={{ rows: 4, tooltip: data.bio }}>
            {data.bio}
          </Paragraph>
        </Card>
      )}
    </>
  )
}
