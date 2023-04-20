import BooksHead from '@/components/BooksHead/BooksHead'
import { useRouter } from 'next/router'

export default function Works() {
  const router = useRouter()
  const { key } = router.query

  return (
    <>
      <BooksHead />
      The key is {key}
    </>
  )
}
