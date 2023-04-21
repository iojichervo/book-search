import { Empty, Input } from 'antd'
import { useState } from 'react'
import BooksTable from '../BooksTable/BooksTable'

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
      <div id='search-wrapper'>
        <Search
          data-testid='books-search'
          placeholder='Search...'
          status={isInvalid ? 'error' : ''}
          onSearch={onSearch}
          enterButton
        />
        {isInvalid && (
          <small data-testid='books-search-invalid'>
            The searched value needs have at least {MIN_LENGTH_SEARCH}{' '}
            characters
          </small>
        )}
      </div>

      {!search && (
        <Empty
          className='empty-search'
          data-testid='empty-search'
          description={'No books have been searched'}
        />
      )}
      {search && <BooksTable data-testid='books-table' search={search} />}
    </>
  )
}
