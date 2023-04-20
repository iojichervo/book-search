import { Skeleton, Typography } from 'antd'
import useSWR from 'swr'

const { Title } = Typography

interface BookDetail {
  id: string
}

export default function BookDetail(props: BookDetail) {
  const { data, error, isLoading } = useSWR(`/works/${props.id}.json`)

  if (isLoading || !data) return <Skeleton />
  return <Title level={2}>{data.title}</Title>
}
