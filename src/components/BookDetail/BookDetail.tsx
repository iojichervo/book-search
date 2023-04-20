import {
  Breadcrumb,
  Skeleton,
  Typography,
  Image,
  Row,
  Col,
  Divider,
} from 'antd'
import Link from 'next/link'
import useSWR from 'swr'
import AuthorDetail from '../AuthorDetail/AuthorDetail'
import { Book } from '@/models/Book'
import { BreadcrumbItemType } from 'antd/es/breadcrumb/Breadcrumb'
import { valueConversor } from '@/util/valueConversor'

const { Title, Paragraph } = Typography

interface BookDetail {
  id: string
}

export default function BookDetail(props: BookDetail) {
  const { data, error, isLoading } = useSWR<Book>(`/works/${props.id}.json`)

  const breadcrumbItems: BreadcrumbItemType[] = [
    { title: <Link href='/'>Home</Link> },
  ]

  if (data) {
    breadcrumbItems.push({ title: data.title })
  }

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      {error && <p>There was an error while loading the book</p>}
      {isLoading && <Skeleton />}
      {data && (
        <>
          <Title level={2}>{data.title}</Title>

          <Row wrap={false}>
            <Col flex='400px'>
              {data.covers && (
                <Image
                  alt={`Cover image of ${data.title}`}
                  src={`https://covers.openlibrary.org/b/id/${data.covers[0]}-L.jpg`}
                  placeholder={
                    <Image
                      preview={false}
                      alt={`Cover image of ${data.title}`}
                      src={`https://covers.openlibrary.org/b/id/${data.covers[0]}-S.jpg`}
                    />
                  }
                />
              )}
            </Col>

            <Col flex='auto'>
              {data.description && (
                <Paragraph>{valueConversor(data.description)}</Paragraph>
              )}

              {data.first_publish_date && (
                <span>First published in {data.first_publish_date}</span>
              )}

              <Divider>
                {data.authors.length == 1 ? 'Author' : 'Authors'}
              </Divider>

              {(data.authors || []).map((a) => (
                <AuthorDetail
                  key={a.author.key}
                  id={a.author.key.split('/')[2]}
                />
              ))}
            </Col>
          </Row>
        </>
      )}
    </>
  )
}
