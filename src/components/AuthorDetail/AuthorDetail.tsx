import { Spin, Card } from 'antd'
import useSWR from 'swr'

interface AuthorDetail {
  id: string
}

export default function AuthorDetail(props: AuthorDetail) {
  const { data, error, isLoading } = useSWR(`/authors/${props.id}.json`)

  return (
    <>
      {error && <p>There was an error while loading the Author</p>}
      {isLoading && <Spin />}
      {data && (
        <Card title={data.name} style={{ width: 300 }}>
          <p>{data.bio.value}</p>
        </Card>
      )}
    </>
  )
}
