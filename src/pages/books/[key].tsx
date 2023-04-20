import BooksHead from '@/components/BooksHead/BooksHead'
import { useRouter } from 'next/router'

export default function Book() {
  const router = useRouter()
  const { key } = router.query

  return <>
      <BooksHead />

  The key is {key}
  </>
}
