import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import BooksSearch from './BooksSearch'

describe('BooksSearch', () => {
  it('renders the component', () => {
    render(<BooksSearch />)
  })
})
