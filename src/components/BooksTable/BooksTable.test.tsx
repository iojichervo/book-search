import { act } from 'react-dom/test-utils'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { SWRConfig } from 'swr'
import '../../util/matchMedia'
import BooksTable from './BooksTable'

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
    }
  },
}))

describe('BooksTable', () => {
  it('renders the component', async () => {
    const fetcher = () => {
      return {
        docs: [
          {
            key: 'somekey',
            title: 'a good book',
            author_name: ['good author'],
            first_publish_year: 1999,
          },
        ],
      }
    }

    await act(async () =>
      render(
        <SWRConfig value={{ fetcher }}>
          <BooksTable search={'example'} />
        </SWRConfig>
      )
    )

    const alert = screen.queryByTestId('books-table-alert-msg')
    expect(alert).not.toBeInTheDocument()
    const table = screen.queryByTestId('books-table')
    expect(table).toBeInTheDocument()

    expect(screen.getByText('a good book')).toBeInTheDocument()
    expect(screen.getByText('good author')).toBeInTheDocument()
    expect(screen.getByText('1999')).toBeInTheDocument()
  })

  it('renders the component showing an error message', async () => {
    const fetcher = () => {
      throw new Error('error')
    }
    await act(async () =>
      render(
        <SWRConfig value={{ fetcher }}>
          <BooksTable search={'something'} />
        </SWRConfig>
      )
    )
    const alert = screen.queryByTestId('books-table-alert-msg')
    expect(alert).toBeInTheDocument()
    const table = screen.queryByTestId('books-table')
    expect(table).not.toBeInTheDocument()
  })
})
