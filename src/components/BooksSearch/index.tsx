import BooksTable from '@/components/BooksTable'
import { Empty, Input, Row } from 'antd'
import { useState } from 'react'

const { Search } = Input

export default function BooksSearch() {
  const [isInvalid, setIsInvalid] = useState<boolean>(false)
  const [search, setSearch] = useState<string>()

  const onSearch = (value: string) => {
    if (value.length > 3) {
      setSearch(value)
      setIsInvalid(false)
    } else {
      setIsInvalid(true)
    }
  }

  return (
    <>
      <div id="search-wrapper">
        <Search
          placeholder="Search..."
          status={isInvalid ? 'error' : ''}
          onSearch={onSearch}
          enterButton
        />
        {isInvalid && <small>The searched value needs to be longer</small>}
      </div>

      {!search && <Empty />}
      {search && <BooksTable search={search} />}
    </>
  )
}
