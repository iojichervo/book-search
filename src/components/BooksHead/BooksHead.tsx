import Head from 'next/head'

export default function BooksHead() {
  return (
    <Head>
      <title>Book Search</title>
      <meta
        name='description'
        content='Simple app to search for books, enjoy!'
      />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='icon' href='/favicon.ico' />
    </Head>
  )
}
