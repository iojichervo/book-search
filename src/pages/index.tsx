import { Layout, Typography } from 'antd'
import Head from 'next/head'
import BooksSearch from '@/components/BooksSearch'

const { Title } = Typography
const { Content } = Layout

export default function Home() {
  return (
    <>
      <Head>
        <title>Book Search</title>
        <meta
          name="description"
          content="Simple app tou search for books, enjoy!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout id="main-layout">
        <Content>
          <Title level={2}>Book Search</Title>

          <BooksSearch />
        </Content>
      </Layout>
    </>
  )
}
