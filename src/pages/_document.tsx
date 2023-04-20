import { Html, Head, Main, NextScript } from 'next/document'
import { Layout } from 'antd'

const { Content } = Layout

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <body>
        <Layout id='main-layout'>
          <Content>
            <Main />
            <NextScript />
          </Content>
        </Layout>
      </body>
    </Html>
  )
}
