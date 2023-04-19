import BooksTable from '@/components/BooksTable'
import { Empty, Input, Row } from 'antd'
import { useState } from 'react'

const { Search } = Input

const MIN_LENGTH_SEARCH = 3

export default function BooksSearch() {
  const [isInvalid, setIsInvalid] = useState<boolean>(false)
  const [search, setSearch] = useState<string>()

  const onSearch = (value: string) => {
    if (value.length > MIN_LENGTH_SEARCH) {
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
        {isInvalid && (
          <small>
            The searched value needs have at least {MIN_LENGTH_SEARCH}{' '}
            characters
          </small>
        )}
      </div>

      {!search && <Empty description={'No books have been searched'} />}
      {search && <BooksTable search={search} />}
    </>
  )
}
