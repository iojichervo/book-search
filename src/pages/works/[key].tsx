import BookDetail from '@/components/BookDetail/BookDetail'
import BooksHead from '@/components/BooksHead/BooksHead'
import { useRouter } from 'next/router'

export default function Works() {
  const router = useRouter()
  const { key } = router.query

  return (
    <>
      <BooksHead />

      {typeof key == 'string' && <BookDetail id={key} />}
      {typeof key != 'string' && <p>There was an error with the key {key}</p>}
    </>
  )
}
