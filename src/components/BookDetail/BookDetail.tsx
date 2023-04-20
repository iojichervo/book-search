import { Breadcrumb, Skeleton, Typography, Image, Row, Col } from 'antd'
import Link from 'next/link'
import useSWR from 'swr'
import MediaQuery from 'react-responsive'
import { Book } from '@/models/Book'
import { BreadcrumbItemType } from 'antd/es/breadcrumb/Breadcrumb'
import BookInformation from '../BookInformation/BookInformation'

const { Title } = Typography

interface BookDetailProps {
  id: string
}

export default function BookDetail(props: BookDetailProps) {
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
      {error && (
        <p data-testid='error-msg-book-detail'>
          There was an error while loading the book
        </p>
      )}
      {isLoading && <Skeleton />}
      {data && (
        <>
          <Title level={2}>{data.title}</Title>

          <Row wrap={false}>
            <Col flex='400px'>
              {data.covers && (
                <Image
                  data-testid='book-img'
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

            <MediaQuery minWidth={481}>
              <Col flex='auto'>
                <BookInformation book={data} />
              </Col>
            </MediaQuery>
          </Row>

          <MediaQuery maxWidth={480}>
            <BookInformation book={data} />
          </MediaQuery>
        </>
      )}
    </>
  )
}
