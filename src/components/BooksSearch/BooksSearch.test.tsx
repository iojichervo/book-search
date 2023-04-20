import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import '../../util/matchMedia'
import BooksSearch from './BooksSearch'

describe('BooksSearch', () => {
  it('renders the component', () => {
    render(<BooksSearch />)

    const search = screen.queryByTestId('books-search')
    expect(search).toBeInTheDocument()
    const empty = screen.queryByTestId('empty-search')
    expect(empty).toBeInTheDocument()
  })

  it('fills a value on the search and clicks on button', () => {
    render(<BooksSearch />)

    const search = screen.getByRole('textbox') // input inside <Search />
    fireEvent.change(search, { target: { value: 'banana' } })

    const btn = screen.getByRole('button')
    fireEvent.click(btn)

    const empty = screen.queryByTestId('empty-search')
    expect(empty).not.toBeInTheDocument()
    const table = screen.queryByTestId('books-table')
    expect(table).toBeInTheDocument()
  })

  it('shows an message if the input is invalid', () => {
    render(<BooksSearch />)

    const search = screen.getByRole('textbox') // input inside <Search />
    fireEvent.change(search, { target: { value: 'q' } })

    const btn = screen.getByRole('button')
    fireEvent.click(btn)

    const invalid = screen.queryByTestId('books-search-invalid')
    expect(invalid).toBeInTheDocument()
    const table = screen.queryByTestId('books-table')
    expect(table).not.toBeInTheDocument()
  })
})
