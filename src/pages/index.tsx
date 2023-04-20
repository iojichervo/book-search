import { Typography } from 'antd'
import BooksSearch from '@/components/BooksSearch/BooksSearch'
import BooksHead from '@/components/BooksHead/BooksHead'

const { Title } = Typography

export default function Home() {
  return (
    <>
      <BooksHead />

      <Title level={2}>Book Search</Title>

      <BooksSearch />
    </>
  )
}
