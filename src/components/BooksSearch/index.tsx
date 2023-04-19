import BooksTable from '@/components/BooksTable'
import { Empty, Input } from 'antd'
import { useState } from 'react'

const { Search } = Input

export default function BooksSearch() {
  const [isInvalid, setIsInvalid] = useState<boolean>(false)
  const [search, setSearch] = useState<string>()

  const onSearch = (value: string) => {
    if (value.length >= 3) {
      setSearch(value)
      setIsInvalid(false)
    } else {
      setIsInvalid(true)
    }
  }

  return (
    <>
      <Search
        placeholder="Search..."
        status={isInvalid ? 'error' : ''}
        onSearch={onSearch}
        enterButton
      />
      {!search && <Empty />}
      {search && <BooksTable search={search} />}
    </>
  )
}
