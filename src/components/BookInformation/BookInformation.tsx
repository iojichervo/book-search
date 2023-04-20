import { Typography, Divider } from 'antd'
import AuthorDetail from '../AuthorDetail/AuthorDetail'
import { Book } from '@/models/Book'
import { valueConversor } from '@/util/valueConversor'

const { Paragraph } = Typography

interface BookInformationProps {
  book: Book
}

export default function BookInformation(props: BookInformationProps) {
  const data = props.book
  return (
    <>
      {data.description && (
        <Paragraph>{valueConversor(data.description)}</Paragraph>
      )}

      {data.first_publish_date && (
        <span>First published in {data.first_publish_date}</span>
      )}

      <Divider>{data.authors.length == 1 ? 'Author' : 'Authors'}</Divider>

      {(data.authors || []).map((a) => (
        <AuthorDetail key={a.author.key} id={a.author.key.split('/')[2]} />
      ))}
    </>
  )
}
