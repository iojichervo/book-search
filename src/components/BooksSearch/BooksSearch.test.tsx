import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import BooksSearch from '.'

describe('BooksSearch', () => {
  it('renders the component', () => {
    render(<BooksSearch />)
  })
})
