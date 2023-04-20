import { Author } from '@/models/Author'
import { valueConversor } from '@/util/valueConversor'
import { Spin, Card, Typography, Alert } from 'antd'
import useSWR from 'swr'

const { Paragraph } = Typography

interface AuthorDetail {
  id: string
}

export default function AuthorDetail(props: AuthorDetail) {
  const { data, error, isLoading } = useSWR<Author>(`/authors/${props.id}.json`)

  return (
    <>
      {error && (
        <Alert
          data-testid='error-msg-author'
          message='An error has occurred, try again...'
          type='error'
        />
      )}
      {isLoading && <Spin />}
      {data && (
        <Card title={data.name} style={{ width: 300 }}>
          <Paragraph ellipsis={{ rows: 4, tooltip: valueConversor(data.bio) }}>
            {valueConversor(data.bio)}
          </Paragraph>
        </Card>
      )}
    </>
  )
}
