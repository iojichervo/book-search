import { Breadcrumb, Skeleton, Typography } from 'antd'
import Link from 'next/link'
import useSWR from 'swr'

const { Title } = Typography

interface BookDetail {
  id: string
}

export default function BookDetail(props: BookDetail) {
  const { data, error, isLoading } = useSWR(`/works/${props.id}.json`)

  const breadcrumbItems = [{ title: <Link href='/'>Home</Link> }]

  if (data) {
    breadcrumbItems.push({ title: data.title })
  }

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      {isLoading && <Skeleton />}
      {data && <Title level={2}>{data.title}</Title>}
    </>
  )
}
